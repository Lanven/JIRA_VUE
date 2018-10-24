const express = require('express')
const router = express.Router()
const Components = require('../models/components-model')

router.get('', (req, res) => {
    Components.find({}, 'code name', (err, components) => {
    if (err) {
        res.sendStatus(500)
    } else {
        res.send({ components: components })
}
}).sort({ code: 1 })
})

module.exports = router;