import { tickFastSound, tickSlowSound } from '../assets'
import { TickSoundType } from '../type/TickSoundType'

export const getTickSound = (type: TickSoundType) => {
  switch (type) {
    case TickSoundType.NONE:
      return undefined
    case TickSoundType.TICK_SLOW:
      return tickSlowSound
    case TickSoundType.TICK_FAST:
      return tickFastSound
    default:
      throw new Error()
  }
}
