import { Integer } from './core'

export enum EasingKind {
  Linear = 'linear',
  EaseIn = 'easeIn',
  EaseOut = 'easeOut',
  EaseInOut = 'easeInOut',
  Bounce = 'bounce',
  EaseInCubic = 'easeInCubic',
  EaseOutCubic = 'easeOutCubic',
  EaseInOutCubic = 'easeInOutCubic',
}

export type EasingValue = number

export type Ease = (duration: Integer, currentFrame: Integer) => EasingValue
export type ResolveEasingFunction = (kind: EasingKind) => Ease

export type ComputeCurrentEasingValue = (
  kind: EasingKind,
  palindromic: boolean,
  duration: Integer,
  currentFrame: Integer
) => EasingValue

export type ComputeEasingValues = (
  kind: EasingKind,
  palindromic: boolean,
  duration: Integer
) => EasingValue[]
