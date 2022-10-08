const Joi = require('joi')

const meetupDTO = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    keywords: Joi.string(),
    eventInformation: Joi.string()
})

module.exports = { meetupDTO }