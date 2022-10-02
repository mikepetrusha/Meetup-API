const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const meetupDB = sequelize.define('meetup', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    keywords: {
        type: DataTypes.STRING,
        allowNull: false
    },
    eventInformation: {
        type: DataTypes.STRING,
        allowNull: false
    },

})

module.exports = { meetupDB }