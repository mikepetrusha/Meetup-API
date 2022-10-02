const { Sequelize } = require('sequelize')

module.exports = new Sequelize('meetupapi', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
}
)