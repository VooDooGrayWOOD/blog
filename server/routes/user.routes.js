const express = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const router = express.Router({ mergeParams: true })

router.get('/', auth, async (req, res) => {
    try {
        const list = await User.find()
        res.status(200).send(list)
    } catch (e) {
      res.status(500).json({
          message: 'На сервере произошла ошибка. Попробуйте позже.'
      })
    }
})

router.patch('/:id', auth, async (req, res) => {
     try {
         const { userId } = req.params

         if (userId === req.user._id) {
            const updatedUser = await User.findByIdAndUpdate(userId, req.body, {new: true})
             res.send(updatedUser)
         } else {
             res.status(401).json({ message: 'Unauthorized' })
         }
     } catch (e) {
         res.status(500).json({
             message: 'На сервере произошла ошибка. Попробуйте позже.'
         })
     }
})


module.exports = router