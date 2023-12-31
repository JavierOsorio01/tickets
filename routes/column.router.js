const express = require('express')
const router = express.Router()
// middleware
const validatorHandler = require('./../middlewares/validator.handler')
// validator schema
const { getComlumnSchema, createColumnSchema, updateColumnSchema } = require('./../schemas/column.schema')
// Service
const ColumnService = require('./../services/column.service')
const service = new ColumnService()

router.get('/', async (req, res,  next) => {
    try {
        return res.json(await service.find())
    } catch (error) {
        next(error)
    }
})


router.get('/:id',
    validatorHandler(getComlumnSchema, 'params'),
    async (req, res,  next) => {
    try {
        const {id} = req.params
        return res.json(await service.findOne(id))
    } catch (error) {
        next(error)
    }
})


router.post('/',
    validatorHandler(createColumnSchema, 'body'),
    async (req, res,  next) => {
    try {
        const body = req.body
        res.status(201).json(await service.create(body))
    } catch (error) {
        next(error)
    }
})


router.patch('/:id',
    validatorHandler(getComlumnSchema, 'params'),
    validatorHandler(updateColumnSchema, 'body'),
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
    validatorHandler(getComlumnSchema, 'params'),
    async (req, res,  next) => {
    try {
        const {id} = req.params
        res.json(await service.delete(id))
    } catch (error) {
        next(error)
    }
})


module.exports = router