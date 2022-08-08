import { ToastContainer } from 'react-toastify'
import NavBar from './components/ui/navBar'
import Main from './layouts/main'
import LogOut from './layouts/logOut'
import Login from './layouts/login'
import { Routes, Route } from 'react-router'
import AboutMe from './layouts/aboutMe'
import Article from './layouts/article'
import Settings from './layouts/settings'
import { Navigate } from 'react-router-dom'
import Users from './layouts/users'
import AppLoader from './components/ui/hoc/appLoader'
import UserPage from './components/page/userPage'

function App() {
    return (
        <div>
            <AppLoader>
                <NavBar />
                <Routes>
                    <Route path="/users/:userId?/:edit?" element={<Users />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<LogOut />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/user-page" element={<UserPage />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/article" element={<Article />} />
                    <Route path="/" element={<Main />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </AppLoader>
            <ToastContainer />
        </div>
    )
}

export default App
