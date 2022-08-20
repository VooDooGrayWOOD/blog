import React from 'react'
import { Link } from 'react-router-dom'

const ArticlePage = ({ articles }) => {
    return (
        <>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {articles.map((article) => (
                    <div className="mx-auto mt-3" key={article._id}>
                        <div className="max-w-7xl mx-auto px-5 mb-3">
                            <div className="mt-6">
                                <div className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <Link to="#">
                                        <img
                                            className="rounded-t-lg px-5 py-5"
                                            src={article.image}
                                            alt="image"
                                        />
                                    </Link>
                                    <div className="p-5">
                                        <Link to="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                {article.title}
                                            </h5>
                                        </Link>
                                        <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">
                                            {article.source}
                                        </div>
                                        <Link
                                            to="#"
                                            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Read more
                                            <svg
                                                className="ml-2 -mr-1 w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ArticlePage
