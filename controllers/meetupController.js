const { meetupDB } = require('../models/models')
const { meetupDTO, meetupQueryDTO, meetupParamDTO } = require('../dto/meetup.dto')


class MeetupController {
    async getAll(req, res) {
        const { title, keywords, limit, page, sort } = req.query

        try {
            await meetupQueryDTO.validateAsync(req.query)
        } catch (error) {
            return res.status(400).send("The paremetrs are set incorrectly.")
        }

        async function getMeetups(title, keywords, limit = 5, page = 1, sort = 0) {
            let meetups
            let offset = (page - 1) * limit

            if (!title && !keywords) {
                if (sort) { return meetups = await meetupDB.findAll({ order: [['id', 'ASC']], limit, offset }) }
                return meetups = await meetupDB.findAll({ limit, offset })
            }
            if (title && !keywords) {
                if (sort) { return meetups = await meetupDB.findAll({ where: { title }, order: [["id", 'ASC']], limit, offset }) }
                return meetups = await meetupDB.findAll({ where: { title }, limit, offset })
            }
            if (!title && keywords) {
                if (sort) { return meetups = await meetupDB.findAll({ where: { keywords }, order: [["id", 'ASC']], limit, offset }) }
                return meetups = await meetupDB.findAll({ where: { keywords }, limit, offset })
            }
            if (title && keywords) {
                if (sort) { return meetups = await meetupDB.findAll({ where: { title, keywords }, order: [["id", 'ASC']], limit, offset }) }
                return meetups = await meetupDB.findAll({ where: { title, keywords }, limit, offset })
            }
            return meetups
        }

        const meetups = await getMeetups(title, keywords, limit, page, sort)
        return res.status(200).json(meetups)
    }

    async getOne(req, res) {
        const { id } = req.params

        try {
            await meetupParamDTO.validateAsync(req.params)
        } catch (error) {
            return res.status(400).send("The paremetrs are set incorrectly.")
        }

        const meetup = await meetupDB.findOne({ where: { id } })
        return res.status(200).json(meetup)
    }

    async create(req, res) {
        try {
            await meetupDTO.validateAsync(req.body)
        } catch (error) {
            return res.status(400).send("The paremetrs are set incorrectly. All parametrs must be a string.")
        }

        const { title, description, keywords, eventInformation } = req.body
        const meetup = await meetupDB.create({ title, description, keywords, eventInformation })
        return res.status(201).json(meetup)
    }

    async update(req, res) {
        const { id } = req.params
        const { title, description, keywords, eventInformation } = req.body

        try {
            await meetupDTO.validateAsync(req.body)
            await meetupParamDTO.validateAsync(req.params)
        } catch (error) {
            return res.status(400).send("The paremetrs are set incorrectly.")
        }

        await meetupDB.update({ title, description, keywords, eventInformation }, { where: { id } })
        return res.status(200).send('Meetup was updated')
    }

    async delete(req, res) {
        const { id } = req.params

        try {
            await meetupParamDTO.validateAsync(req.params)
        } catch (error) {
            return res.status(400).send("The paremetrs are set incorrectly.")
        }

        await meetupDB.destroy({ where: { id } })
        return res.status(200).send('Meetup was deleted')
    }
}

module.exports = new MeetupController()

