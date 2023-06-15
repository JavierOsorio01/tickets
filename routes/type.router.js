const express = require('express')
const router = express.Router()
// middleware
const validatorHandler = require('./../middlewares/validator.handler')
// validate schema
const { getTypeSchema, createTypeSchema, updateTypeSchema } = require('./../schemas/type.schema')
// service
const TypeService = require('./../services/type.service')
const service = new TypeService()


router.get('/', async (req, res, next) => {
    try {
        res.json(await service.find())
    } catch (error) {
        next(error)
    }
})


router.get('/:id',
    validatorHandler(getTypeSchema, 'params'),
    async (req, res, next) => {
    try {
        const { id } = req.params
        res.json(await service.findOne(id))
    } catch (error) {
        next(error)
    }
})


router.post('/',
    validatorHandler(createTypeSchema, 'body'),
    async (req, res, next) => {
    try {
        const body = req.body
        res.json(await service.create(body))
    } catch (error) {
        next(error)
    }
})


router.patch('/:id',
    validatorHandler(getTypeSchema, 'params'),
    validatorHandler(updateTypeSchema, 'body'),
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
    validatorHandler(getTypeSchema, 'params'),
    async (req, res, next) => {
    try {
        const { id } = req.params
        res.json(await service.delete(id))
    } catch (error) {
        next(error)
    }
})


module.exports = router