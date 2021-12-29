import React from 'react'

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'
import SettingsPage from '@/pages/Settings'
import { HomePage } from '@/pages/Home'
import Switch from 'react-router-dom/es/Switch'
import Route from 'react-router-dom/es/Route'
import { HeaderMain } from '@/components/Header'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'


export const Application = () => {
  const theme = useSelector(state => state.theme)
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <HeaderMain />
        <Switch>
          <Route
            exact
            path={HOME_PAGE_ROUTE}
            component={HomePage}
          />
          <Route
            path={SETTINGS_PAGE_ROUTE}
            component={SettingsPage}
          />
        </Switch>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
