import React from 'react'
import { NavLink } from 'react-router-dom'
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
                        <NavLink
                            className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            aria-current="page"
                            to="/"
                        >
                            Главная
                        </NavLink>
                        <NavLink
                            className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            aria-current="page"
                            to="/article"
                        >
                            Статьи
                        </NavLink>
                        <NavLink
                            className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            aria-current="page"
                            to="/about-me"
                        >
                            Обо мне
                        </NavLink>
                        {isLoggedIn && (
                            <NavLink
                                className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                aria-current="page"
                                to="/users"
                            >
                                Пользователи
                            </NavLink>
                        )}
                    </li>
                </ul>
                <div className="d-flex">
                    {isLoggedIn ? (
                        <NavProfile />
                    ) : (
                        <NavLink
                            className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            aria-current="page"
                            to="/login"
                        >
                            Войти
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default NavBar
