import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
  background: #533D8B;
  border-radius: 22px;
  position: relative;

  font-family: 'Open Sans';
  font-weight: 500;
  cursor: pointer;
  color: #FFFFFF;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  min-width: 120px;
  min-height: 35px;
  width: 100%;

  &:hover{
    background-color: #FFFFFF;
    color: #E41050;
  }

  ${({variant}) => variant !== "primary" && css`
  min-width: 167px;
  height: 33px;

  background: #E41050;

  &: hover{
    color: #E41050;
    font-weight: 500;
    background-color: #FFFFFF;
    cursor: pointer;
  }

  &::after {
    content: '';
    position: absolute;
    border: 1px solid #e4105d;
    top: -5px;
    left: -6px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-radius: 22px;
  }
  ` }
`