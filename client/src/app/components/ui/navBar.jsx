import React from 'react'
import { NavLink } from 'react-router-dom'
import NavProfile from './navProfile'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../store/users'

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn())
    return (
        <div id="exampleWrapper">
            <nav className="bg-nav-green relative mb-3 flex flex-wrap items-center justify-between px-2 py-3">
                <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div
                        className="hidden w-full md:block md:w-auto"
                        id="navbar-default"
                    >
                        <ul className="flex flex-col md:flex-row lg:ml-auto lg:flex-row">
                            <li>
                                <NavLink
                                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                                    aria-current="page"
                                    to="/"
                                >
                                    Главная
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                                    aria-current="page"
                                    to="/articles"
                                >
                                    Статьи
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                                    aria-current="page"
                                    to="/about-me"
                                >
                                    Обо мне
                                </NavLink>
                            </li>
                            <li>
                                {isLoggedIn && (
                                    <NavLink
                                        className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
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
        </div>
    )
}

export default NavBar
