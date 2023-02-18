import Slider from '../../../../../components/slider/Slider'

interface IProps {
  label: string
  value: number
  minValue: number
  maxValue: number
  setValue: (value: number) => void
}

const SettingsItemWithTime = ({ label, value, minValue, maxValue, setValue }: IProps) => {
  const displayTime = (time: number) => {
    const t = Math.floor(time / 1000 / 60)
    return `${t.toString().padStart(2, '0')}:00`
  }

  return (
    <li className="settings__item">
      <div className="settings__item__row">
        <h2 className="settings__item__label">{label}</h2>
        <span className="settings__item__value">{displayTime(value)}</span>
      </div>
      <Slider
        color="#fafafa"
        value={value / 1000 / 60}
        minValue={minValue}
        maxValue={maxValue}
        onChange={(e) => {
          setValue(Math.floor(e) * 1000 * 60)
        }}
      />
    </li>
  )
}

export default SettingsItemWithTime
