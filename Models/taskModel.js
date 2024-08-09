const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    createdTime: {
        type: String,
        required: true
    },
    updateTime: {
        type: String,

    },
    status: {
        type: String,
        required: true
    },
})

const tasks = mongoose.model('tasks', taskSchema)
module.exports = tasks