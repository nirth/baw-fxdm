# @imagework/fx-datamodel

TypeScript data model and utilities for image effects.

## Installation

From the parent project:
```bash
npm install ./fx-datamodel
```

## Development

```bash
cd fx-datamodel
npm install
npm run build    # Build the module
npm run watch    # Watch for changes
```

## Structure

```
fx-datamodel/
├── src/
│   ├── types/       # Type definitions
│   │   ├── core.ts      # Core types (Integer, Percentage, etc.)
│   │   └── effects.ts   # Effect-related types
│   ├── utils/       # Utility functions
│   │   └── validators.ts # Type validators and converters
│   └── index.ts     # Main export file
├── dist/           # Built output (generated)
├── package.json
└── tsconfig.json
```

## Usage

```typescript
import {
  Integer,
  DistortionEffect,
  toInteger,
  isPercentage
} from '@imagework/fx-datamodel'

// Use the types and utilities
const frameNumber = toInteger(5)
const effect: DistortionEffect = {
  type: 'distortion',
  // ...
}
```