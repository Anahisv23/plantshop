// Here I will include sequelize instance
const { Sequelize } = require('sequelize');

const dbURL = 'postgres://localhost:5432/plantshop'
// change this to process.env.DATABASE_URL

let config;
if (process.env.DATABASE_URL) {
  config = {
    logging: true,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  };
} else {
  config = {
    logging: false,
  };
}

const db = new Sequelize(dbURL, config) 

// test connection 
// async function testConnection() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     } finally {
//         await sequelize.close();
//     }
// }

// testConnection()

module.exports = {
  db
}