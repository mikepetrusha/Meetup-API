const Joi = require('joi')

const meetupDTO = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    keywords: Joi.string(),
    eventInformation: Joi.string()
})

const meetupQueryDTO = Joi.object({
    title: Joi.string(),
    limit: Joi.number(),
    page: Joi.number(),
    sort: Joi.number()
})

const meetupParamDTO = Joi.object({
    id: Joi.number()
})

module.exports = { meetupDTO, meetupQueryDTO, meetupParamDTO }