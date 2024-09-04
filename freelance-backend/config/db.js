const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.PG_URL, {
    dialect: 'postgres',
    logging: console.log,
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection ot the database has been established successfully");

        await sequelize.sync({ alter: true });
        console.log("The Models have been synced successfully with the database");
    }
    catch(err){
        console.error("Database Connection ended with error: ", err, "with the message: ", err.message);
        process.exit(1);
    }
}

module.exports = { sequelize, connectDB };