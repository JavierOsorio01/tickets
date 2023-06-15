const { models } = require('./../libs/sequelize')
const boom = require('@hapi/boom')

class StatusProjectService {

    constructor() {}

    async create(data) {
        return await models.StatusProject.create(data)
    }

    async find() {
        return await models.StatusProject.findAll()
    }

    async findOne(id) {
        const state = await models.StatusProject.findByPk(id, {
            include: ['projects']
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
        if(state.projects.length===0){
            const rta = state.destroy()
            return state
        }else{
            throw boom.conflict("cannot be deleted")
        }
    }
}


module.exports = StatusProjectService