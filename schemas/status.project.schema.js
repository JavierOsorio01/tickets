const Joi = require('joi')


const id = Joi.number().integer()
const status = Joi.string()


const getStatusProjectSchema = new Joi.object({
    id: id.required(),
})


const createStatusProjectSchema = new Joi.object({
    status: status.required(),
})


const updateStatusProjectSchema = new Joi.object({
    status,
})


module.exports = { getStatusProjectSchema, createStatusProjectSchema, updateStatusProjectSchema }