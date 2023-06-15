const Joi = require('joi')


const id = Joi.number().integer()
const project = Joi.string()
const as = Joi.string()
const observation = Joi.string()
const statusId = Joi.number().integer()


const getProjectSchema = new Joi.object({
    id: id.required(),
})


const createProjectSchema = new Joi.object({
    project: project.required(),
    as: as.required(),
    observation: observation.required(),
    statusId: statusId.required(),
})


const updateProjectSchema = new Joi.object({
    project,
    as,
    observation,
    statusId,
})


module.exports = { getProjectSchema, createProjectSchema, updateProjectSchema }