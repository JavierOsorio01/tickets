const Joi = require('joi')


const id = Joi.number().integer()
const name = Joi.string().min(4)
const email = Joi.string().email()
const password = Joi.string().min(6)
const role = Joi.string()


const getUserSchema = new Joi.object({
    id: id.required()
})


const createUserSchema = new Joi.object({
    name: name.required(),
    email: email.required(),
    password: password.required(),
    role: role.required()
})


const updateUserSchema = new Joi.object({
    name,
    email,
    role
})


module.exports = { getUserSchema, createUserSchema, updateUserSchema }