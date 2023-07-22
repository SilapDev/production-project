import React, { Suspense, useEffect } from 'react'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Sidebar } from 'widgets/sidebar'

import { Navbar } from 'widgets/navbar'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

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
