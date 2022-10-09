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

const userDB = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "USER"
    }
})

module.exports = { meetupDB, userDB }