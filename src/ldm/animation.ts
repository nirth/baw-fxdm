import { Image, Integer } from './core'
import { EffectExecutionParams } from './effects'

export type EmptyFrameDetails = {
  frame: Integer
}

export type CreateEmptyAnimationTimeline = (animationDuration: Integer) => EmptyFrameDetails[]

export type ApplyEffectExecutionParamsAtFrame<EepType extends EffectExecutionParams> = (
  img: Image,
  eep: EepType,
  frame: Integer
) => Promise<Image>
