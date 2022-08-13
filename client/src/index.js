import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from './app/store'
import { navigate } from './app/utils/history'

const store = createStore()

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <Router history={navigate}>
            <App />
        </Router>
    </Provider>
)
