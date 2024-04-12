process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  if (err instanceof Error){
    console.error(err.name, err.message)
  } else {
    console.error(err)
  }
  process.exit(1);
});


import dotenv from "dotenv";
dotenv.config();

import app from './app'; // Import the configured Express app
import { createServer } from 'http';
import { sequelize } from './database';
import "./api/v1/models"


sequelize.authenticate()
  .then(async () => {
    console.log('Connection has been established successfully. 🐘');

    await sequelize.sync().then(() => {
      console.log(`Tables have been synchronized.`);
    });

    // Start listening for requests after a successful database connection
    const server = createServer(app);
    const PORT = process.env.PORT || 3000;
    
    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT} 🥳`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });