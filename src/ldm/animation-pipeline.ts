import { EffectConfig } from './effects/core'

export type AnimationPipelineSet = {
  name: string
  subDirectory: string
  animationDuration: string
  effects: EffectConfig[]
}

export type AnimationPipelineConfig = {
  name: string
  workingDirectory: string
  isDebug: boolean
  isQuick: boolean
  sets: AnimationPipelineSet[]
}
