import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { timerInitialModel } from '../../../constants/timer'
import { AlarmSoundType } from '../../../type/AlarmSoundType'
import { TickSoundType } from '../../../type/TickSoundType'
import { ITimer } from '../../../model/ITimer'

export const timerSettingsSlice = createSlice({
  name: 'timer_settings',
  initialState: timerInitialModel,
  reducers: {
    setWorkTime(state, action: PayloadAction<number>) {
      state.workTime = action.payload
    },
    setShortBreakTime(state, action: PayloadAction<number>) {
      state.shortBreakTime = action.payload
    },
    setLongBreakTime(state, action: PayloadAction<number>) {
      state.longBreakTime = action.payload
    },
    setWorkInterval(state, action: PayloadAction<number>) {
      state.workInterval = action.payload
    },
    setLongInterval(state, action: PayloadAction<number>) {
      state.longInterval = action.payload
    },
    setAutoStartBreaks(state, action: PayloadAction<boolean>) {
      state.autoStartBreaks = action.payload
    },
    setAutoStartPomodoro(state, action: PayloadAction<boolean>) {
      state.autoStartPomodoros = action.payload
    },
    setAlarmVolume(state, action: PayloadAction<number>) {
      state.alarmSound.volume = action.payload
    },
    setAlarmType(state, action: PayloadAction<AlarmSoundType>) {
      state.alarmSound.type = action.payload
    },
    setTickVolume(state, action: PayloadAction<number>) {
      state.tickSound.volume = action.payload
    },
    setTickType(state, action: PayloadAction<TickSoundType>) {
      state.tickSound.type = action.payload
    },
    setState(state, action: PayloadAction<ITimer>) {
      const {
        workTime,
        shortBreakTime,
        longBreakTime,
        workInterval,
        longInterval,
        autoStartBreaks,
        autoStartPomodoros,
        alarmSound,
        tickSound,
      } = action.payload

      state.workTime = workTime
      state.shortBreakTime = shortBreakTime
      state.longBreakTime = longBreakTime
      state.workInterval = workInterval
      state.longInterval = longInterval
      state.autoStartBreaks = autoStartBreaks
      state.autoStartPomodoros = autoStartPomodoros
      state.alarmSound.type = alarmSound.type
      state.alarmSound.volume = alarmSound.volume
      state.tickSound.type = tickSound.type
      state.tickSound.volume = tickSound.volume
    },
  },
})

export default timerSettingsSlice.reducer
