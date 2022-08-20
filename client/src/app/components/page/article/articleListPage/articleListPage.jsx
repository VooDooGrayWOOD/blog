import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getArticleList } from '../../../../store/article'
import Pagination from '../../../common/pagination'
import ArticleTable from '../../../ui/articleTable'
import { getCurrentUserData } from '../../../../store/users'
import { Link } from 'react-router-dom'

const ArticleListPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('')
    const pageSize = 4

    const currentUser = useSelector(getCurrentUserData())
    const checkAdmin = currentUser.admin

    const articles = useSelector(getArticleList())

    useEffect(() => {
        setCurrentPage(1)
    }, [searchQuery])

    // const handleSearchQuery = ({ target }) => {
    //     setSearchQuery(target.value)
    // }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const count = articles.length
    return (
        <>
            <div className="flex p-4">
                {checkAdmin && (
                    <Link
                        to="/articles/new-article"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg"
                    >
                        New post
                    </Link>
                )}
            </div>
            <div className="flex justify-center">
                <ArticleTable articles={articles} />
                <div className="flex justify-items-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </>
    )
}

export default ArticleListPage
