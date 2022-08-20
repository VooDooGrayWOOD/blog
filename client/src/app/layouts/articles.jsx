import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getAuthorArticleId } from '../store/article'
import EditArticlePage from '../components/page/article/editArticlePage'
import ArticlePage from '../components/page/article/articlePage'
import ArticleListPage from '../components/page/article/articleListPage'

const Articles = () => {
    const params = useParams()
    const { articleId, edit } = params
    const authorArticleId = useSelector(getAuthorArticleId())
    return (
        <>
            {articleId ? (
                edit ? (
                    articleId === authorArticleId ? (
                        <EditArticlePage />
                    ) : (
                        <Navigate to={`/article/${authorArticleId}/edit`} />
                    )
                ) : (
                    <ArticlePage articleId={articleId} />
                )
            ) : (
                <ArticleListPage />
            )}
        </>
    )
}

export default Articles
