import React from 'react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { getCurrentUserData } from '../../store/users'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'

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
                <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
                <Menu.Items className="bg-nav-green absolute right-0 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                to={`/users/${currentUser._id}`}
                                className={classNames(
                                    active ? 'rounded-md bg-gray-500' : '',
                                    'block px-4 py-2 text-sm text-white'
                                )}
                            >
                                Профиль
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                to="/logout"
                                className={classNames(
                                    active ? 'rounded-md bg-gray-500' : '',
                                    'block px-4 py-2 text-sm text-white'
                                )}
                            >
                                Выход
                            </Link>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default NavProfile
