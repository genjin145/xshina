import React from 'react'
import ReactDom from 'react-dom'
import './scss/style.scss'
import App from './App.jsx'

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
