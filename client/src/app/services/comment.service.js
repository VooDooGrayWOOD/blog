import httpService from './http.service'

const commentEndPoint = 'comment/'

const commentService = {
    createComment: async (payload) => {
        const { data } = await httpService.put(
            commentEndPoint + payload._id,
            payload
        )
        return data
    },
    getComments: async (pageId) => {
        const { data } = await httpService.get(commentEndPoint, {
            params: {
                orderBy: '"pageId"',
                equalTo: `"${pageId}"`
            }
        })
        return data
    },
    removeComment: async (commentId) => {
        const { data } = await httpService.delete(commentEndPoint + commentId)
        return data
    }
}
export default commentService
