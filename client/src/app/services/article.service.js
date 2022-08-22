import httpService from './http.service'
import localStorageService from './localStorage.service'

const articleEndPoint = 'article/'

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
        const { data } = await httpService.patch(
            articleEndPoint + localStorageService.getUserId(),
            payload
        )
        return data
    }
}
export default articleService
