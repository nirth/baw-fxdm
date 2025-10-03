import { Integer } from '../core'
import { AlphaEffectValue } from './alpha'
import { EffectExecutionParams, LoopedDuration } from './core'
import { ApplyEffectExecutionParamsAtFrame } from '../animation'
import { EffectConfig } from '../configs'

export type GrainEffectConfig = EffectConfig<LoopedDuration> & {
  grainOpacity: AlphaEffectValue
  size: Integer
}

export type GrainEffectExecutionParams = EffectExecutionParams & {}

export type ApplyGrainEffectAtFrame =
  ApplyEffectExecutionParamsAtFrame<GrainEffectExecutionParams>
