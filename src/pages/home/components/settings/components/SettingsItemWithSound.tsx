import { useMemo } from 'react'
import Slider from '../../../../../components/slider/Slider'
import { AlarmSoundType } from '../../../../../type/AlarmSoundType'
import { TickSoundType } from '../../../../../type/TickSoundType'
import Select from '../../../../../components/select/Select'

interface IProps<T extends AlarmSoundType | TickSoundType> {
  label: string
  type: T
  value: T
  volume: number
  setValue: (value: T) => void
  setVolume: (volume: number) => void
}

const SettingsItemWithSound = <T extends AlarmSoundType | TickSoundType>({
  label,
  value,
  type,
  volume,
  setValue,
  setVolume,
}: IProps<T>) => {
  const options = useMemo(
    () =>
      Object.keys(type).map((e) => ({
        value: e as T,
        label: e,
      })),
    []
  )

  return (
    <li className="settings__item">
      <div className="settings__item__row">
        <h2 className="settings__item__label">{label}</h2>
        <Select<T>
          defaultValue={value}
          options={options}
          onChanged={(e) => setValue(e)}
        />
      </div>
      <Slider
        color="#fafafa"
        value={volume}
        minValue={0}
        maxValue={1}
        onChange={(e) => setVolume(e)}
      />
    </li>
  )
}

export default SettingsItemWithSound
