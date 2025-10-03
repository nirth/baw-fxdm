import { Integer } from './core'

export enum ImageFileKind {
  Jpeg = 'jpeg',
  Png = 'png',
  Gif = 'gif',
  Webp = 'webp',
}

export enum ImageKind {
  EmptyImage = 'EmptyImage',
  LoadedImage = 'LoadedImage',
}

export type ImageDetails = {
  name: string
  x: number
  y: number
  width: number
  height: number
}

export type LoadedImage = ImageDetails & {
  kind: ImageKind.LoadedImage
  buffer: Buffer
}

export type EmptyImage = ImageDetails & {
  kind: ImageKind.EmptyImage
}

export type Image = LoadedImage | EmptyImage

export type ImageProviderConfig = {
  width: Integer
  height: Integer
}

export type CreateImageProvider = <
  ConfigType extends ImageProviderConfig,
>(
  config: ConfigType
) => ProvideImage
export type ProvideImage = (iteration: Integer) => Promise<Image>
