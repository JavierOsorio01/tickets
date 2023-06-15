const Joi = require('joi')


const id = Joi.number().integer()
const subject = Joi.string()
const description = Joi.string()
const columnId = Joi.number().integer()
const userId = Joi.number().integer()
const typeId = Joi.number().integer()
const priorityId = Joi.number().integer()


const getActivitySchema = new Joi.object({
    id: Joi.required()
})


const createActivitySchema = new Joi.object({
    subject: subject.required(),
    description: description.required(),
    columnId: columnId.required(),
    userId: userId.required(),
    typeId: typeId.required(),
    priorityId: priorityId.required(),
})


const updateActivitySchema = new Joi.object({
    subject,
    description,
    columnId,
    userId,
    typeId,
    priorityId,
})


module.exports = { getActivitySchema, createActivitySchema, updateActivitySchema }