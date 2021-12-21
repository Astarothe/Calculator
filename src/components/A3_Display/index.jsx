import React from 'react'
import { Expression, DisplayWrapper, Result } from '@/components/A3_Display/components'
import { useSelector } from 'react-redux'
import { separator } from '@/helpers'

export const Display = () => {
  const valueDisplay = useSelector(state => state.calculator.currentValue)
  const resultValue = useSelector(state => state.calculator.result)
  const display = separator(valueDisplay)

  return (
    <DisplayWrapper>
      <Result>{resultValue}</Result>
      <Expression>

        {display}
      </Expression>
    </DisplayWrapper>
  )
}
