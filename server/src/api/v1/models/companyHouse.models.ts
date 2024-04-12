import { Table, Column, Model, DataType, PrimaryKey, ForeignKey, HasOne, BelongsTo } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { models } from "../../v1/interfaces"
import {SicTable} from './sic.models';
import {UrlTable} from './url.models';
import {VisaTable} from './visa.models';

// Define the attributes of the Plan model

// Specify which attributes are optional when creating an instance
type CompanyHouseCreationAttributes = Optional<models.CompanyHouse, 'city' | 'address' | 'postcode' | 'sic_code' | 'company_charges' | 'company_name' | 'company_number' | 'company_status'>;

@Table({tableName: "companyhouse_table", timestamps: false})
export class CompanyHouseTable extends Model<models.CompanyHouse, CompanyHouseCreationAttributes> {

  @PrimaryKey
  @Column({ type: DataType.STRING })
  declare company_name: string;

  @ForeignKey(() => SicTable)
  @Column({ type: DataType.INTEGER })
  declare sic_code: number;

  // Optional fields from Visa interface
  @Column({ type: DataType.STRING, allowNull: true })
  declare city?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare address?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare postcode?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare company_status?: string;

  @Column({ type: DataType.BOOLEAN, allowNull: true })
  declare company_charges?: boolean;

  @Column({ type: DataType.STRING, allowNull: true })
  declare company_number?: string;

  @HasOne(() => UrlTable, 'company_name')
  declare urlDetails: UrlTable;

  @HasOne(() => VisaTable, 'company_name')
  declare visaDetails: VisaTable;
  
  
  @BelongsTo(() => SicTable, 'sic_code')
declare sicDetails: SicTable;

}