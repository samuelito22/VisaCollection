import express from 'express';

/**
 * Custom application error class that extends the built-in Error class.
 * It includes additional context specific to application errors, such as an HTTP status code,
 * a flag to indicate operational errors, and a more specific error status.
 * This class can be used to throw application-level errors that include more information
 * than standard JavaScript errors, making them more useful for error handling middleware
 * and responses.
 */
export class AppError extends Error {
  /**
     * HTTP status code for the error, indicating the error type (client or server).
     */
  statusCode: number;

  /**
     * Categorizes the error as either 'fail' for client-side errors or 'error' for server-side ones.
     */
  status: string;

  /**
     * Indicates whether the error is an expected one (true) as opposed to an unexpected programming error (false).
     */
  isOperational: boolean;
  
  /**
     * Initializes a new instance of the AppError class with a message and status code.
     * 
     * @param message Descriptive message about the error.
     * @param statusCode HTTP status code that best represents the error condition.
     */
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
  
    Error.captureStackTrace(this, this.constructor);
  }
}

  

/**
 * Sends a JSON success response.
 * 
 * This function is used to encapsulate the pattern of responding with a success status. 
 * It standardizes the success response structure across the application.
 * 
 * @param res The Express response object.
 * @param statusCode HTTP status code for the success response, typically in the 2xx range.
 * @param message Descriptive message indicating the success nature of the response.
 * @param data Optional payload to include in the response body. Defaults to null.
 */ 
export function sendSuccessResponse(res: express.Response, statusCode: number, message: string, data: any = null) {
  return res.status(statusCode).json({
    status: 'success',
    message: message,
    data,
  });
}