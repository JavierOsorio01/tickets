const Joi = require('joi')


const id = Joi.number().integer()
const comment = Joi.string()
const activityId = Joi.number().integer()


const getCommentSchema = new Joi.object({
    id: id.required(),
})


const createCommentSchema = new Joi.object({
    comment: comment.required(),
    activityId: activityId.required(),
})


const updateCommentSchema = new Joi.object({
    comment,
    activityId,
})


module.exports = { getCommentSchema, createCommentSchema, updateCommentSchema }