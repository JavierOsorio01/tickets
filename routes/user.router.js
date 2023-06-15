const express = require('express')
const router = express.Router()
const validatorHandler = require('./../middlewares/validator.handler')
const { getUserSchema, createUserSchema, updateUserSchema } = require('./../schemas/user.schema')
const UserService = require('./../services/user.service')
const service = new UserService()

const passport = require('passport')
const { checkRole } = require('./../middlewares/auth.handler')

router.get('/',
    passport.authenticate('jwt', { session: false }),
    checkRole('admin'),
    async (req, res, next) => {
    try {
        res.json(await service.find())
    } catch (error) {
        next(error)
    }
})


router.get('/:id',
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
    try {
        const {id} = req.params
        res.json(await service.findOne(id))
    } catch (error) {
        next(error)
    }
})


router.post('/',
    validatorHandler(createUserSchema, 'body'),
    async (req, res, next) => {
    try {
        const body = req.body
        res.json(await service.create(body))
    } catch (error) {
        next(error)
    }
})


router.patch('/:id',
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'),
    async (req, res, next) => {
    try {
        const { id } = req.params
        const body = req.body
        res.json(await service.update(id, body))
    } catch (error) {
        next(error)
    }
})


router.delete('/:id',
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
    try {
        const {id} = req.params
        res.json(await service.delete(id))
    } catch (error) {
        next(error)
    }
})


module.exports = router