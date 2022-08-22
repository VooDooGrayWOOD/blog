import React from 'react'
import { NavLink } from 'react-router-dom'
import NavProfile from './navProfile'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../store/users'

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn())
    return (
        <nav className="bg-nav-green relative mb-3 flex flex-wrap items-center justify-between px-2 py-3">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
                <div>
                    <ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
                        <li className="ml-10 flex items-baseline space-x-4">
                            <NavLink
                                className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                                aria-current="page"
                                to="/"
                            >
                                Главная
                            </NavLink>
                            <NavLink
                                className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                                aria-current="page"
                                to="/articles"
                            >
                                Статьи
                            </NavLink>
                            <NavLink
                                className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                                aria-current="page"
                                to="/about-me"
                            >
                                Обо мне
                            </NavLink>
                            {isLoggedIn && (
                                <NavLink
                                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                                    aria-current="page"
                                    to="/users"
                                >
                                    Пользователи
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </div>
                <div>
                    {isLoggedIn ? (
                        <NavProfile />
                    ) : (
                        <NavLink
                            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
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
