import { combineReducers } from '@reduxjs/toolkit'
import timerReducer from './timer/timerSlice'
import timerSettingsReducer from './settings/timerSettingsSlice'

export const rootReducer = combineReducers({
  timerReducer,
  timerSettingsReducer,
})
