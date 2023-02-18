import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { timerSettingsSlice } from '../../../../../store/reducers/settings/timerSettingsSlice'

export const dataWithTime = () => {
  const { workTime, shortBreakTime, longBreakTime } = useAppSelector(
    (state) => state.timerSettingsReducer
  )
  const dispatch = useAppDispatch()
  const { setWorkTime, setShortBreakTime, setLongBreakTime } =
    timerSettingsSlice.actions

  const dataWithTime = [
    {
      label: 'Work',
      value: workTime,
      minValue: 5,
      maxValue: 60,
      setValue: (value: number) => dispatch(setWorkTime(value)),
    },
    {
      label: 'Short break',
      value: shortBreakTime,
      minValue: 1,
      maxValue: 30,
      setValue: (value: number) => dispatch(setShortBreakTime(value)),
    },
    {
      label: 'Long break',
      value: longBreakTime,
      minValue: 10,
      maxValue: 60,
      setValue: (value: number) => dispatch(setLongBreakTime(value)),
    },
  ]

  return dataWithTime
}
