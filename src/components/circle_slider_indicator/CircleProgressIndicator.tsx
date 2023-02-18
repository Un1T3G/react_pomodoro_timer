import { useEffect, useRef } from 'react'
import {
  CircleProgressIndicatorModel,
  IIndicatorDotStyle,
  IIndicatorStyle,
} from './model/CircleProgressIndicatorModel'
import { cn } from '../../utils/css'

interface IProps {
  className?: string
  value: number
  minValue: number
  maxValue: number
  progressLineWidth: number
  lineCap: 'round' | 'square'
  style: IIndicatorStyle
  dotStyle?: IIndicatorDotStyle
}

let model: CircleProgressIndicatorModel | undefined

const CircleProgressIndicator = ({
  className,
  value,
  minValue,
  maxValue,
  progressLineWidth,
  lineCap,
  style,
  dotStyle,
}: IProps) => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (model) {
      model.setValue(value)
    }
  }, [value])

  useEffect(() => {
    const ctx = ref.current?.getContext('2d')

    if (!ctx) {
      return
    }

    model = new CircleProgressIndicatorModel(
      ctx,
      Math.min(
        ctx.canvas.parentElement!.clientWidth,
        ctx.canvas.parentElement!.clientHeight
      ),
      progressLineWidth,
      lineCap,
      value,
      minValue,
      maxValue,
      style,
      dotStyle
    )

    return () => {
      model?.dispose()
    }
  }, [minValue, maxValue, style, dotStyle])

  return <canvas className={cn('', className)} ref={ref}></canvas>
}

export default CircleProgressIndicator
