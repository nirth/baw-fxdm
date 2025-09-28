import { ApplyEffectExecutionParamsAtFrame } from '../animation'
import { EasingKind } from '../easing'
import { EffectConfig, EffectExecutionParams, FiniteDuration, LoopedDuration } from './core'

export type AlphaEffectConfig = EffectConfig & {
  from: number
  to: number
  easingKind: EasingKind
}

export type FadeEffectConfig = AlphaEffectConfig & {
  duration: FiniteDuration
}

export type PulseEffectConfig = AlphaEffectConfig & {
  duration: LoopedDuration
}

export type EmptyAlphaEffectValue = -1
export type NonEmptyAlphaEffectValue = number
export type AlphaEffectValue = EmptyAlphaEffectValue | NonEmptyAlphaEffectValue

export type AlphaEffectExecutionParams = EffectExecutionParams & {
  alpha: AlphaEffectValue
}

export type ApplyAlphaEffectAtFrame = ApplyEffectExecutionParamsAtFrame<AlphaEffectExecutionParams>
