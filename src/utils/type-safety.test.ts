import {
  isEmptyAlphaValue,
  isNonEmptyAlphaValue,
  isAlphaValue,
} from './type-safety'

describe('Alpha value type guards', () => {
  describe('isEmptyAlphaValue', () => {
    it('should return true for -1', () => {
      expect(isEmptyAlphaValue(-1)).toBe(true)
    })

    it('should return false for valid alpha values', () => {
      expect(isEmptyAlphaValue(0)).toBe(false)
      expect(isEmptyAlphaValue(0.5)).toBe(false)
      expect(isEmptyAlphaValue(1)).toBe(false)
    })

    it('should return false for invalid values', () => {
      expect(isEmptyAlphaValue(-0.5)).toBe(false)
      expect(isEmptyAlphaValue(2)).toBe(false)
    })
  })

  describe('isNonEmptyAlphaValue', () => {
    it('should return true for valid alpha values between 0 and 1', () => {
      expect(isNonEmptyAlphaValue(0)).toBe(true)
      expect(isNonEmptyAlphaValue(0.25)).toBe(true)
      expect(isNonEmptyAlphaValue(0.5)).toBe(true)
      expect(isNonEmptyAlphaValue(0.75)).toBe(true)
      expect(isNonEmptyAlphaValue(1)).toBe(true)
    })

    it('should return false for empty value -1', () => {
      expect(isNonEmptyAlphaValue(-1)).toBe(false)
    })

    it('should return false for out of range values', () => {
      expect(isNonEmptyAlphaValue(-0.5)).toBe(false)
      expect(isNonEmptyAlphaValue(1.5)).toBe(false)
      expect(isNonEmptyAlphaValue(100)).toBe(false)
    })
  })

  describe('isAlphaValue', () => {
    it('should return true for all valid alpha values', () => {
      expect(isAlphaValue(-1)).toBe(true) // empty value
      expect(isAlphaValue(0)).toBe(true)
      expect(isAlphaValue(0.5)).toBe(true)
      expect(isAlphaValue(1)).toBe(true)
    })

    it('should return false for invalid values', () => {
      expect(isAlphaValue(-2)).toBe(false)
      expect(isAlphaValue(-0.5)).toBe(false)
      expect(isAlphaValue(1.1)).toBe(false)
      expect(isAlphaValue(10)).toBe(false)
    })
  })
})
