const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')

class ActivityService {

    constructor() {}

    async create(data) {
        return await models.Activity.create(data)
    }

    async find() {
        return await models.Activity.findAll()
    }


    async findOne(id) {
        const state = await models.Activity.findByPk(id, {
            include: ['user', 'comments']
        })
        if(!state){
            throw boom.notFound('Activity NOT FOUND')
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


module.exports = ActivityService