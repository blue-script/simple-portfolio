import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/my-photo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
  return (
      <StyledMain>
        <FlexWrapper justify={"space-around"} align={"center"}>
          <div>
            <span>Hi There</span>
            <Name>I am Aleksandr Demianov</Name>
            <MainTitle>A Web Developer</MainTitle>
          </div>

          <Photo src={photo} alt=""/>
        </FlexWrapper>
      </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #4b7378;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`