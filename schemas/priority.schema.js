const Joi = require('joi')


const id = Joi.number().integer()
const priority = Joi.string()


const getPrioritySchema = new Joi.object({
    id: id.required(),
})


const createPrioritySchema = new Joi.object({
    priority: priority.required(),
})


const updatePrioritySchema = new Joi.object({
    priority,
})


module.exports = { getPrioritySchema, createPrioritySchema, updatePrioritySchema }