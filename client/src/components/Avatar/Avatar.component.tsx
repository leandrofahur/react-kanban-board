import { ImgHTMLAttributes } from 'react'
import { AvatarImage, AvatarSize } from './Avatar.styled'

export interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  size: AvatarSize
}

export function Avatar(props: AvatarImageProps) {
  const { src, size = 'small' } = props;
  return <AvatarImage src={src} size={size} />
}