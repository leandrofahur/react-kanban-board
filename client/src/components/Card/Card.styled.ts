import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 17.5rem;
  width: 100%;  
  height: 6.375rem;
  border-radius: 4px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.white};  
`

export const CardTextArea = styled.textarea`    
  width: 100%;
  font-size: 1rem;
  border: 0;
  background-color: red;
`

export const CardFooter = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  margin-left: 1rem;
`