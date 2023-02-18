import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { timerSlice } from '../../../../../store/reducers/timer/timerSlice'
import { TimerMode } from '../../../../../type/TimerMode'
import { TimerStatus } from '../../../../../type/TimerStatus'
import { cn } from '../../../../../utils/css'

const TimerFooter = () => {
  const { mode, status } = useAppSelector((state) => state.timerReducer)
  const dispatch = useAppDispatch()
  const { setTime, setStatus, reset } = timerSlice.actions

  const onClickResetButtonHandler = () => {
    dispatch(reset())
    dispatch(setStatus(TimerStatus.INITIAL_STATE))
  }

  const canSkip = status !== TimerStatus.NONE && mode !== TimerMode.WORK

  const onClickSkipButtonHandler = () => {
    dispatch(setTime(0))
  }

  return (
    <div className="timer__footer">
      <button
        onClick={onClickResetButtonHandler}
        className="timer__footer__btn"
      >
        Reset
      </button>
      <button
        onClick={canSkip ? onClickSkipButtonHandler : () => {}}
        className={cn('timer__footer__btn', canSkip ? undefined : 'disabled')}
      >
        Skip
      </button>
    </div>
  )
}

export default TimerFooter
