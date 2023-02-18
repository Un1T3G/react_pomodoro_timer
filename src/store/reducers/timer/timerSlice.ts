import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TimerMode } from '../../../type/TimerMode'
import { TimerStatus } from '../../../type/TimerStatus'
import { ITimer } from '../../../model/ITimer'
import { timerInitialModel } from '../../../constants/timer'

interface IState {
  time: number
  targetTime: number
  mode: TimerMode
  status: TimerStatus
  steppedInterval: number
  timerId?: number
  timer: ITimer
}

const initialState: IState = {
  time: timerInitialModel.workTime,
  targetTime: timerInitialModel.workTime,
  mode: TimerMode.WORK,
  status: TimerStatus.INITIAL_STATE,
  steppedInterval: 0,
  timer: timerInitialModel,
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    decrementTime(state, action: PayloadAction<number>) {
      state.time -= action.payload
    },
    setTime(state, action: PayloadAction<number>) {
      state.time = action.payload
    },
    setTargetTime(state, action: PayloadAction<number>) {
      state.targetTime = action.payload
    },
    setMode(state, action: PayloadAction<TimerMode>) {
      state.mode = action.payload
    },
    setStatus(state, action: PayloadAction<TimerStatus>) {
      state.status = action.payload
    },
    setTimerId(state, action: PayloadAction<number | undefined>) {
      state.timerId = action.payload
    },
    incrementSteppedInterval(state) {
      state.steppedInterval++
    },
    reset(state) {
      state.mode = TimerMode.WORK
      state.time = state.timer.workTime
      state.targetTime = state.timer.workTime
      state.steppedInterval = 0
    },
    setTimer(state, action: PayloadAction<ITimer>) {
      state.timer = action.payload
    },
  },
})

export default timerSlice.reducer
