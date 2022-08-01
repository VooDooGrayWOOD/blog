import { ToastContainer } from 'react-toastify'
import NavBar from './components/ui/navBar'
import Main from './layouts/main'
import LogOut from './layouts/logOut'
import Login from './layouts/login'
import { Routes, Route } from 'react-router'
import Profile from './layouts/profile'
import AboutMe from './layouts/aboutMe'
import Article from './layouts/article'
import Settings from './layouts/settings'

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<LogOut />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/article" element={<Article />} />
                <Route path="/" exact element={<Main />} />
            </Routes>
            <ToastContainer />
        </div>
    )
}

export default App
