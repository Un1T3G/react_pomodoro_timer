import { FC, useEffect, useRef } from 'react'
import { useAppSelector } from '../../../../../hooks/redux'
import { TimerStatus } from '../../../../../type/TimerStatus'
import { getTickSound } from '../../../../../helpers/getTickSound'
import { getAlarmSound } from '../../../../../helpers/getAlarmSound'

const withSounds = (Component: FC) => {
  return () => {
    const ref = useRef<HTMLAudioElement>(null)

    const { status, timer } = useAppSelector((state) => state.timerReducer)

    useEffect(() => {
      const audio = ref.current

      if (!audio) {
        return
      }

      const tryPlaySound = (
        src: string | undefined,
        loop: boolean,
        volume: number
      ) => {
        if (!src) {
          return false
        }

        audio.loop = loop
        audio.volume = volume
        audio.src = src
        audio.load()

        return true
      }

      audio.onloadeddata = () => {
        audio.play()
      }

      if (status === TimerStatus.RUNNING) {
        tryPlaySound(
          getTickSound(timer.tickSound.type),
          true,
          timer.tickSound.volume
        )
      } else if (status === TimerStatus.NONE) {
        tryPlaySound(
          getAlarmSound(timer.alarmSound.type),
          false,
          timer.alarmSound.volume
        )
      } else {
        audio.pause()
      }

      return () => {
        audio.onload = null
      }
    }, [status])

    return (
      <>
        <Component />
        <audio ref={ref}></audio>
      </>
    )
  }
}

export default withSounds
