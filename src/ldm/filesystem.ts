import { Image } from './core'

export type LoadImage = (path: string) => Promise<Image>
