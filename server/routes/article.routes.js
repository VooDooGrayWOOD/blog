const express = require('express')
const Article = require('../models/Article')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
    try {
        const { orderBy, equalTo } = req.query
        console.log(req.query)
        const list = await Article.find({ [orderBy]: equalTo })
        res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже.'
        })
    }
})
router.post('/', async (req, res) => {
    try {
        const newArticle = await Article.create({
            ...req.body
        })
        res.status(200).send(newArticle)
    } catch (e) {
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже.'
        })
    }
})

router.patch('/:_id', async (req, res) => {
    try {
        const { _id } = req.params
        if (_id === req.user._id) {
            const updatedArticle = await Article.findByIdAndUpdate(req.body)
            console.log(updatedArticle)
            res.send(updatedArticle)
        }
    } catch (e) {
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже.'
        })
    }
})

router.delete('/:articleId', async (req, res) => {
    try {
        const { articleId } = req.params
        const removeArticle = await Article.findById(articleId)

        if (removeArticle.articleId.toString() === req.article._id) {
            await removeArticle.remove()
            return res.send(null)
        } else {
        }
    } catch (e) {
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже.'
        })
    }
})

module.exports = router
