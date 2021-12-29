import { combineReducers } from 'redux'


import { historyReducer } from '@/reducers/historyReducer'
import { themeReducer } from '@/reducers/themeReducer'

import example, { calcReducer } from './calcReducer'

export const rootReducer = combineReducers({
  example,
  calculator: calcReducer,
  history: historyReducer,
  theme: themeReducer,
})
