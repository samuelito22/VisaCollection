import { NODE_ENV, sequelizeConfig } from '../config'; // Adjust the path as needed
import { Sequelize } from 'sequelize-typescript';

const config = sequelizeConfig[NODE_ENV as 'development'];

// Create a Sequelize instance with the environment-specific configuration
const sequelize:Sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      host: config.host,
      port: config.port,
      dialect: config.dialect,
      dialectOptions: config.dialectOptions,
      logging:false
      // ... other Sequelize options
    }
  );

// Import models, e.g., UserModel
// const UserModel = sequelize.import('./userModel');

// Associate models if necessary
// UserModel.associate(sequelize.models);

export { sequelize }; // Export the sequelize instance
export default sequelize.models; // If you want to export models as well
