import React from 'react'
import { Link } from 'react-router-dom'
import NavProfile from './navProfile'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../store/users'

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn())
    return (
        <nav className="bg-nav-green relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li className="ml-10 flex items-baseline space-x-4">
                        <Link
                            className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            aria-current="page"
                            to="/"
                        >
                            Главная
                        </Link>
                        <Link
                            className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            aria-current="page"
                            to="/article"
                        >
                            Статьи
                        </Link>
                        <Link
                            className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            aria-current="page"
                            to="/about-me"
                        >
                            Обо мне
                        </Link>
                        {isLoggedIn && (
                            <Link
                                className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                aria-current="page"
                                to="/users"
                            >
                                Пользователи
                            </Link>
                        )}
                    </li>
                </ul>
                <div className="d-flex">
                    {isLoggedIn ? (
                        <NavProfile />
                    ) : (
                        <Link
                            className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            aria-current="page"
                            to="/login"
                        >
                            Войти
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default NavBar
