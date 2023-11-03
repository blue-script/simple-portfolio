import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";

const Works = styled.section`
  position: relative;
  
  ${FlexWrapper} {
    gap: 30px;
  }
`

const Work = styled.div`
  background-color: ${theme.color.secondaryBg};
  //width: 330px;
  //flex-grow: 1;

  ${Link} {
    padding: 10px 0;
    
    & + ${Link} {
      margin-left: 20px;
    }
  }
  
  // @media ${theme.media.desktop} {
  //   max-width: 540px;
  // }
`

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    opacity: 0;
    transition: ${theme.animations.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: ${theme.animations.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
  
  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Description = styled.div`
  padding: 25px 20px;
`

const Title = styled.h3``

const Text = styled.p`
    margin: 14px 0 10px;
`
export const S = {
  Works,
  Text,
  Title,
  Description,
  Image,
  Work,
  ImageWrapper,
}