// @todo: add some actions
import {
  ADD_OPERATION,
  ADD_VALUE,
  CALCULATE_VALUE, CHANGE_ON_COLORED_THEME,
  CHANGE_ON_DARK_THEME,
  CHANGE_ON_LIGHT_THEME, CLEAR_HISTORY,
  RESET_LAST_VALUE,
  RESET_VALUE,
} from '@/constants'


// CalcReducer

export const addValueAC = (currentValue, result) =>
  ({ type: ADD_VALUE, payload: { currentValue, result } })

export const resetLastValueAC = () =>
  ({ type: RESET_LAST_VALUE })

export const resetValueAC = () =>
  ({ type: RESET_VALUE })

export const addOperationAC = value =>
  ({type: ADD_OPERATION,payload: {operation: value}})

// CalcReducer && HistoryReducer

export const calcValueAC = (result, currentValueDisplay) =>
  ({ type: CALCULATE_VALUE, payload: { result, currentValueDisplay } })

export const clearHistoryAC = _ =>
  ({ type: CLEAR_HISTORY })


// ThemeReducer

export const changeOnLightThemeAC = () =>
  ({ type: CHANGE_ON_LIGHT_THEME })

export const changeOnDarkThemeAC = () =>
  ({ type: CHANGE_ON_DARK_THEME })

export const changeOnColoredThemeAC = () =>
  ({type: CHANGE_ON_COLORED_THEME})
