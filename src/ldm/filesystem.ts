import { Image } from './images'

export type LoadImage = (path: string) => Promise<Image>
