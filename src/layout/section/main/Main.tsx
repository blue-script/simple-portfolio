import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/my-photo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
  return (
      <StyledMain>
        <Container>
          <FlexWrapper justify={"space-between"} align={"center"}>
            <div>
              <SmallText>Hi There</SmallText>
              <Name>I am <span>Aleksandr Demianov</span></Name>
              <MainTitle>A Web Developer</MainTitle>
            </div>
            <PhotoWrapper>
              <Photo src={photo} alt=""/>
            </PhotoWrapper>
          </FlexWrapper>
        </Container>
      </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #4b7378;
  display: flex;
`

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`
const Name = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 2.5px;
  
  span {
    position: relative;
    z-index: 0;
    
    &::before {
      display: inline-block;
      content: "";
      height: 20px;
      width: 100%;
      background-color: ${theme.color.accent};

      position: absolute;
      bottom:0;
      z-index: -1;
    }
  }
`

const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`

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
  }
`
const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`