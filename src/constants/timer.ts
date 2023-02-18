import { ITimer } from '../model/ITimer'
import { AlarmSoundType } from '../type/AlarmSoundType'
import { TickSoundType } from '../type/TickSoundType'

export const timerInitialModel: ITimer = {
  workTime: (25 + 0) * 60 * 1000,
  shortBreakTime: (5 + 0) * 60 * 1000,
  longBreakTime: (15 + 0) * 60 * 1000,
  workInterval: 4,
  longInterval: 3,
  autoStartBreaks: false,
  autoStartPomodoros: false,
  alarmSound: {
    type: AlarmSoundType.DIGITAL,
    volume: 1,
  },
  tickSound: {
    type: TickSoundType.TICK_SLOW,
    volume: 1,
  },
}
