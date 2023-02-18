import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { timerSettingsSlice } from '../../../../../store/reducers/settings/timerSettingsSlice'
import { AlarmSoundType } from '../../../../../type/AlarmSoundType'
import { TickSoundType } from '../../../../../type/TickSoundType'

export const dataWithSound = () => {
  const { alarmSound, tickSound } = useAppSelector(
    (state) => state.timerSettingsReducer
  )
  const dispatch = useAppDispatch()
  const { setAlarmType, setAlarmVolume, setTickType, setTickVolume } =
    timerSettingsSlice.actions

  const dataWithSound = [
    {
      label: 'Alarm sound',
      type: AlarmSoundType,
      value: alarmSound.type,
      volume: alarmSound.volume,
      setValue: (value: AlarmSoundType) => dispatch(setAlarmType(value)),
      setVolume: (volume: number) => dispatch(setAlarmVolume(volume)),
    },
    {
      label: 'Tick sound',
      type: TickSoundType,
      value: tickSound.type,
      volume: tickSound.volume,
      setValue: (value: TickSoundType) => dispatch(setTickType(value)),
      setVolume: (volume: number) => dispatch(setTickVolume(volume)),
    },
  ]

  return dataWithSound
}
