const express = require('express')
const router = express.Router()
const Task = require('../models/task-model')

router.post('', (req, res) => {
    console.log("rgregregergergerger")
    const task = new Task({
        release: req.body.release,
        component: req.body.component,
        link: req.body.link,
        description: req.body.description,
        comment: req.body.comment,
        priority: req.body.priority,
        status: req.body.status
    })
    task.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
            success: true,
            message: `Task with ID_${data._id} saved successfully!`
            })
        }
    })
})

router.get('', (req, res) => {
    Task.find({}, 'release component link description comment priority status', (err, tasks) => {
    if (err) {
        res.sendStatus(500)
    } else {
        res.send({ tasks: tasks })
}
}).sort({ _id: -1 })
})

router.delete('/:id', (req, res) => {
    console.log("AAAAAAAAAAAAAAAAAAAAAAaaaa", req.params.id)
Task.remove({ _id: req.params.id }, err => {
    if (err) {
        res.sendStatus(500)
    } else {
        res.sendStatus(200)
}
})
})

module.exports = router;