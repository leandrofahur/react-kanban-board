import styled from "styled-components";

export type AvatarSize = "small" | "medium" | "large";

interface AvatarContainerProps {
  size: AvatarSize,
  avatarUrl?: string
}

function getSize(size: AvatarSize) {
  switch (size) {
    case "small":
      return "24px"
    case "medium":
      return "32px"
    case "large":
      return "40px"
    default:
      return "24px"
  }
}

export const AvatarContainer = styled.img<AvatarContainerProps>`
  width: ${props => getSize(props.size)};
  height: ${props => getSize(props.size)};
  border-radius: 50%;  
  background: ${props => props.avatarUrl ? "" : props.theme.black};
` 