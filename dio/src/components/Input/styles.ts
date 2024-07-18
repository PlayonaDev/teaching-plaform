import styled from "styled-components";

export const InputContainer = styled.div`
 width: 100%;
 max-width: 275px;
 height: 30px;
 border-bottom: 1px solid #3B3450;

 display: flex;
 align-items: center;
 padding: 5px;
`

export const IconContainer = styled.div`
  margin-right: 10px;
`

export const ErrorText = styled.p`
  color: #FF0000;
  text-align: center;
  font-weight: 600;
  font-size: 13px;
  padding: 5px;
  background-color: #3B3450;
  border-radius: 50px;
  margin: 5px 0;
`

export const InputText = styled.input`
  width: 100%;
  background-color: transparent;
  color: #FFFFFF;
  border: 0;
  height: 30px;
`