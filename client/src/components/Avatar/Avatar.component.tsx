import { ImgHTMLAttributes } from 'react'
import { AvatarContainer, AvatarSize } from './Avatar.styled'

interface AvatarContainerProps extends ImgHTMLAttributes<HTMLImageElement> {
  size: AvatarSize
  avatarUrl?: string
}

export function Avatar(props: AvatarContainerProps) {
  const { size = "small", avatarUrl, ...otherProps } = props;

  return <AvatarContainer size={size} src={avatarUrl} {...otherProps}></AvatarContainer>
}