import React, { useEffect, useState } from 'react'
import { Button, ButtonsWrapper } from '@/components/A4_Keypad/components'
import { useDispatch, useSelector } from 'react-redux'
import { addOperationAC, addValueAC, calcValueAC, resetLastValueAC, resetValueAC } from '@/actions'
import { getMathHandler, separator } from '@/helpers'
import {
  allEvents,
  arrButtons,
  BACKSPACE,
  CALCULATE,
  CLEAR_ALL,
  CLEAR_LAST, DIVISION, DOT, ENTER,
  MULTIPLICATION,
  operationAndScope, SUBTRACT, SUM,
  ZERO,
} from '@/constants'

export const Keypad = React.memo(() => {
  const { currentValue: valueDisplay, operation } = useSelector(state => state.calculator)
  const [lastValue, setLastValue] = useState(0)
  const dispatch = useDispatch()

  const buttonHandler = value => {
    const newValue = valueDisplay === ZERO ? value : valueDisplay + value
    const resultValue = getMathHandler(valueDisplay)

    switch (value) {
      case CLEAR_LAST :
      case BACKSPACE:
        dispatch(resetLastValueAC())
        break
      case CLEAR_ALL:
        dispatch(resetValueAC())
        break
      case CALCULATE:
      case ENTER:
        setLastValue(resultValue)
        valueDisplay !== lastValue && dispatch(calcValueAC(resultValue, separator(valueDisplay)))
        break
      case DOT:
        // находим сколько точек, у последнего элемента, и если их меньше одной, тогда добавляем.
        separator(valueDisplay).split(' ').slice(-1)[0].replace(/[^.]/g, '').length < 1 &&
        !operationAndScope.includes(valueDisplay[valueDisplay.length - 1]) &&
        dispatch(addValueAC(newValue, getMathHandler(newValue)))
        break
      case SUM:
      case SUBTRACT:
      case DIVISION:
      case MULTIPLICATION:
        operation !== value && dispatch(addOperationAC(value))
        break
      default:
        dispatch(addValueAC(newValue, getMathHandler(newValue)))
    }
  }

  const allButtons = arrButtons.map((value, i) => (
      <Button key={i} onClick={() => buttonHandler(value)}>
        {value}
      </Button>
    ),
  )

  useEffect(() => {
    const keyDownHandler = e => {
      allEvents.includes(e.key) && buttonHandler(e.key)
    }

    window.addEventListener('keydown', keyDownHandler)
    return () => window.removeEventListener('keydown', keyDownHandler)
  })

  return (
    <ButtonsWrapper>
      {allButtons}
    </ButtonsWrapper>
  )
})
