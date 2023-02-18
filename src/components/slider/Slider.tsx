import { useEffect, useRef, useState } from 'react'
import { useSlider } from './hooks/useSlider'
import { cn } from '../../utils/css'
import './Slider.scss'

interface IProps {
  color: string
  value: number
  minValue: number
  maxValue: number
  onChange?: (value: number) => void
}

const Slider = ({ color, value, minValue, maxValue, onChange }: IProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { x, isMouseDown, setPosition } = useSlider(
    ref,
    ((minValue + ((maxValue - minValue) * value) / maxValue) / maxValue) * 100
  )

  useEffect(() => {
    if (isMouseDown && onChange) {
      onChange(minValue + ((maxValue - minValue) * x) / 100)
    }
  }, [x, isMouseDown])

  useEffect(() => {
    if (isMouseDown) {
      return
    }

    setPosition({
      x: (value / maxValue) * 100,
      y: 0,
    })
  }, [value, isMouseDown])

  return (
    <div ref={ref} className={cn('slider', isMouseDown ? 'active' : undefined)}>
      <div
        style={{
          width: `${x}%`,
          backgroundColor: color,
        }}
        className="slider__progress"
      >
        <span
          style={{
            backgroundColor: color,
          }}
          className="slider__progress__knob"
        ></span>
      </div>
    </div>
  )
}

export default Slider
