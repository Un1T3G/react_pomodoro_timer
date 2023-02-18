import { dataWithInterval } from "../data/dataWithInterval"
import { dataWithSound } from "../data/dataWithSound"
import { dataWithTime } from "../data/dataWithTime"
import SettingsItemWithInterval from "./SettingsItemWithInterval"
import SettingsItemWithSound from "./SettingsItemWithSound"
import SettingsItemWithTime from "./SettingsItemWithTime"

const SettingsList = () => {
    const dataWithTimes = dataWithTime()
    const dataWithIntervals = dataWithInterval()
    const dataWithSounds = dataWithSound()

    return <ul className="settings__list">
    {dataWithTimes.map((e) => (
      <SettingsItemWithTime key={e.label} {...e} />
    ))}
    {dataWithIntervals.map((e) => (
      <SettingsItemWithInterval key={e.label} {...e} />
    ))}
    {dataWithSounds.map((e) => (
      <SettingsItemWithSound<any> key={e.label} {...e} />
    ))}
  </ul>
}

export default SettingsList