import Slider from '../../../../../components/slider/Slider'

interface IProps {
  label: string
  value: number
  minValue: number
  maxValue: number
  setValue: (volume: number) => void
}

const SettingsItemWithInterval = ({
  label,
  value,
  minValue,
  maxValue,
  setValue,
}: IProps) => {
  return (
    <li className="settings__item">
      <div className="settings__item__row">
        <h2 className="settings__item__label">{label}</h2>
        <span className="settings__item__value">{value}</span>
      </div>
      <Slider
        color="#fafafa"
        value={value}
        minValue={minValue}
        maxValue={maxValue}
        onChange={(e) => setValue(Math.floor(e))}
      />
    </li>
  )
}

export default SettingsItemWithInterval
