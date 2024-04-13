import { NextFunction, Request, Response } from 'express';
import { AppError, sendSuccessResponse } from '../helpers';
import { CompanyHouseTable, SicTable, UrlTable, VisaTable } from '../models';
import { Op } from 'sequelize';

/**
 * Fetches a paginated list of companies from the database.
 * This function handles incoming HTTP requests to retrieve companies with pagination support.
 * It expects query parameters for `limit` and `page` to control pagination. The function
 * validates these parameters and uses them to fetch a subset of companies from the CompanyHouseTable.
 * If the query parameters are invalid or missing, it throws an AppError with an appropriate message
 * and status code. On successful retrieval, it sends a JSON response containing the companies,
 * current page, total pages, and the total number of companies. In case of any unexpected errors,
 * it wraps the error in an AppError and passes it to the next middleware for error handling.
 */

export const getCompanies = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { q, l } = req.query;
    const qValue = typeof q === 'string' ? decodeURIComponent(q) : '';
    const lValue = typeof l === 'string' ? decodeURIComponent(l) : '';
        
    const limit = parseInt(req.query.limit as string) || 10;
    if (isNaN(limit) || limit <= 0) {
      // Throw an AppError if limit query parameter is invalid
      throw new AppError("Invalid 'limit' query parameter. 'limit' must be a positive number.", 400);
    }

    const page = parseInt(req.query.page as string) || 1;
    if (isNaN(page) || page <= 0) {
      // Throw an AppError if page query parameter is invalid
      throw new AppError("Invalid 'page' query parameter. 'page' must be a positive number.", 400);
    }

    const offset = (page - 1) * limit;

    let whereCondition = {};
    if (qValue) {
      whereCondition = {
        ...whereCondition,
        [Op.or]: [
          { company_name: { [Op.like]: `%${qValue}%` } },
          { '$sicDetails.industry$': { [Op.like]: `%${qValue}%` } },
        ],
      };
    }
    if (lValue) {
      whereCondition = {
        ...whereCondition,
        city: { [Op.like]: `%${lValue}%` },
      };
    }

    // Fetch paginated companies
    const { count: totalItems, rows: companies } = await CompanyHouseTable.findAndCountAll({
      where: whereCondition,
      limit: limit,
      offset: offset,
      order: [['company_name', 'ASC']],
      include: [UrlTable, VisaTable, SicTable],
    });

    // Calculate total pages
    const totalPages = Math.ceil(totalItems / limit);

    const formattedCompanies = companies.map(company => ({
      company_name: company.company_name,
      city: company.city,
      visa_route: company.visaDetails?.visa_route,
      company_status: company.company_status,
      industry: company.sicDetails?.industry,
      website_url: company.urlDetails?.website_url,
      linkedin_url: company.urlDetails?.linkedin_url,
    }));

    sendSuccessResponse(res, 200, 'Companies were retrieved successfully.', { companies: formattedCompanies, currentPage: page, totalPages, totalItems });
  } catch (error) {
    // Log the error and pass it to the error-handling middleware
    console.error('Error fetching companies:', error);

    if (!(error instanceof AppError)) {
      // If the error is not an instance of AppError, consider it as an unexpected error
      error = new AppError('An unexpected error occurred', 500);
    }

    next(error);
  }
};

