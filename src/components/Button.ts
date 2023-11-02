import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
  width: 170px;
  height: 32px;
  color: ${theme.color.font};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 100%;
      width: 100%;
    }
  }

  &::before {
    position: absolute;
    z-index: -1;
    content: "";
    display: inline-block;
    bottom: 0;
    height: 10px;
    width: 50%;
    background-color: ${theme.color.accent};
    left: 50%;
    transform: translateX(-50%);
  }
`