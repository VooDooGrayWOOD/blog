import React from 'react'
import { useSelector } from 'react-redux'
import { getArticleById } from '../../../../store/article'
import { Link, useParams } from 'react-router-dom'
import BackHistoryButton from '../../../common/backButton'
import { getCurrentUserData } from '../../../../store/users'

const ArticlePage = () => {
    const params = useParams()
    const { articleId } = params
    const article = useSelector(getArticleById(articleId))

    const currentUser = useSelector(getCurrentUserData())
    const checkAdmin = currentUser.admin === 'true'

    if (article) {
        return (
            <div className="container mx-auto max-w-[760px] pt-5 text-2xl text-teal-700">
                <div className="flex justify-between">
                    <BackHistoryButton />
                    {checkAdmin && (
                        <div>
                            <Link
                                to={`/articles/${articleId}/edit`}
                                className="rounded-lg border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                            >
                                Редактировать
                            </Link>
                            <Link
                                to="/articles/new-article"
                                className="rounded-lg border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                            >
                                Добавить статью
                            </Link>
                        </div>
                    )}
                </div>
                <img
                    className="mt-4 mb-4 ml-3 h-auto "
                    src={article.image}
                    alt="image"
                />
                <h2 className="mb-4 text-4xl font-extrabold dark:text-white">
                    {article.title}
                </h2>
                <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    {article.description}
                </p>
            </div>
        )
    } else {
        return <h1>Loading...</h1>
    }
}

export default ArticlePage
