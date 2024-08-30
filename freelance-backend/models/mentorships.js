import { DataTypes } from "sequelize";
import {sequelize} from '../config/db';


const FreeLancer = require('./freelancers');
const Intern = require('./interns');

const Mentorships = await sequelize.define('Mentorship', {
    mentorship_id: {
        type: DataTypes.INTEGER,
        autoIncrment: true,
        primaryKey: true,
    },
    mentor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: FreeLancer,
            key: 'freelancer_id',
        },
        autoIncrment: true,
    },
    intern_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Intern,
            key: 'intern_id',
        },
    },
    session_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    session_topic: {
        type: DataTypes.STRING,
    },
    notes: {
        type: DataTypes.STRING,
    },
});

module.exports = Mentorships;