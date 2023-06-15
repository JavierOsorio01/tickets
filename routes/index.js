const express = require('express')
const router = express.Router()
const routerUser = require('./user.router')
const routerStatusProject = require('./status.project.router')
const routerProject = require('./project.router')
const routerColumn = require('./column.router')
const routerActivity = require('./activity.router')
const routerComment = require('./comment.router')
const routerType = require('./type.router')
const routerPriority = require('./priority.router')
const routerAuth = require('./auth.router')


function routerApi(app){
    app.use('/api/v1', router)
    router.use('/users', routerUser)
    router.use('/status-project', routerStatusProject)
    router.use('/projects', routerProject)
    router.use('/columns', routerColumn)
    router.use('/activities', routerActivity)
    router.use('/comments', routerComment)
    router.use('/types', routerType)
    router.use('/priorities', routerPriority)
    router.use('/auth', routerAuth)
}


module.exports = routerApi