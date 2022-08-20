import { ToastContainer } from 'react-toastify'
import NavBar from './components/ui/navBar'
import Main from './layouts/main'
import LogOut from './layouts/logOut'
import Login from './layouts/login'
import { Routes, Route } from 'react-router-dom'
import AboutMe from './layouts/aboutMe'
import Articles from './layouts/articles'
import Settings from './layouts/settings'
import { Navigate } from 'react-router-dom'
import Users from './layouts/users'
import AppLoader from './components/ui/hoc/appLoader'
import UserPage from './components/page/user/userPage'
import EditUserPage from './components/page/user/editUserPage'
import ArticlePage from './components/page/article/articlePage'
import EditArticlePage from './components/page/article/editArticlePage'

function App() {
    return (
        <div>
            <AppLoader>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/:userId" element={<UserPage />} />
                    <Route
                        path="/users/:userId/:edit"
                        element={<EditUserPage />}
                    />
                    <Route path="articles" element={<Articles />} />
                    <Route
                        path="articles/:articleId"
                        element={<ArticlePage />}
                    />
                    <Route
                        path="/articles/:articleId/:edit"
                        element={<EditArticlePage />}
                    />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<LogOut />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </AppLoader>
            <ToastContainer />
        </div>
    )
}

export default App
