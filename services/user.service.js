const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')
const { models } = require('./../libs/sequelize')

class UserService {

    constructor() {}

    /**
     * It takes in a data object, hashes the password, creates a new user with the data object and the
     * hashed password, and then deletes the password from the newUser object and returns the newUser
     * object.
     * @param data - The data that is passed in from the controller.
     * @returns The newUser object is being returned.
     */
    async create(data) {
        const hash = await bcrypt.hash(data.password, 10)
        const newUser = await models.User.create({
            ...data,
            password: hash
        })

        delete newUser.dataValues.password
        return newUser
    }

    async find() {
        return await models.User.findAll()
    }

    async findOne(id) {
        const user = await models.User.findByPk(id, {
            include: ['activities']
        })
        if (!user) {
            throw boom.notFound('USER NOT FOUND')
        }
        return user
    }

    async findByEmail(email) {
       return await models.User.findOne({ where: { email } })
    }

    async update(id, changes) {
        const user = await this.findOne(id)
        return user.update(changes)
    }

    async delete(id) {
        const user = await this.findOne(id)
        const rta = user.destroy()
        return user
    }

}


module.exports = UserService