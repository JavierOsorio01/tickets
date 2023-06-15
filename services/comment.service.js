const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')

class CommentService {

    constructor() {}

    async create(data) {
        return await models.Comment.create(data)
    }

    async find() {
        return await models.Comment.findAll()
    }


    async findOne(id) {
        const state = await models.Comment.findByPk(id)
        if(!state){
            throw boom.notFound('Comment NOT FOUND')
        }
        return state
    }

    async update(id, changes) {
        const state = await this.findOne(id)
        return state.update(changes)
    }


    async delete(id) {
        const state = await this.findOne(id)
        const rta = state.destroy()
        return state
    }
}


module.exports = CommentService