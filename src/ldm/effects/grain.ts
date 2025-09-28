import { Integer } from '../core'
import { AlphaEffectValue } from './alpha'
import { EffectConfig, EffectExecutionParams, LoopedDuration } from './core'
import { ApplyEffectExecutionParamsAtFrame } from '../animation'

export type GrainEffectConfig = EffectConfig & {
  duration: LoopedDuration
  grainOpacity: AlphaEffectValue
  size: Integer
}

export type GrainEffectExecutionParams = EffectExecutionParams & {}

export type ApplyGrainEffectAtFrame = ApplyEffectExecutionParamsAtFrame<GrainEffectExecutionParams>
