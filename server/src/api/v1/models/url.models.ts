import { Table, Column, Model, DataType, PrimaryKey, BelongsTo } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { models } from "../interfaces"
import {CompanyHouseTable} from './companyHouse.models';

// Define the attributes of the Plan model

// Specify which attributes are optional when creating an instance
type UrlCreationAttributes = Optional<models.Url, 'linkedin_url' | 'website_url'>;

@Table({tableName: "url_table", timestamps: false})
export class UrlTable extends Model<models.Url, UrlCreationAttributes> {

  @PrimaryKey
  @Column({ type: DataType.STRING })
  declare company_name: string;

  // Optional fields from Visa interface
  @Column({ type: DataType.STRING, allowNull: true })
  declare linkedin_url?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare website_url?: string;

  @BelongsTo(() => CompanyHouseTable, 'company_name')
  declare companyHouse: CompanyHouseTable;

}
