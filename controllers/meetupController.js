const { meetupDB } = require('../models/models')
const { meetupDTO } = require('../dto/meetup.dto')


class MeetupController {
    async getAll(req, res) {
        const { title, keywords, limit, page, sort } = req.query

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
        return res.json(meetups)
    }

    async getOne(req, res) {
        const { id } = req.params
        const meetup = await meetupDB.findOne({ where: { id } })
        return res.json(meetup)
    }

    async create(req, res) {
        try {
            await meetupDTO.validateAsync(req.body)
        } catch (error) {
            return res.send("The paremetrs are set incorrectly. All parametrs must be a string.")
        }

        const { title, description, keywords, eventInformation } = req.body
        const meetup = await meetupDB.create({ title, description, keywords, eventInformation })
        return res.json(meetup)
    }

    async update(req, res) {
        const { id } = req.params
        const { title, description, keywords, eventInformation } = req.body
        await meetupDB.update({ title, description, keywords, eventInformation }, { where: { id } })
        return res.send('Meetup was updated')
    }

    async delete(req, res) {
        const { id } = req.params
        await meetupDB.destroy({ where: { id } })
        return res.send('Meetup was deleted')
    }
}

module.exports = new MeetupController()

