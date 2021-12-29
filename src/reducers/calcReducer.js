import { handleActions } from 'redux-actions'

import {
  ADD_OPERATION,
  ADD_VALUE,
  CALCULATE_VALUE,
  CLEAR_HISTORY,
  RESET_LAST_VALUE,
  RESET_VALUE,
  ZERO,
  operation,
} from '@/constants'
import { getMathHandler } from '@/helpers'

const INITIAL_STATE = {
  currentValue: ZERO,
  result: null,
  operation: null,
}


export const calcReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_VALUE:
      return {
        ...state,
        ...action.payload,
        operation: null,
      }
    case CALCULATE_VALUE:
      return {
        ...state,
        currentValue: action.payload.result,
        result: null,
        operation: null,
      }
    case RESET_LAST_VALUE:
      return {
        ...state,
        currentValue: state.currentValue.length !== 1 ? state.currentValue.slice(0, -1) : ZERO,
        result: getMathHandler(state.currentValue.length !== 1 ? state.currentValue.slice(0, -1) : ZERO),
        operation: state.currentValue[state.currentValue.length - 2],
      }
    case ADD_OPERATION:
      return {
        ...state,
        currentValue: state.operation !== action.payload.operation && state.operation !== null && operation.includes(state.operation)
          ? state.currentValue.slice(0, -1) + action.payload.operation
          : state.currentValue + action.payload.operation,
        ...action.payload,
      }
    case RESET_VALUE:
    case CLEAR_HISTORY:
      return {
        ...state,
        currentValue: ZERO,
        result: null,
        operation: null,
      }
    default :
      return state
  }
}

export default handleActions({}, INITIAL_STATE)
