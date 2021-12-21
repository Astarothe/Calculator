import React, { useEffect, useRef } from 'react'
import { MainWrapper } from '@/pages/Home/components'
import { Calculator } from '@/components/A2_Calculator'
import { History } from '@/components/A5_History'
import { ErrorBoundary } from '@/components/A7_ErrorBoundary/ErrorBoundary'

export const HomePage = () => {
  const home = useRef(null)



  useEffect(() => {
    home.current.style.transition = '0.5s'
    home.current.style.transform = 'translateX(0)'

    return () => { home.current.style.transform = 'translateX(-100%)'}
  }, [])
  return (
    <ErrorBoundary>
      <MainWrapper display="flex" maxWidth="1920px"
                   margin="0 auto" ref={home}>
        <Calculator />
        <History />
      </MainWrapper>
    </ErrorBoundary>
  )
}
