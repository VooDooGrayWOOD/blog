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
            <div className="container m-auto max-w-[760px] pt-5 text-2xl text-teal-700">
                <div className="flex justify-between">
                    <BackHistoryButton />
                    {checkAdmin && (
                        <div>
                            <Link to={`/articles/${articleId}/edit`}>
                                <button
                                    title="Редактировать статью"
                                    className="m-2 inline-block rounded-lg p-1.5 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 focus:ring-gray-700"
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                                        />
                                    </svg>
                                </button>
                            </Link>
                            <Link to="/articles/new-article">
                                <button
                                    title="Добавить статью"
                                    className="m-2 inline-block rounded-lg p-1.5 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 focus:ring-gray-700"
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
                <div className="m-4">
                    <img
                        className="m-auto h-auto rounded-lg"
                        src={article.image}
                        alt="image"
                    />
                    <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                        {article.source}
                    </p>
                    <h2 className="mb-4 text-4xl font-extrabold dark:text-white">
                        {article.title}
                    </h2>
                    <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                        {article.description}
                    </p>
                </div>
            </div>
        )
    } else {
        return <h1>Loading...</h1>
    }
}

export default ArticlePage
