const Joi = require('joi')


const id = Joi.number().integer()
const projectId = Joi.number().integer()
const description = Joi.string()


const getComlumnSchema = new Joi.object({
    id: id.required(),
})


const createColumnSchema = new Joi.object({
    projectId: projectId.required(),
    description: description.required(),
})


const updateColumnSchema = new Joi.object({
    projectId,
    description,
})


module.exports = { getComlumnSchema, createColumnSchema, updateColumnSchema }