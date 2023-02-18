import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { TimerStatus } from '../../../../../type/TimerStatus'
import { timerSlice } from '../../../../../store/reducers/timer/timerSlice'
import { TimerMode } from '../../../../../type/TimerMode'

const withOnChangeTimerStatus = (Component: FC) => {
  return () => {
    const { mode, status, timerId, timer } = useAppSelector(
      (state) => state.timerReducer
    )
    const dispatch = useAppDispatch()
    const { decrementTime, setTime, setTargetTime, setTimerId } =
      timerSlice.actions

    const getTime = (mode: TimerMode) => {
      if (mode === TimerMode.SHORT_BREAK) {
        return timer.shortBreakTime
      } else if (mode === TimerMode.LONG_BREAK) {
        return timer.longBreakTime
      }

      return timer.workTime
    }

    useEffect(() => {
      switch (status) {
        case TimerStatus.INITIAL_STATE:
          if (timerId) {
            clearInterval(timerId)
            dispatch(setTimerId(undefined))
          }
          break
        case TimerStatus.NONE:
          const time = getTime(mode)
          dispatch(setTime(time))
          dispatch(setTargetTime(time))
          break
        case TimerStatus.RUNNING:
          const interval = setInterval(() => {
            dispatch(decrementTime(1000))
          }, 1000)

          dispatch(setTimerId(interval))
          break
        case TimerStatus.PAUSED:
          clearInterval(timerId)
          dispatch(setTimerId(undefined))
          break
        case TimerStatus.COMPLETED:
          clearInterval(timerId)
          dispatch(setTimerId(undefined))
          console.log('Completed')
          break
        default:
          throw new Error()
      }
    }, [status])

    return <Component />
  }
}

export default withOnChangeTimerStatus
