import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {IconWrapper} from "../skills/skill/Skill";

export const Testimony = () => {
  return (
      <StyledTestimony>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={"column"} align={"center"}>
          <IconWrapper>
            <Icon iconId={"quote"} />
          </IconWrapper>
          <Slider/>
        </FlexWrapper>
      </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  background-color: #9acafd;
  min-height: 50px;
  
  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`