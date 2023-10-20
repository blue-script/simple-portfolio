import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimony = () => {
  return (
      <StyledTestimony>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={"column"} align={"center"}>
          <Icon iconId={"quote"} />
          <Slider/>
        </FlexWrapper>
      </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  background-color: #9acafd;
  min-height: 50px;
`