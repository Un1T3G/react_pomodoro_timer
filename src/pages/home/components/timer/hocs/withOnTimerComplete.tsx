import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { TimerStatus } from '../../../../../type/TimerStatus'
import { timerSlice } from '../../../../../store/reducers/timer/timerSlice'
import { TimerMode } from '../../../../../type/TimerMode'

const withOnTimerComplete = (Component: FC) => {
  return () => {
    const { time, mode, status, steppedInterval, timerId, timer } =
      useAppSelector((state) => state.timerReducer)
    const dispatch = useAppDispatch()
    const { incrementSteppedInterval, setStatus, setMode } = timerSlice.actions

    useEffect(() => {
      if (status === TimerStatus.NONE || time > 0) {
        return
      }

      clearInterval(timerId)

      if (steppedInterval === timer.workInterval) {
        dispatch(setStatus(TimerStatus.COMPLETED))
        return
      }

      if (mode === TimerMode.WORK) {
        dispatch(incrementSteppedInterval())
        const isShortBreak = (steppedInterval + 1) % timer.longInterval !== 0
        dispatch(
          setMode(isShortBreak ? TimerMode.SHORT_BREAK : TimerMode.LONG_BREAK)
        )
      } else {
        dispatch(setMode(TimerMode.WORK))
      }

      dispatch(setStatus(TimerStatus.NONE))
    }, [time])

    return <Component />
  }
}

export default withOnTimerComplete
