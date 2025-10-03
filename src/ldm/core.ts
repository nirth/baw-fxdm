import { ApplyEffectExecutionParamsAtFrame } from './animation'
import { EffectConfig } from './configs'
import {
  ComputeEffectExecutionParamsAtFrame,
  EffectDuration,
  EffectExecutionParams,
} from './effects'

export type Integer = number
export enum Direction {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export enum BlendMode {
  Normal = 'normal',
  Multiply = 'multiply',
  Screen = 'screen',
  Overlay = 'overlay',
  Darken = 'darken',
  Lighten = 'lighten',
  ColorDodge = 'color-dodge',
  ColorBurn = 'color-burn',
  HardLight = 'hard-light',
  SoftLight = 'soft-light',
  Difference = 'difference',
  Exclusion = 'exclusion',
}

export type EffectParamComputerMap<
  DurationType extends EffectDuration,
  EcType extends EffectConfig<DurationType>,
> = {
  [effectName: string]: ComputeEffectExecutionParamsAtFrame<
    DurationType,
    EcType
  >
}

export type EffectParamApplicatorMap<
  EepType extends EffectExecutionParams,
> = {
  [animationName: string]: ApplyEffectExecutionParamsAtFrame<EepType>
}
