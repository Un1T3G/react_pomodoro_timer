import './Settings.scss'
import SettingsFooter from './components/SettingsFooter'
import SettingsList from './components/SettingsList'

const Settings = () => {
  return (
    <div className="settings">
      <SettingsList />
      <SettingsFooter />
    </div>
  )
}

export default Settings
