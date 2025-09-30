import { Direction, Integer } from '../core'
import { EasingKind } from '../easing'
import { EffectConfig, EffectExecutionParams, FiniteDuration } from './core'

export type DistortionBandEffectConfig = EffectConfig<FiniteDuration> & {
  direction: Direction
  motionEasingKind: EasingKind
  canvasSize: Integer
  bandSize: Integer
  amplitude: Integer
  frequency: Integer
}

export type DistortionBandEffectExecutionParams = EffectExecutionParams & {
  position: Integer
  size: Integer
  distortionOffset: number
  intensity: number
}
