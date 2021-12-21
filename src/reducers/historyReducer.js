import { CALCULATE_VALUE, CLEAR_HISTORY } from '@/constants'

const INITIAL_STATE = {
  historyItems: [],
}

export const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CALCULATE_VALUE:
      return { ...state, historyItems: [...state.historyItems, action.payload.currentValueDisplay] }
    case CLEAR_HISTORY:
      return { ...state, historyItems: [] }
    default :
      return state
  }
}
