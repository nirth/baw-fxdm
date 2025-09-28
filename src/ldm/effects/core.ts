import { ImageDetails, Integer } from '../core'

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

export type EffectConfig = {
  duration: EffectDuration
}

export type EffectExecutionParams = {}

export type ComputeEffectExecutionParamsAtFrame<EcType extends EffectConfig> = (
  imgDetails: ImageDetails,
  effectConfig: EcType,
  frame: Integer
) => EffectExecutionParams
