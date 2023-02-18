import './Tab.scss'
import { ReactNode } from 'react'

interface IProps {
  tabIndex: number
  tabs: ReactNode[]
}

const Tab = ({ tabIndex, tabs }: IProps) => {
  return (
    <div className="tab">
      <div className="tab__wrapper">
        <div
          style={{
            transform: `translateX(-${tabIndex * 100}%)`,
          }}
          className="tab__track"
        >
          {tabs.map((e, i) => (
            <div key={i} className="tab__item">
              {e}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tab
