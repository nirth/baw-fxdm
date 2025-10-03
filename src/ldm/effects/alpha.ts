import { ApplyEffectExecutionParamsAtFrame } from '../animation'
import { EffectConfig } from '../configs'
import { EasingKind } from '../easing'
import {
  EffectDuration,
  EffectExecutionParams,
  FiniteDuration,
  LoopedDuration,
} from './core'

export type AlphaEffectConfig<DurationType extends EffectDuration> =
  EffectConfig<DurationType> & {
    from: number
    to: number
    easingKind: EasingKind
  }

export type FadeEffectConfig = AlphaEffectConfig<FiniteDuration>

export type PulseEffectConfig = AlphaEffectConfig<LoopedDuration>

export type EmptyAlphaEffectValue = -1
export type NonEmptyAlphaEffectValue = number
export type AlphaEffectValue =
  | EmptyAlphaEffectValue
  | NonEmptyAlphaEffectValue

export type AlphaEffectExecutionParams = EffectExecutionParams & {
  alpha: AlphaEffectValue
}

export type ApplyAlphaEffectAtFrame =
  ApplyEffectExecutionParamsAtFrame<AlphaEffectExecutionParams>
