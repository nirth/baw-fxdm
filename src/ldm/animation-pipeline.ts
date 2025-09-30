import { EffectConfigs } from './effects/core'

export type AnimationPipelineSet = {
  name: string
  subDirectory: string
  animationDuration: string
  effects: EffectConfigs
}

export type AnimationPipelineConfig = {
  name: string
  workingDirectory: string
  isDebug: boolean
  isQuick: boolean
  sets: AnimationPipelineSet[]
}
