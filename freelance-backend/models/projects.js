import { DataTypes } from "sequelize";
import {sequelize} from "../config/db";

const Client = require('./clients');
const FreeLancer = require('./freelancers');

const Projects = await sequelize.define('Project', {
    project_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    client_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        references: {
            model: Client,
            key: 'client_id',
        },
        allowNull: false,
    },
    freelancer_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        references: {
            model: FreeLancer,
            key: 'freelancer_id'
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    budget: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
},
{
    timestamps: true
});