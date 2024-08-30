import { DataTypes, INTEGER } from "sequelize";
import {sequelize} from  '../config/db';


const FreeLancer = await sequelize.define('freelancer', {
    freelancer_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: DataTypes.STRING,
    },
    skills: {
        type: DataTypes.ARRAY,
        allowNull: false,
    },
    hourly_rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rating: {
        type: INTEGER,
    },
}) 

module.exports = FreeLancer;