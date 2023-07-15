import React, {StrictMode} from 'react'
import {ReactDOM, createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import store from './app/store'
import App from './App'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)