import React from 'react'
import { Link } from 'react-router-dom'
import NavProfile from './navProfile'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../store/users'

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn())
    return (
        <nav className="navbar bg-light mb-3">
            <div className="container-fluid">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">
                            Главная
                        </Link>
                        <Link
                            className="nav-link"
                            aria-current="page"
                            to="/article"
                        >
                            Статьи
                        </Link>
                        <Link
                            className="nav-link"
                            aria-current="page"
                            to="/about-me"
                        >
                            Обо мне
                        </Link>
                    </li>
                    {isLoggedIn && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/users"
                            >
                                Пользователи
                            </Link>
                        </li>
                    )}
                </ul>
                <div className="d-flex">
                    {isLoggedIn ? (
                        <NavProfile />
                    ) : (
                        <Link
                            className="nav-link"
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
