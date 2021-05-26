const db = require('db')

db.connect({
    database: process.env.DB,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: 'mysql'
})