import { Table, Column, Model, DataType, PrimaryKey, HasMany } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { models } from "@v1/interfaces"
import {CompanyHouseTable} from './companyHouse.models';

// Define the attributes of the Plan model

// Specify which attributes are optional when creating an instance
type SicCreationAttributes = Optional<models.Sic, 'industry' | 'description'>;

@Table({tableName: "sic_table", timestamps: false})
export class SicTable extends Model<models.Sic, SicCreationAttributes> {

  @PrimaryKey
  @Column({ type: DataType.NUMBER })
  declare sic_code: number;

  // Optional fields from Visa interface
  @Column({ type: DataType.STRING, allowNull: true })
  declare industry?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare description?: string;

  @HasMany(() => CompanyHouseTable, 'sic_code')
declare companyHouseDetails: CompanyHouseTable[];


}
