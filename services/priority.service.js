const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize')


class PriorityService {

    constructor() {}

    async find(){
        return await models.Priority.findAll()
    }

    async findOne(id){
        const priority = await models.Priority.findByPk(id)
        if(!priority) {
            throw boom.notFound("Priority NOT FOUND")
        }
        return priority
    }

    async create(data){
        return await models.Priority.create(data)
    }

    async update(id, changes){
        const priority = await this.findOne(id)
        return await priority.update(changes)
    }


    async delete(id){
        const priority = await this.findOne(id)
        return await priority.destroy()
    }
}


module.exports = PriorityService