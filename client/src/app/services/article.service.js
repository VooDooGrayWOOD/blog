import httpService from './http.service'

const articleEndPoint = 'articleTable/'

const articleService = {
    get: async () => {
        const { data } = await httpService.get(articleEndPoint)
        return data
    },
    createArticle: async (payload) => {
        const { data } = await httpService.post(articleEndPoint, payload)
        return data
    },
    removeArticle: async (articleId) => {
        const { data } = await httpService.delete(articleEndPoint + articleId)
        return data
    },
    update: async (payload) => {
        const { data } = await httpService.patch(articleEndPoint, payload)
        return data
    }
}
export default articleService
