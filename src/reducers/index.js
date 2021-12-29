import { combineReducers } from 'redux'

import example, { calcReducer } from './calcReducer'
import { historyReducer } from '@/reducers/historyReducer'
import { themeReducer } from '@/reducers/themeReducer'

export const rootReducer = combineReducers({
   example,
   calculator: calcReducer,
   history: historyReducer,
   theme: themeReducer,
})
