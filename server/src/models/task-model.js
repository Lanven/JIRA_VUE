const mongoose = require('mongoose')
const Schema = mongoose.Schema
const TaskSchema = new Schema({
    release: {
        type: String
    },
    component: {
        type: String
    },
    link: {
        type: String
    },
    description: {
        type: String
    },
    comment: {
        type: String
    },
    priority: {
        type: String
    },
    status: {
        type: String
    }
})
const TaskModel = mongoose.model('tasks', TaskSchema)

module.exports = TaskModel