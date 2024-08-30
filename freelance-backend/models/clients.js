import { DataTypes } from "sequelize";
import {sequlize} from '../config/db';

const Clients = await sequlize.define('Client', {
    client_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    company_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact_info: {
        type: DataTypes.BIGINT,
        allowNull: false,
    }
});

module.exports = Clients;