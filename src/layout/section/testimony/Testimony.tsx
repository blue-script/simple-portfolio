import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "../skills/Skills_Styles";
import {Container} from "../../../components/Container";

export const Testimony: React.FC = () => {
  return (
      <StyledTestimony>
        <Container>
          <SectionTitle>Testimony</SectionTitle>
          <FlexWrapper direction={"column"} align={"center"}>
            <S.IconWrapper>
              <Icon iconId={"quote"} />
            </S.IconWrapper>
            <Slider/>
          </FlexWrapper>
        </Container>
      </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  background-color: #9acafd;
  min-height: 50px;
  
  ${S.IconWrapper} {
    margin:28px 0 72px;
  }
`