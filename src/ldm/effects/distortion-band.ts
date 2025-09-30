import { Direction, Integer } from '../core'
import { EasingKind } from '../easing'
import { EffectConfig, EffectExecutionParams, FiniteDuration } from './core'

export type DistortionBandEffectConfig = EffectConfig & {
  duration: FiniteDuration
  direction: Direction
  motionEasingKind: EasingKind
  canvasSize: Integer
  bandSize: Integer
}

export type DistortionBandEffectExecutionParams = EffectExecutionParams & {
  direction: Direction
  position: Integer
  size: Integer
  distortionOffset: number
  intensity: number
}
