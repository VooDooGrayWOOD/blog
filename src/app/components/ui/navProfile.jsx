import React from 'react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { getCurrentUserData } from '../../store/users'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavProfile = () => {
    const currentUser = useSelector(getCurrentUserData())

    if (!currentUser) return 'Loading...'
    return (
        <Menu as="div" className="m-3relative">
            <div className="flex align-baseline">
                <div className="m-auto pr-3">{currentUser.name}</div>
                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <img
                        className="h-8 w-8 rounded-full"
                        src={currentUser.image}
                        alt=""
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-nav-green ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                href="/user-page"
                                className={classNames(
                                    active ? 'bg-gray-500 rounded-md' : '',
                                    'block px-4 py-2 text-sm text-white'
                                )}
                            >
                                Профиль
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                href="/settings"
                                className={classNames(
                                    active ? 'bg-gray-500 rounded-md' : '',
                                    'block px-4 py-2 text-sm text-white'
                                )}
                            >
                                Настройки
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                href="/logout"
                                className={classNames(
                                    active ? 'bg-gray-500 rounded-md' : '',
                                    'block px-4 py-2 text-sm text-white'
                                )}
                            >
                                Выход
                            </a>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default NavProfile
