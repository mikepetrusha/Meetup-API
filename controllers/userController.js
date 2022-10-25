const { userDTO } = require('../dto/user.dto');
const { userDB } = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (id, email, role) => {
    const accessToken = jwt.sign({ id, email, role }, process.env.JWT_ACCESS_SECRET, { expiresIn: '24h' })
    const refreshToken = jwt.sign({ id, email, role }, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' })
    return { accessToken, refreshToken }
}


class UserController {
    async googleAuth(email, password, role = 'USER') {
        const candidate = await userDB.findOne({ where: { email } });
        if (candidate) {
            return generateToken(candidate.id, candidate.email, candidate.role);
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await userDB.create({ email, role, password: hashPassword });
        return generateToken(user.id, user.email, user.role);
    }

    async registration(req, res) {
        try {
            const { email, password, role } = req.body

            try {
                await userDTO.validateAsync(req.body)
            } catch (error) {
                res.status(400).json({ message: 'The parametrs are set incorrectly' })
            }

            if (role && role !== 'ADMIN') {
                return res.status(400).json({ message: 'Incorrect role. Must be USER or ADMIN' })
            }

            const candidate = await userDB.findOne({ where: { email } })
            if (candidate) {
                return res.status(400).json({ message: 'A user with this email already exist' })
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = userDB.create({ email, role, password: hashPassword })
            res.json({ message: 'The user is registered successfully' })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Registration error' })
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body

            try {
                await userDTO.validateAsync(req.body)
            } catch (error) {
                res.status(400).json({ message: 'The parametrs are set incorrectly' })
            }

            const user = await userDB.findOne({ where: { email } })
            if (!user) {
                return res.status(400).json({ message: `The user with email ${email} was not found` })
            }
            let validPassword = await bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({ message: 'Invalid password' })
            }
            const token = generateToken(user.id, user.email, user.role)
            return res.json({ token })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Login error' })
        }
    }
}

module.exports = new UserController()