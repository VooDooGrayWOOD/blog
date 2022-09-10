import React from 'react'
import { useSelector } from 'react-redux'
import { getArticleList } from '../../../../store/article'
import ArticleTable from '../../../ui/articleTable'
import { Link } from 'react-router-dom'

const ArticleListPage = () => {
    const articles = useSelector(getArticleList())

    if (articles) {
        return (
            <>
                <div className="flex justify-center w-auto">
                    <ArticleTable articles={articles} />
                </div>
            </>
        )
    } else {
        return (
            <div className="container mx-auto flex-col pt-5 text-2xl text-teal-700">
                <div>
                    <h1 className="text-center">
                        Пожалуйста войдите в свой профиль или зарегестрируйтесь
                        чтобы читать статьи
                    </h1>
                </div>
                <div className="mt-6 flex justify-center">
                    <Link
                        to={`/login`}
                        className=" rounded-lg border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                    >
                        Войти/Зарегистрироваться
                    </Link>
                </div>
            </div>
        )
    }
}

export default ArticleListPage
