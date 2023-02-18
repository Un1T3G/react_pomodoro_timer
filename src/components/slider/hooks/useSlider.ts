import { RefObject, useEffect, useState } from 'react'
import { clamp } from '../../../utils/math'

const LEFT_MOUSE_BTN_KEY = 0

export const useSlider = (
  ref: RefObject<HTMLElement>,
  defaultXValue: number
) => {
  const [position, setPosition] = useState({ x: defaultXValue, y: 0 })
  const [isMouseDown, setIsMouseDown] = useState(false)

  useEffect(() => {
    let mouseDown = false

    const moveSlider = (e: MouseEvent) => {
      const node = ref.current

      if (!node) {
        return
      }

      const bound = node.getBoundingClientRect()

      let x = e.pageX - bound.left - window.pageXOffset
      let y = e.pageY - bound.top - window.pageYOffset

      x = clamp(x, 0, bound.width)
      y = clamp(y, 0, bound.height)

      setPosition({
        x: (x / bound.width) * 100,
        y: (y / bound.height) * 100,
      })
    }

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault()

      if (e.button === LEFT_MOUSE_BTN_KEY && e.target === ref.current) {
        mouseDown = true
        setIsMouseDown(true)
        moveSlider(e)
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!mouseDown) {
        return
      }

      moveSlider(e)
    }

    const onMouseUp = (e: MouseEvent) => {
      if (e.button === LEFT_MOUSE_BTN_KEY) {
        mouseDown = false
        setIsMouseDown(false)
      }
    }

    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)

    return () => {
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
    }
  }, [ref])

  return {
    x: position.x,
    y: position.y,
    isMouseDown,
    setPosition
  }
}
