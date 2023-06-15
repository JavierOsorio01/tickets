const Joi = require('joi')


const id = Joi.number().integer()
const type = Joi.string()


const getTypeSchema = new Joi.object({
    id: id.required(),
})


const createTypeSchema = new Joi.object({
    type: type.required(),
})


const updateTypeSchema = new Joi.object({
    type,
})


module.exports = { getTypeSchema, createTypeSchema, updateTypeSchema }