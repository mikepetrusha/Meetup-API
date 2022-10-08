require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const sequelize = require('./db')
const router = require('./routes/routes')
const swaggerUi = require('swagger-ui-express')

app.use(express.json())
app.use('/api', router)

const swaggerDocument = require('./swagger/swagger-output.json');

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

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