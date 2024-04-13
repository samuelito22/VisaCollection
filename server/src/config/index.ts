export * from './sequelize.config';

export const NODE_ENV = (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development';
export const PORT = (process.env.PORT as string);

