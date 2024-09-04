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

Projects.belongsTo(User, { as: 'Client', foreignKey: 'client_id' });
Projects.belongsTo(User, { as: 'Freelancer', foreignKey: 'freelancer_id' });