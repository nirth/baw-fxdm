import { Integer } from './core'
import { EffectDuration } from './effects'

export type AnimationConfig<DurationType extends EffectDuration> = {
  duration: Integer
  frameRate: Integer
  layers: LayerConfig<DurationType>[]
}

export type LayerConfig<DurationType extends EffectDuration> = {
  index: Integer
  effectConfigs: EffectConfig<DurationType>[]
}

export type EffectConfig<DurationType extends EffectDuration> = {
  identifier: string
  duration: DurationType
}
