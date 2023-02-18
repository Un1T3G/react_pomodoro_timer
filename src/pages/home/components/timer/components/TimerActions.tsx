import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { timerSlice } from '../../../../../store/reducers/timer/timerSlice'
import { TimerStatus } from '../../../../../type/TimerStatus'

const TimerActions = () => {
  const { status } = useAppSelector((state) => state.timerReducer)
  const dispatch = useAppDispatch()
  const { setStatus, reset } = timerSlice.actions

  const onClickHandler = () => {
    switch (status) {
      case TimerStatus.INITIAL_STATE:
      case TimerStatus.NONE:
        dispatch(setStatus(TimerStatus.RUNNING))
        break
      case TimerStatus.RUNNING:
        dispatch(setStatus(TimerStatus.PAUSED))
        break
      case TimerStatus.PAUSED:
        dispatch(setStatus(TimerStatus.RUNNING))
        break
      case TimerStatus.COMPLETED:
        dispatch(reset())
        dispatch(setStatus(TimerStatus.NONE))
        dispatch(setStatus(TimerStatus.RUNNING))
        break
    }
  }

  return (
    <div onClick={onClickHandler} className="timer__actions">
      <button className="timer__actions__btn">
        {status === TimerStatus.RUNNING ? (
          <i className="fa-solid fa-pause"></i>
        ) : (
          <i className="fa-solid fa-play"></i>
        )}
      </button>
    </div>
  )
}

export default TimerActions
