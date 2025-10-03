import { Integer } from '../ldm'
import {
  AlphaEffectValue,
  EmptyAlphaEffectValue,
  NonEmptyAlphaEffectValue,
} from '../ldm/effects'

export const isEmptyAlphaValue = (
  alpha: AlphaEffectValue
): alpha is EmptyAlphaEffectValue => {
  return alpha === -1
}

export const isNonEmptyAlphaValue = (
  alpha: AlphaEffectValue
): alpha is NonEmptyAlphaEffectValue => {
  return alpha >= 0 && alpha <= 1
}

export const isAlphaValue = (
  candidate: any
): candidate is AlphaEffectValue => {
  return (
    isEmptyAlphaValue(candidate) || isNonEmptyAlphaValue(candidate)
  )
}

export const isIntegerValue = (
  candidate: number
): candidate is Integer => {
  if (!Number.isInteger(candidate)) {
    throw new Error(`Expected integer, got ${candidate}`)
  }

  return Number.isInteger(candidate)
}
