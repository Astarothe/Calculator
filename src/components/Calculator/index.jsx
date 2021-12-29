import React from 'react'
import { Display } from '@/components/Display'
import { Keypad } from '@/components/Keypad'
import { WrapperCalculator } from '@/components/Calculator/components'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'

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
