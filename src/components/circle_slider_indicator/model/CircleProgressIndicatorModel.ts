import { clamp } from '../../../utils/math'

export interface IIndicatorStyle {
  color: string
  bgColor?: string
  backgroundProgressLineWidth?: number
}

export interface IIndicatorDotStyle {
  color: string
  radius: number
}

export class CircleProgressIndicatorModel {
  private _ctx: CanvasRenderingContext2D
  private _size: number
  private _progressLineWidth: number
  private _lineCap: 'round' | 'square'
  private _value: number
  private _minValue: number
  private _maxValue: number
  private _style: IIndicatorStyle
  private _dotStyle?: IIndicatorDotStyle

  constructor(
    ctx: CanvasRenderingContext2D,
    size: number,
    lineWidth: number,
    lineCap: 'round' | 'square',
    defaultValue: number,
    minValue: number,
    maxValue: number,
    style: IIndicatorStyle,
    dotStyle?: IIndicatorDotStyle
  ) {
    this._ctx = ctx
    this._size = size
    this._ctx.canvas.width = this._size
    this._ctx.canvas.height = this._size
    this._progressLineWidth = lineWidth
    this._lineCap = lineCap
    this._ctx.lineWidth = lineWidth
    this._ctx.lineCap = lineCap
    this._value = defaultValue
    this._minValue = minValue
    this._maxValue = maxValue
    this._style = style
    this._dotStyle = dotStyle
    this.update()
    window.addEventListener('resize', this.onResize.bind(this))
  }

  private onResize() {
    this._size = Math.min(
      this._ctx.canvas.clientWidth,
      this._ctx.canvas.clientHeight
    )
    this._ctx.canvas.width = this._size
    this._ctx.canvas.height = this._size
    this._ctx.lineWidth = this._progressLineWidth
    this._ctx.lineCap = this._lineCap
    this.update()
  }

  private drawCircle(color: string, value: number) {
    const dotRadius = this._dotStyle ? this._dotStyle.radius : 0
    const padding = Math.max(dotRadius, this._ctx.lineWidth)

    this._ctx.beginPath()
    this._ctx.strokeStyle = color
    this._ctx.arc(
      this._size / 2,
      this._size / 2,
      this._size / 2 - padding,
      0,
      2 * Math.PI * value
    )
    this._ctx.stroke()
  }

  private drawDot(x: number, y: number, radius: number, color: string) {
    this._ctx.beginPath()
    this._ctx.fillStyle = color
    this._ctx.arc(x, y, radius, 0, 2 * Math.PI)
    this._ctx.fill()
  }

  private update() {
    this._ctx.clearRect(0, 0, this._size, this._size)

    if (this._style.bgColor) {
      this._ctx.lineWidth = this._style.backgroundProgressLineWidth!;
      this.drawCircle(this._style.bgColor, 1)
      this._ctx.lineWidth = this._progressLineWidth
    }

    this.drawCircle(this._style.color, this._value / this._maxValue)

    if (this._dotStyle) {
      const angle = 2 * Math.PI * (this._value / this._maxValue)
      const radius = this._size / 2 - this._dotStyle.radius
      const x = this._size / 2 + Math.cos(angle) * radius
      const y = this._size / 2 + Math.sin(angle) * radius
      this.drawDot(x, y, this._dotStyle.radius, this._dotStyle.color)
    }
  }

  public setValue(value: number) {
    this._value = clamp(value, this._minValue, this._maxValue)
    this.update()
  }

  public dispose() {
    this._ctx.clearRect(0, 0, this._size, this._size)
    window.removeEventListener('resize', this.onResize.bind(this))
  }
}
