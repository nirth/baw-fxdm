# Bells and Whistles FX Datamodel

## Data Dictionary

### Core Types

`Integer` - `dist/ldm/core.d.ts` - `import { Integer } from '@baw/fxdm'`
`Direction` - `dist/ldm/core.d.ts` - `import { Direction } from '@baw/fxdm'`
`ImageDetails` - `dist/ldm/core.d.ts` - `import { ImageDetails } from '@baw/fxdm'`
`Image` - `dist/ldm/core.d.ts` - `import { Image } from '@baw/fxdm'`
`Animation` - `dist/ldm/core.d.ts` - `import { Animation } from '@baw/fxdm'`

### Animation Types

`EmptyFrameDetails` - `dist/ldm/animation.d.ts` - `import { EmptyFrameDetails } from '@baw/fxdm'`
`CreateEmptyAnimationTimeline` - `dist/ldm/animation.d.ts` - `import { CreateEmptyAnimationTimeline } from '@baw/fxdm'`
`ApplyEffectExecutionParamsAtFrame` - `dist/ldm/animation.d.ts` - `import { ApplyEffectExecutionParamsAtFrame } from '@baw/fxdm'`

### Animation Pipeline Types

`AnimationPipelineSet` - `dist/ldm/animation-pipeline.d.ts` - `import { AnimationPipelineSet } from '@baw/fxdm'`
`AnimationPipelineConfig` - `dist/ldm/animation-pipeline.d.ts` - `import { AnimationPipelineConfig } from '@baw/fxdm'`

### Easing Types

`EasingKind` - `dist/ldm/easing.d.ts` - `import { EasingKind } from '@baw/fxdm'`
`EasingValue` - `dist/ldm/easing.d.ts` - `import { EasingValue } from '@baw/fxdm'`
`Ease` - `dist/ldm/easing.d.ts` - `import { Ease } from '@baw/fxdm'`
`ResolveEasingFunction` - `dist/ldm/easing.d.ts` - `import { ResolveEasingFunction } from '@baw/fxdm'`
`ComputeCurrentEasingValue` - `dist/ldm/easing.d.ts` - `import { ComputeCurrentEasingValue } from '@baw/fxdm'`
`ComputeEasingValues` - `dist/ldm/easing.d.ts` - `import { ComputeEasingValues } from '@baw/fxdm'`

### Color Types

`RgbaColor` - `dist/ldm/colors.d.ts` - `import { RgbaColor } from '@baw/fxdm'`
`PsychedelicColors` - `dist/ldm/colors.d.ts` - `import { PsychedelicColors } from '@baw/fxdm'`
`SolidColors` - `dist/ldm/colors.d.ts` - `import { SolidColors } from '@baw/fxdm'`
`Color` - `dist/ldm/colors.d.ts` - `import { Color } from '@baw/fxdm'`

### Filesystem Types

`LoadImage` - `dist/ldm/filesystem.d.ts` - `import { LoadImage } from '@baw/fxdm'`

### Effect Core Types

`DurationKind` - `dist/ldm/effects/core.d.ts` - `import { DurationKind } from '@baw/fxdm'`
`Static` - `dist/ldm/effects/core.d.ts` - `import { Static } from '@baw/fxdm'`
`LoopedDuration` - `dist/ldm/effects/core.d.ts` - `import { LoopedDuration } from '@baw/fxdm'`
`FiniteDuration` - `dist/ldm/effects/core.d.ts` - `import { FiniteDuration } from '@baw/fxdm'`
`EffectDuration` - `dist/ldm/effects/core.d.ts` - `import { EffectDuration } from '@baw/fxdm'`
`EffectConfig` - `dist/ldm/effects/core.d.ts` - `import { EffectConfig } from '@baw/fxdm'`
`EffectExecutionParams` - `dist/ldm/effects/core.d.ts` - `import { EffectExecutionParams } from '@baw/fxdm'`
`ComputeEffectExecutionParamsAtFrame` - `dist/ldm/effects/core.d.ts` - `import { ComputeEffectExecutionParamsAtFrame } from '@baw/fxdm'`

### Alpha Effect Types

`AlphaEffectConfig` - `dist/ldm/effects/alpha.d.ts` - `import { AlphaEffectConfig } from '@baw/fxdm'`
`FadeEffectConfig` - `dist/ldm/effects/alpha.d.ts` - `import { FadeEffectConfig } from '@baw/fxdm'`
`PulseEffectConfig` - `dist/ldm/effects/alpha.d.ts` - `import { PulseEffectConfig } from '@baw/fxdm'`
`EmptyAlphaEffectValue` - `dist/ldm/effects/alpha.d.ts` - `import { EmptyAlphaEffectValue } from '@baw/fxdm'`
`NonEmptyAlphaEffectValue` - `dist/ldm/effects/alpha.d.ts` - `import { NonEmptyAlphaEffectValue } from '@baw/fxdm'`
`AlphaEffectValue` - `dist/ldm/effects/alpha.d.ts` - `import { AlphaEffectValue } from '@baw/fxdm'`
`AlphaEffectExecutionParams` - `dist/ldm/effects/alpha.d.ts` - `import { AlphaEffectExecutionParams } from '@baw/fxdm'`
`ApplyAlphaEffectAtFrame` - `dist/ldm/effects/alpha.d.ts` - `import { ApplyAlphaEffectAtFrame } from '@baw/fxdm'`

### Grain Effect Types

`GrainEffectConfig` - `dist/ldm/effects/grain.d.ts` - `import { GrainEffectConfig } from '@baw/fxdm'`
`GrainEffectExecutionParams` - `dist/ldm/effects/grain.d.ts` - `import { GrainEffectExecutionParams } from '@baw/fxdm'`
`ApplyGrainEffectAtFrame` - `dist/ldm/effects/grain.d.ts` - `import { ApplyGrainEffectAtFrame } from '@baw/fxdm'`

### Distortion Band Effect Types

`DistortionBandEffectConfig` - `dist/ldm/effects/distortion-band.d.ts` - `import { DistortionBandEffectConfig } from '@baw/fxdm'`

### Error Types

`ImageLoadingError` - `dist/errors/ImageLoadingError.d.ts` - `import { ImageLoadingError } from '@baw/fxdm'`

### Utility Types

`isEmptyAlphaValue` - `dist/utils/type-safety.d.ts` - `import { isEmptyAlphaValue } from '@baw/fxdm'`
`isNonEmptyAlphaValue` - `dist/utils/type-safety.d.ts` - `import { isNonEmptyAlphaValue } from '@baw/fxdm'`
`isAlphaValue` - `dist/utils/type-safety.d.ts` - `import { isAlphaValue } from '@baw/fxdm'`
