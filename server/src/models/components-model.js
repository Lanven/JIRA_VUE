const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ComponentsSchema = new Schema({
    code: {
        type: String
    },
    name: {
        type: String
    }
})
const TaskModel = mongoose.model('components', ComponentsSchema)
module.exports = TaskModel