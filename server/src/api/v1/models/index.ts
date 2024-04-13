import { sequelize } from '../../../database';
import { CompanyHouseTable } from './companyHouse.models';
import { SicTable } from './sic.models';
import { UrlTable } from './url.models';
import { VisaTable } from './visa.models';

export * from './companyHouse.models';
export * from './sic.models';
export * from './url.models';
export * from './visa.models';

sequelize.addModels([CompanyHouseTable, SicTable, UrlTable, VisaTable]);