const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PostSchema = new Schema({
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
const PostModel = mongoose.model('posts', PostSchema)
module.exports = PostModel