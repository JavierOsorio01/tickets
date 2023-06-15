const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize')


class TypeService {

    constructor() {}

    async find(){
        return await models.Type.findAll()
    }

    async findOne(id){
        const type = await models.Type.findByPk(id)
        if(!type) {
            throw boom.notFound("TYPE NOT FOUND")
        }
        return type
    }

    async create(data){
        return await models.Type.create(data)
    }

    async update(id, changes){
        const type = await this.findOne(id)
        return await type.update(changes)
    }


    async delete(id){
        const type = await this.findOne(id)
        return await type.destroy()
    }
}


module.exports = TypeService