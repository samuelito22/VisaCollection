import { Table, Column, Model, DataType, PrimaryKey, BelongsTo } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { models } from "@v1/interfaces"
import {CompanyHouseTable} from './companyHouse.models';

// Define the attributes of the Plan model

// Specify which attributes are optional when creating an instance
type VisaCreationAttributes = Optional<models.Visa, 'type_rating' | 'visa_route'>;

@Table({tableName: "visa_table", timestamps: false})
export class VisaTable extends Model<models.Visa, VisaCreationAttributes> {

  @PrimaryKey
  @Column({ type: DataType.STRING })
  declare company_name: string;

  // Optional fields from Visa interface
  @Column({ type: DataType.STRING, allowNull: true })
  declare type_rating?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare visa_route?: string;

  @BelongsTo(() => CompanyHouseTable, 'company_name')
  declare companyHouse: CompanyHouseTable;

}
