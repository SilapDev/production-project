import React, { Suspense } from 'react'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Sidebar } from 'widgets/sidebar'

import { Navbar } from 'widgets/navbar'

export const App = () => {
  const { theme } = useTheme()

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
