const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')

class ColumnService {

    constructor() {}

    async create(data) {
        return await models.Column.create(data)
    }

    async find() {
        return await models.Column.findAll({
            include: ['project', 'activities']
        })
    }


    async findOne(id) {
        const state = await models.Column.findByPk(id, {
            include: ['project', 'activities']
        })
        if(!state){
            throw boom.notFound('COLUMN NOT FOUND')
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


module.exports = ColumnService