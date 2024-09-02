const { sequelize } = require('./db.js');

const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true }); // alter: true will update the schema without dropping tables
        console.log("Database synchronized successfully");
    } catch (err) {
        console.error("Error synchronizing database:", err.message);
    }
};

syncDatabase();