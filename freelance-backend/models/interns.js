import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const Intern = await sequelize.define('Intern', {
    intern_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    education: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    interests: {
        type: DataTypes.STRING,
    },
    availability: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Intern;