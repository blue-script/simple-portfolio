import styled from "styled-components";
import { font } from "../styles/Common";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 600, Fmax: 36, Fmin: 30})}
  letter-spacing: 5px;
  margin-bottom: 90px;
  text-align: center;

  position: relative;

  &::before {
    display: inline-block;
    content: "";
    width: 55px;
    height: 1px;
    background-color: ${theme.color.accent};

    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);

    @media ${theme.media.mobile} {
      bottom: -24px;
    }
  }
`