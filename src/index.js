import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { Application } from '@/App'

import { store } from '@/store'
import theme from '@/theme'
import GlobalStyles from '@/globalStyles'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Application />
        <GlobalStyles />
      </HashRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
