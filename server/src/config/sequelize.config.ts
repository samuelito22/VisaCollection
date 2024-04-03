interface SequelizeConfigAttributes {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: 'postgres' | 'mysql' | 'sqlite' | 'mariadb' | 'mssql';
  dialectOptions?: { // Make it optional to not enforce it on every dialect
    ssl?: {
      require: boolean;
      rejectUnauthorized: boolean;
    };
  };
  // ... include other Sequelize options as needed
}

interface SequelizeConfig {
  [env: string]: SequelizeConfigAttributes;
}

export const sequelizeConfig: SequelizeConfig = {
  development: {
    username: process.env.DB_USERNAME || 'default_username',
    password: process.env.DB_PASSWORD || 'default_password',
    database: process.env.DB_NAME || 'default_database',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Remember to set this to true in production!
      }
    },
  }
};
