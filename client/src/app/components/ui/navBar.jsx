import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import NavProfile from './navProfile'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../store/users'
import { Disclosure } from '@headlessui/react'

const navigation = [
    { name: 'Главная', to: '/', current: true },
    { name: 'Статьи', to: '/articles', current: false },
    { name: 'Обо мне', to: '/about-me', current: false }
    // { name: 'Пользователи', to: '/users', current: false }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn())
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
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
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.to}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-gray-900 text-white'
                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? 'page'
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                        {isLoggedIn && (
                                            <NavLink
                                                className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                                                aria-current="page"
                                                to="/users"
                                            >
                                                Пользователи
                                            </NavLink>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* Profile dropdown */}
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
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as={NavLink}
                                    to={item.to}
                                    className={classNames(
                                        item.current
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={
                                        item.current ? 'page' : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                            {isLoggedIn && (
                                <Disclosure.Button
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700"
                                    aria-current="page"
                                    as={NavLink}
                                    to="/users"
                                >
                                    Пользователи
                                </Disclosure.Button>
                            )}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default NavBar
