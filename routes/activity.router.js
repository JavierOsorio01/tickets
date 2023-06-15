const express = require('express')
const router = express.Router()
// middleware
const validatorHandler = require('./../middlewares/validator.handler')
// validate schema
const { getActivitySchema, createActivitySchema, updateActivitySchema } = require('./../schemas/activity.schema')
// Service
const ActivityService = require('./../services/activity.service')
const service = new ActivityService()

router.get('/', async (req, res,  next) => {
    try {
        return res.json(await service.find())
    } catch (error) {
        next(error)
    }
})


router.get('/:id',
    validatorHandler(getActivitySchema, 'params'),
    async (req, res,  next) => {
    try {
        const {id} = req.params
        return res.json(await service.findOne(id))
    } catch (error) {
        next(error)
    }
})


router.post('/',
    validatorHandler(createActivitySchema, 'body'),
    async (req, res,  next) => {
    try {
        const body = req.body
        res.status(201).json(await service.create(body))
    } catch (error) {
        next(error)
    }
})


router.patch('/:id',
    validatorHandler(getActivitySchema, 'params'),
    validatorHandler(updateActivitySchema, 'body'),
    async (req, res,  next) => {
    try {
        const {id} = req. params
        const body = req.body
        res.status(200).json(await service.update(id, body))
    } catch (error) {
        next(error)
    }
})


router.delete('/:id',
    validatorHandler(getActivitySchema, 'params'),
    async (req, res,  next) => {
    try {
        const {id} = req.params
        res.json(await service.delete(id))
    } catch (error) {
        next(error)
    }
})


module.exports = router