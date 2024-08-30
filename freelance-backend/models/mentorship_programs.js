import { DataTypes } from "sequelize";
import { sequelize } from '../config/db';

const FreeLancer = require('./freelancers');
const Intern = require('./interns');

const Mentorship_Programs = await sequelize.define('Mentorship_Program', {
    program_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    mentor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: FreeLancer,
            key: 'freelancer_id',
        },
        autoIncrement: true,
    }
})