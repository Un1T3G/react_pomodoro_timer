import { AlarmSoundType } from '../type/AlarmSoundType'
import { TickSoundType } from '../type/TickSoundType'

interface ISound<T> {
  type: T
  volume: number
}

export interface ITimer {
  workTime: number
  shortBreakTime: number
  longBreakTime: number
  workInterval: number
  longInterval: number
  autoStartBreaks: boolean
  autoStartPomodoros: boolean
  alarmSound: ISound<AlarmSoundType>
  tickSound: ISound<TickSoundType>
}
