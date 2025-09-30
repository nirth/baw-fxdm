import { CreateEmptyAnimationTimeline, Integer } from '../ldm'

export const createFrames: CreateEmptyAnimationTimeline = (numFrames: Integer) => {
  return Array.from({ length: numFrames }).map((_value, index) => {
    return {
      frame: index + 1,
    }
  })
}
