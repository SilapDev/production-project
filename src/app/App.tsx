import React, { Suspense, useEffect } from 'react'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import './styles/index.scss'
import { Sidebar } from 'widgets/sidebar'

import { Navbar } from 'widgets/navbar'

export const App = () => {
  const { theme } = useTheme()

  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error()
    }
  }, [])

  return (
      <div className={`app ${theme!}`}>
          <Suspense fallback="">
              <Navbar />
              <div className="content-page">
                  <Sidebar />
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  )
}
