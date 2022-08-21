import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getArticleList } from '../../../../store/article'
import Pagination from '../../../common/pagination'
import ArticleTable from '../../../ui/articleTable'
import { getCurrentUserData } from '../../../../store/users'
import { Link } from 'react-router-dom'
import { paginate } from '../../../../utils/paginate'

const ArticleListPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 3

    const currentUser = useSelector(getCurrentUserData())
    const checkAdmin = currentUser.admin

    const articles = useSelector(getArticleList())

    useEffect(() => {
        setCurrentPage(1)
    }, [])

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const count = articles.length
    const articlesCrop = count - pageSize
    console.log(articlesCrop)
    return (
        <>
            <div className="flex p-4">
                {checkAdmin && (
                    <Link
                        to="/articles/new-article"
                        className="rounded-lg border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                    >
                        New post
                    </Link>
                )}
            </div>
            <div className="flex justify-center">
                <ArticleTable articles={articles} />
            </div>
            <div className="flex justify-center">
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    )
}

export default ArticleListPage
