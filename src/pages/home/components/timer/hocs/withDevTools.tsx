import { FC, useEffect } from 'react'
import { useAppDispatch } from '../../../../../hooks/redux'
import { timerSlice } from '../../../../../store/reducers/timer/timerSlice'

const withDevTools = (Component: FC) => {
  return () => {
    const dispatch = useAppDispatch()
    const { setTime, decrementTime } = timerSlice.actions

    useEffect(() => {
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'n') {
          dispatch(setTime(0))
        } else if (e.key === '-') {
          dispatch(decrementTime(1000))
        }
      }

      window.addEventListener('keydown', onKeyDown)

      return () => {
        window.removeEventListener('keydown', onKeyDown)
      }
    }, [])

    return <Component />
  }
}

export default withDevTools
