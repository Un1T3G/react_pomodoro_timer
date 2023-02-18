import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { timerSettingsSlice } from '../../../../../store/reducers/settings/timerSettingsSlice'

export const dataWithInterval = () => {
  const { workInterval, longInterval } = useAppSelector(
    (state) => state.timerSettingsReducer
  )
  const dispatch = useAppDispatch()
  const { setWorkInterval, setLongInterval } = timerSettingsSlice.actions

  const dataWithInterval = [
    {
      label: 'Work interval',
      value: workInterval,
      minValue: 1,
      maxValue: 10,
      setValue: (value: number) => dispatch(setWorkInterval(value)),
    },
    {
      label: 'Long interval',
      value: longInterval,
      minValue: 2,
      maxValue: 5,
      setValue: (value: number) => dispatch(setLongInterval(value)),
    },
  ]
  return dataWithInterval
}
