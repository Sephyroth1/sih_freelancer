const { DataTypes } = require("sequelize");
const { sequelize } = require('../config/db');

const Mentorships =  sequelize.define('Mentorship', {
    mentorship_id: {
        type: DataTypes.INTEGER,
        autoIncrment: true,
        primaryKey: true,
    },
    start_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    end_date: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.ENUM('active', 'completed', 'cancelled'),
        defaultValue: 'active'
    }
});

Mentorships.belongsTo(User, { as: 'Mentor', foreignKey: 'mentor_id' });
Mentorships.belongsTo(User, { as: 'Intern', foreignKey: 'intern_id' });
module.exports = Mentorships;