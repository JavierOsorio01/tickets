const { config } = require('./config/config')
const express = require('express')
const app = express()
const cors = require('cors')
const routerApi = require('./routes')
// Middlewares
const { errorLog, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')

app.use(cors())
app.use(express.json())

require('./utils/auth')

// Router Api
routerApi(app)
app.use(errorLog)
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)
app.listen(config.port)