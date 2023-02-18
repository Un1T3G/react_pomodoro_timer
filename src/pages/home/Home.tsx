import { useState } from 'react'
import Tab from '../../components/tab/Tab'
import Settings from './components/settings/Settings'
import Timer from './components/timer/Timer'
import './Home.scss'
import { cn } from '../../utils/css'

const Home = () => {
  const [tabIndex, setTabIndex] = useState(1)

  const onClickHandler = () => {
    setTabIndex(tabIndex === 1 ? 0 : 1)
  }

  return (
    <section className="home">
      <div className="home__card">
        <div className="home__card__header">
          <button
            onClick={onClickHandler}
            className={cn(
              'home__menu_btn',
              tabIndex === 0 ? 'active' : undefined
            )}
          ></button>
          <h1 className="home__card__title">Pomodoro</h1>
        </div>
        <div className="home__card__content">
          <Tab tabIndex={tabIndex} tabs={[<Settings />, <Timer />]} />
        </div>
      </div>
    </section>
  )
}

export default Home
