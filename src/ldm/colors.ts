export type RgbaColor =
  `rgba(${number}, ${number}, ${number}, ${number})`

export enum PsychedelicColors {
  // Pink variants
  HotPink = 'rgba(255, 20, 147, 0.9)', // Deep Magenta Pink
  HotPinkSoft = 'rgba(255, 20, 147, 0.6)', // Softer Hot Pink
  NeonPink = 'rgba(255, 16, 240, 0.9)', // Neon Purple-Pink
  BubbleGumPink = 'rgba(255, 193, 204, 0.9)', // Light Bubble Gum

  // Blue variants
  BrightBlue = 'rgba(0, 191, 255, 1)', // Deep Sky Blue
  ElectricBlue = 'rgba(125, 249, 255, 0.9)', // Electric Cyan Blue
  NeonBlue = 'rgba(77, 77, 255, 0.9)', // Pure Neon Blue

  // Yellow/Gold variants
  BrightYellow = 'rgba(255, 255, 0, 1)', // Pure Yellow
  NeonYellow = 'rgba(255, 255, 102, 0.9)', // Soft Neon Yellow
  GoldenYellow = 'rgba(255, 223, 0, 0.9)', // Golden

  // Green variants
  NeonGreen = 'rgba(57, 255, 20, 0.9)', // Neon Lime Green
  ElectricGreen = 'rgba(0, 255, 127, 0.9)', // Spring Green

  // Purple variants
  NeonPurple = 'rgba(191, 64, 191, 0.9)', // Medium Orchid
  ElectricPurple = 'rgba(191, 0, 255, 0.9)', // Electric Purple

  // Orange variants
  NeonOrange = 'rgba(255, 95, 31, 0.9)', // Neon Orange-Red
  ElectricOrange = 'rgba(255, 153, 0, 0.9)', // Bright Orange

  // Special effects
  Transparent = 'transparent', // No color
  BlackGlow = 'rgba(0, 0, 0, 0.5)', // Black with transparency
  WhiteGlow = 'rgba(255, 255, 255, 0.7)', // White glow
}

export enum SolidColors {
  Black = 'rgba(0, 0, 0, 1)',
  White = 'rgba(255, 255, 255, 1)',
  Red = 'rgba(255, 0, 0, 1)',
  Green = 'rgba(0, 255, 0, 1)',
  Blue = 'rgba(0, 0, 255, 1)',
  Yellow = 'rgba(255, 255, 0, 1)',
  Cyan = 'rgba(0, 255, 255, 1)',
  Magenta = 'rgba(255, 0, 255, 1)',
  Gray = 'rgba(128, 128, 128, 1)',
  DarkGray = 'rgba(64, 64, 64, 1)',
  LightGray = 'rgba(192, 192, 192, 1)',
  Orange = 'rgba(255, 165, 0, 1)',
  Purple = 'rgba(128, 0, 128, 1)',
  Brown = 'rgba(165, 42, 42, 1)',
  Pink = 'rgba(255, 192, 203, 1)',
  Lime = 'rgba(0, 255, 0, 1)',
  Navy = 'rgba(0, 0, 128, 1)',
  Teal = 'rgba(0, 128, 128, 1)',
  Olive = 'rgba(128, 128, 0, 1)',
  Maroon = 'rgba(128, 0, 0, 1)',
}

export type Color = PsychedelicColors | SolidColors | RgbaColor
