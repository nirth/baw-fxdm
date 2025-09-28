import { Direction } from 'readline'
import { Integer } from '../core'
import { EasingKind } from '../easing'
import { EffectConfig, FiniteDuration } from './core'

export type DistortionBandEffectConfig = EffectConfig & {
  duration: FiniteDuration
  motionEasingKind: EasingKind
  motionDirection: Direction
  canvasSize: Integer
  bandSize: Integer
}
