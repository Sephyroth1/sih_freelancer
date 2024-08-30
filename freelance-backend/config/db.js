const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.PG_URL, {
    dialect: 'postgres',
    logging: false,
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection ot the database has been established successfully");
    }
    catch(err){
        console.error("Database Connection ended with error: ", err, "with the message: ", err.message);
        process.exit(1);
    }
}