import httpService from './http.service'
import localStorageService from './localStorage.service'

const articleEndPoint = 'article/'

const articleService = {
    createArticle: async (payload) => {
        const { data } = await httpService.post(articleEndPoint, payload)
        return data
    },
    getArticle: async (articleId) => {
        const { data } = await httpService.get(articleEndPoint, {
            params: {
                orderBy: 'articleId',
                equalTo: `${articleId}`
            }
        })
        return data
    },
    removeArticle: async (articleId) => {
        const { data } = await httpService.delete(articleEndPoint + articleId)
        return data
    },
    update: async (payload) => {
        const { data } = await httpService.patch(
            articleEndPoint + localStorageService.getArticleId(),
            payload
        )
        return data
    }
}
export default articleService
