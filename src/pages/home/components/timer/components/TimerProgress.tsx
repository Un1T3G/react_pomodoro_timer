import CircleProgressIndicator from '../../../../../components/circle_slider_indicator/CircleProgressIndicator'
import { useAppSelector } from '../../../../../hooks/redux'
import { TimerMode } from '../../../../../type/TimerMode'

const TimerProgress = () => {
  const { time, targetTime, mode } = useAppSelector(
    (state) => state.timerReducer
  )

  return (
    <CircleProgressIndicator
      className="timer__progress"
      value={time / targetTime}
      minValue={0}
      maxValue={1}
      progressLineWidth={10}
      lineCap="round"
      style={{
        color: mode === TimerMode.WORK ? '#fa504f' : '#09e689',
        bgColor: '#e5e5e5',
        backgroundProgressLineWidth: 4,
      }}
      dotStyle={{
        color: '#fafafa',
        radius: 12,
      }}
    />
  )
}

export default TimerProgress
