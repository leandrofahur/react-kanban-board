import styled, { css } from "styled-components";

export type LabelVariant = 'done' | 'review' | 'inProgress' | 'toDo';

type LabelContainerProps = {
  variant: LabelVariant
}

export const LabelContainer = styled.label <LabelContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: .75rem;
  height: 2rem;
  max-width: 7rem;
  width: 100%;
  border-radius: 4px;
  padding: 0.5rem .75rem;
  margin: 1rem;
  color: ${props => props.theme.colors.white};  
  background-color: ${(props) => props.theme.colors[props.variant]};
`