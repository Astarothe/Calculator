import React from 'react'
import { Header, Link, NameProject, WrapperLink } from '@/components/A1_Header/component'
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'
import { ErrorBoundary } from '@/components/A7_ErrorBoundary/ErrorBoundary'

export const HeaderMain = () => {
   return (
      <ErrorBoundary>
         <Header>
            <NameProject>Calculator App</NameProject>
            <WrapperLink>
               <Link exact to={HOME_PAGE_ROUTE}>
            Home
               </Link>
               <Link to={SETTINGS_PAGE_ROUTE}>
            Settings
               </Link>
            </WrapperLink>
         </Header>
      </ErrorBoundary>
   )
}
