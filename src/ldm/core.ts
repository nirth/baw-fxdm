import { EffectExecutionParams } from './effects'

export type Integer = number
export enum Direction {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export type ImageDetails = {
  name: string
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
