import { useEffect } from 'react'
import { TIMER_KEY } from '../../../../../constants/keys'
import { timerInitialModel } from '../../../../../constants/timer'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { useLocalStorage } from '../../../../../hooks/useLocalStorage'
import { timerSettingsSlice } from '../../../../../store/reducers/settings/timerSettingsSlice'
import { timerSlice } from '../../../../../store/reducers/timer/timerSlice'
import { TimerStatus } from '../../../../../type/TimerStatus'

const SettingsFooter = () => {
  const state = useAppSelector((state) => state.timerSettingsReducer)
  const dispatch = useAppDispatch()
  const { setState } = timerSettingsSlice.actions
  const { setStatus, setTimer, reset } = timerSlice.actions

  const { storedValue, setValue } = useLocalStorage(
    TIMER_KEY,
    timerInitialModel
  )

  const onClickResetButtonHandler = () => {
    dispatch(setState(timerInitialModel))
    setValue(timerInitialModel)
  }

  const onClickSaveButtonHandler = () => {
    setValue(state)
  }

  useEffect(() => {
    dispatch(setTimer(storedValue))
    dispatch(setState(storedValue))
  }, [])

  useEffect(() => {
    dispatch(setTimer(storedValue))
    dispatch(reset())
    dispatch(setStatus(TimerStatus.INITIAL_STATE))
  }, [storedValue])

  return (
    <div className="settings__footer">
      <button
        onClick={onClickResetButtonHandler}
        className="settings__footer__btn"
      >
        Reset
      </button>
      <button
        onClick={onClickSaveButtonHandler}
        className="settings__footer__btn"
      >
        Save
      </button>
    </div>
  )
}

export default SettingsFooter
