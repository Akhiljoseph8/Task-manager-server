//to load .env content into process.env
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Router/routes')
require('./Database/connection')

//creating server
const taskServer = express()

//configuring cors in server
taskServer.use(cors())
taskServer.use(express.json())
taskServer.use(router)

const PORT = 3000

//to run server
taskServer.listen(PORT, () => {
    console.log(`server is running at:${PORT}`)
})

taskServer.get('/', (req, res) => {
    res.status(200).send("<h1>The request is hit at server..</h1>")
})