import styled from "styled-components";

interface ColumnContainerProps {
  color: string,
}

export const ColumnWrapper = styled.div<ColumnContainerProps>`
  display: flex;
  flex-direction: column;
  width: fit-content;
  border-radius: 2px;
  color: ${props => props.theme.white};
  background-color: ${props => props.color};
  padding: 0.625rem;
  gap: 0.625rem;
`

export const ColumnTitle = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  gap: 0.75rem;
  line-height: 1.6;
`

