import { useAppSelector } from '../../../../../hooks/redux'
import { TimerMode } from '../../../../../type/TimerMode'

const TimerContent = () => {
  const { time, steppedInterval, timer, mode } = useAppSelector(
    (state) => state.timerReducer
  )

  const displayTimer = (time: number) => {
    const minutes = Math.floor(time / 1000 / 60)
    const seconds = Math.floor(time / 1000) % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  }

  const displayMode = (mode: TimerMode) => {
    if (mode === TimerMode.WORK) {
      return 'Work'
    } else if (mode === TimerMode.SHORT_BREAK) {
      return 'Short break'
    } else if (mode === TimerMode.LONG_BREAK) {
      return 'Long break'
    } else {
      throw new Error('What?')
    }
  }

  return (
    <div className="timer__content">
      <span className="timer__interval_text">{`${steppedInterval}/${timer.workInterval}`}</span>
      <h1 className="timer__text">{displayTimer(time)}</h1>
      <div className="timer__status">{displayMode(mode)}</div>
    </div>
  )
}

export default TimerContent
