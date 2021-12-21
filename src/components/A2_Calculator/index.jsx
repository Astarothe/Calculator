import React from 'react'
import { Display } from '@/components/A3_Display'
import { Keypad } from '@/components/A4_Keypad'
import { WrapperCalculator } from '@/components/A2_Calculator/components'
import { ErrorBoundary } from '@/components/A7_ErrorBoundary/ErrorBoundary'

export const Calculator = React.memo(() => {
  return (
    <ErrorBoundary>
      <WrapperCalculator>
        <Display />
        <Keypad />
      </WrapperCalculator>
    </ErrorBoundary>
  )
})
