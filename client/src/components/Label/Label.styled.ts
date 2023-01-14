import { LabelHTMLAttributes } from "react";
import styled from "styled-components";

export type LabelVariants = "blue" | "orange" | "purple" | "green";

interface LabelContainerProps {
  variant: LabelVariants
}

export const LabelContainer = styled.label<LabelContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  max-width: 2.5rem;
  width: 100%;
  
  padding: 0.25rem 1.25rem;  
  margin: 0.25rem;

  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 2px;  

  background-color: ${props => props.theme[props.variant]};
  color: ${props => props.theme.white};
`