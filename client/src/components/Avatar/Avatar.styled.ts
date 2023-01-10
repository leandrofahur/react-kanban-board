import { ImgHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { AvatarImageProps } from "./Avatar.component";

export type AvatarSize = "small" | "medium" | "large";

export interface AvatarImageContainerProps extends ImgHTMLAttributes<HTMLImageElement> {
  size: AvatarSize
}

const imageSizes = {
  small: '24px',
  medium: '32px',
  large: '48px',
}

export const AvatarImage = styled.img<AvatarImageProps>`
  ${(props) => {
    return css`
      width: ${imageSizes[props.size]};
      height: ${imageSizes[props.size]};
    `
  }}
  border-radius: 50%;
`