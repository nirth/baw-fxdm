import { EffectExecutionParams } from './effects'

export type Integer = number
export enum Direction {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export type ImageDetails = {
  x: number
  y: number
  width: number
  height: number
}

export type Image = ImageDetails & {
  buffer: Buffer
}

export interface Animation<EepType extends EffectExecutionParams> {
  frames: Image[]
  effectExecutionParams: EepType[]
  timelineDuration: Integer

  applyEffectAtFrame: (frame: Integer) => Image
}

// export type ComputeEffectExecutionParams<ConfigType extends EffectConfig> = (
//   imgDetails: ImageDetails,
//   effect: ConfigType
// ) => EffectExecutionParams
