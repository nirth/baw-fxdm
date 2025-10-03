import { EffectConfig } from '../configs'
import { Integer } from '../core'
import { ImageDetails } from '../images'

export enum DurationKind {
  Static = 'static',
  Looped = 'looped',
  Finite = 'finite',
}

export type Static = {
  kind: DurationKind.Static
}

export type LoopedDuration = {
  kind: DurationKind.Looped
  duration: Integer
  pauseBetween: Integer
  reversed: boolean
}

export type FiniteDuration = {
  kind: DurationKind.Finite
  startFrame: Integer
  duration: Integer
  reversed: boolean
}

export type EffectDuration = Static | LoopedDuration | FiniteDuration

export type EffectExecutionParams = {}

export type ComputeEffectExecutionParamsAtFrame<
  DurationType extends EffectDuration,
  EcType extends EffectConfig<DurationType>,
> = (
  imgDetails: ImageDetails,
  effectConfig: EcType,
  frame: Integer
) => EffectExecutionParams
