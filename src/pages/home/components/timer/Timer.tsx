import './Timer.scss'
import TimerActions from './components/TimerActions'
import TimerContent from './components/TimerContent'
import TimerFooter from './components/TimerFooter'
import TimerProgress from './components/TimerProgress'
import withDevTools from './hocs/withDevTools'
import withOnChangeTimerStatus from './hocs/withOnChangeTimerStatus'
import withOnTimerComplete from './hocs/withOnTimerComplete'
import withSounds from './hocs/withSounds'

const Timer = () => {
  return (
    <div className="timer">
      <div className="timer__progress_container">
        <TimerProgress />
        <TimerContent />
      </div>
      <TimerActions />
      <TimerFooter />
    </div>
  )
}

export default withDevTools(
  withSounds(withOnTimerComplete(withOnChangeTimerStatus(Timer)))
)
