const User = require('../models/User')
// const Comment = require('../models/Comment')

const userMock = require('../mock/user.json')
// const commentMock = require('../mock/comment.json')

module.exports = async () => {
    const user = await User.find()
    if (user.length !== userMock.length) {
        await createInitialEntity(User, userMock)
    }

    // const comment = await Comment.find()
    // if (comment.length !== commentMock.length) {
    //     await createInitialEntity(Comment, commentMock)
    // }
}


async function createInitialEntity(Model, data) {
    await Model.collection.drop()
    return Promise.all(
        data.map(async item => {
            try {
              delete item._id
              const newItem = new Model(item)
              await newItem.save()
              return newItem
            } catch (e) {
                return e
            }
        })
   )
}