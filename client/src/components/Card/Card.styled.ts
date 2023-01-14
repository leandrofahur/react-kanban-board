import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 130px;    
  border-radius: 4px;
  /* background-color: ${props => props.theme.white};     */
  background-color: #fafafa;    
  box-shadow: 0px 1px 4px rgba(0,0,0,0.2);
  padding: 0.5rem;  
  margin: 3rem;
`

export const CardContent = styled.textarea`
  font-size: 0.75rem;
  border: .1rem solid rgba(0,0,0,0.2);
  resize: none;  
  outline: none;
  box-shadow: none;
  
  width: 100%;
  height: 100%;
  border-radius: 4px;    
  margin-bottom: 0.5rem;
  padding: 0.5rem;
`

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
