const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')

class ProjectService {

    constructor() {}

    async create(data) {
        return await models.Project.create(data)
    }

    async find() {
        return await models.Project.findAll({
            include: ['usr', 'status', 'columns']
        })
    }


    async findOne(id) {
        const state = await models.Project.findByPk(id, {
            include: ['usr', 'status', 'columns']
        })
        if(!state){
            throw boom.notFound('STATE NOT FOUND')
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


module.exports = ProjectService