import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import Header from './components/header/Header'
import Footer from './components/footer/footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <main></main>
    <Footer/>
  </React.StrictMode>,
)
