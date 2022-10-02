require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const sequelize = require('./db')
const models = require('./models/models')
const router = require('./routes/routes')

app.use(express.json())
app.use('/api', router)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log('Connection has been established successfully.');
        app.listen(PORT)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
start()