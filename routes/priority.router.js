const express = require('express')
const router = express.Router()
// middleware
const validatorHandler = require('./../middlewares/validator.handler')
// validate schema
const { getPrioritySchema, createPrioritySchema, updatePrioritySchema } = require('./../schemas/priority.schema')
// service
const PriorityService = require('./../services/priority.service')
const service = new PriorityService()


router.get('/', async (req, res, next) => {
    try {
        res.json(await service.find())
    } catch (error) {
        next(error)
    }
})


router.get('/:id',
    validatorHandler(getPrioritySchema, 'params'),
    async (req, res, next) => {
    try {
        const { id } = req.params
        res.json(await service.findOne(id))
    } catch (error) {
        next(error)
    }
})


router.post('/',
    validatorHandler(createPrioritySchema, 'body'),
    async (req, res, next) => {
    try {
        const body = req.body
        res.json(await service.create(body))
    } catch (error) {
        next(error)
    }
})


router.patch('/:id',
    validatorHandler(getPrioritySchema, 'params'),
    validatorHandler(updatePrioritySchema, 'body'),
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
    validatorHandler(getPrioritySchema, 'params'),
    async (req, res, next) => {
    try {
        const { id } = req.params
        res.json(await service.delete(id))
    } catch (error) {
        next(error)
    }
})


module.exports = router