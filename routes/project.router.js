const express = require('express')
const router = express.Router()
// middleware
const validatorHandler = require('./../middlewares/validator.handler')
// validate schema
const { getProjectSchema, createProjectSchema, updateProjectSchema } = require('./../schemas/project.schema')
// Service
const ProjectService = require('./../services/project.service')
const service = new ProjectService()

router.get('/', async (req, res,  next) => {
    try {
        return res.json(await service.find())
    } catch (error) {
        next(error)
    }
})


router.get('/:id',
    validatorHandler(getProjectSchema, 'params'),
    async (req, res,  next) => {
    try {
        const {id} = req.params
        return res.json(await service.findOne(id))
    } catch (error) {
        next(error)
    }
})


router.post('/',
    validatorHandler(createProjectSchema, 'body'),
    async (req, res,  next) => {
    try {
        const body = req.body
        res.status(201).json(await service.create(body))
    } catch (error) {
        next(error)
    }
})


router.patch('/:id',
    validatorHandler(getProjectSchema, 'params'),
    validatorHandler(updateProjectSchema, 'body'),
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
    validatorHandler(getProjectSchema, 'params'),
    async (req, res,  next) => {
    try {
        const {id} = req.params
        res.json(await service.delete(id))
    } catch (error) {
        next(error)
    }
})


module.exports = router