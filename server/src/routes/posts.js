const express = require('express')
const router = express.Router()
const Post = require('../models/post-model')

router.post('', (req, res) => {
    console.log("rgregregergergerger")
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    post.save((err, data) => {
    if (err) {
        console.log(err)
    } else {
        res.send({
        success: true,
        message: `Post with ID_${data._id} saved successfully!`
    })
}
})
})

router.get('', (req, res) => {
    Post.find({}, 'title description', (err, posts) => {
    if (err) {
        res.sendStatus(500)
    } else {
        res.send({ posts: posts })
}
}).sort({ _id: -1 })
})

router.delete('/:id', (req, res) => {
    console.log("AAAAAAAAAAAAAAAAAAAAAAaaaa", req.params.id)
    Post.remove({ _id: req.params.id }, err => {
    if (err) {
        res.sendStatus(500)
    } else {
        res.sendStatus(200)
}
})
})

module.exports = router;