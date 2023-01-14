import { LabelHTMLAttributes } from "react";
import { LabelContainer, LabelVariants } from "./Label.styled";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  variant?: LabelVariants,
  children: React.ReactNode
}

export function Label(props: LabelProps) {
  const {
    variant = 'blue',
    children,
    ...otherProps
  } = props;

  return <LabelContainer variant={variant} {...otherProps}>{children}</LabelContainer>
}