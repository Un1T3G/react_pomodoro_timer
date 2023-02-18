import { alarmBellSound, alarmDigitalSound } from '../assets'
import { AlarmSoundType } from '../type/AlarmSoundType'

export const getAlarmSound = (type: AlarmSoundType) => {
  switch (type) {
    case AlarmSoundType.NONE:
      return undefined
    case AlarmSoundType.BELL:
      return alarmBellSound
    case AlarmSoundType.DIGITAL:
      return alarmDigitalSound
    default:
      throw new Error()
  }
}
