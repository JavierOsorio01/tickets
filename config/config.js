require('dotenv').config()
const config = {
    port: process.env.PORT,
    dbUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET
}

module.exports = { config }