import { AlphaEffectValue, EmptyAlphaEffectValue, NonEmptyAlphaEffectValue } from '../ldm/effects'

export const isEmptyAlphaValue = (alpha: AlphaEffectValue): alpha is EmptyAlphaEffectValue => {
  return alpha === -1
}

export const isNonEmptyAlphaValue = (
  alpha: AlphaEffectValue
): alpha is NonEmptyAlphaEffectValue => {
  return alpha >= 0 && alpha <= 1
}

export const isAlphaValue = (candidate: any): candidate is AlphaEffectValue => {
  return isEmptyAlphaValue(candidate) || isNonEmptyAlphaValue(candidate)
}
