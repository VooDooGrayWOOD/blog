import httpService from './http.service'

const commentEndPoint = 'comment/'

const commentService = {
    createComment: async (payload) => {
        const { data } = await httpService.post(commentEndPoint, payload)
        return data
    },
    getComments: async (pageId) => {
        console.log(pageId)
        const { data } = await httpService.get(commentEndPoint, {
            params: {
                orderBy: 'pageId',
                equalTo: `${pageId}`
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
