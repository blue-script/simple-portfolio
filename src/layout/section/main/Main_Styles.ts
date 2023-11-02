import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

const Main = styled.section`
  min-height: 100vh;
  background-color: #4b7378;
  display: flex;
`;

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
const Name = styled.h2`
  ${font({
  family: "'Josefin Sans', sans-serif",
  weight: 700,
  Fmin: 36,
  Fmax: 50,
})};
  letter-spacing: 2.5px;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      display: inline-block;
      content: "";
      height: 20px;
      width: 100%;
      background-color: ${theme.color.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`;

const MainTitle = styled.h1`
  ${font({ weight: 400, Fmin: 20, Fmax: 27 })};
  
  p {
    display: none;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;


  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -24px;
    left: 24px;
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.color.accent};

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }

  @media ${theme.media.mobile} {
    margin-top: 65px;
  }
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`;

export const S = {
  Main,
  SmallText,
  Name,
  MainTitle,
  PhotoWrapper,
  Photo,
}