import React, { Suspense, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import "./styles/index.scss"
import { Theme, ThemeContext } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'

export const App = () => {


    const { theme, toggleTheme } = useTheme()


    return (
        <div className={`app ${theme}`} >
            <button onClick={toggleTheme} >Toggle</button>
            <Link to={"/"}> Главная </Link>
            <Link to={"/about"}> О сайте </Link>
            <Suspense fallback={<h1>Loading...</h1>} >
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync />} />
                    <Route path={"/"} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}
