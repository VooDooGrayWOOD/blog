const express = require('express')
const Comment = require("../models/Comment");
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
    try {
        const list = await Comment.find()
        res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже.'
        })
    }
})

router.post('/', async (req, res) => {

})

router.delete('/:id', async (req, res) => {

})



module.exports = router