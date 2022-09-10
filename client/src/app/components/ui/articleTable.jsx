import React from 'react'
import { Link } from 'react-router-dom'

const articleTable = ({ articles }) => {
    return (
        <>
            <div className="flex flex-col">
                {articles.map((article) => (
                    <div className="mx-auto mt-3" key={article._id}>
                        <div className="mx-auto mb-3 max-w-7xl px-5">
                            <div className="mt-6">
                                <div className="max-w-xl rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
                                    <Link to={`/articles/${article._id}`}>
                                        <img
                                            className="justify-center rounded-t-lg "
                                            src={article.image}
                                            alt="image"
                                        />
                                    </Link>
                                    <div className="p-5">
                                        <Link to={`/articles/${article._id}`}>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                {article.title}
                                            </h5>
                                        </Link>
                                        <div className="mt-2 mb-2 text-xs font-bold uppercase text-teal-700">
                                            {article.source}
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <Link
                                            to={`/articles/${article._id}`}
                                        >
                                            <button
                                                title='Читать больше'
                                                className="inline-block mr-4 mb-4 rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                                type="button"
                                            >
                                                <svg
                                                    className="h-6 w-6"
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
                                            </button>
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

export default articleTable

