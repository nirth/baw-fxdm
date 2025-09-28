export class ImageLoadingError extends Error {
  constructor(
    message: string,
    public readonly path: string,
    public readonly cause?: unknown
  ) {
    super(message)
    this.name = 'ImageLoadingError'
  }
}
