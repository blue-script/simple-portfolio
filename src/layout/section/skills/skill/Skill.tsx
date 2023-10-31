import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
  iconId: string
  title: string
  description: string
}
export const Skill = (props: SkillPropsType) => {
  return (
      <StyledSkill>
        <FlexWrapper direction={"column"} align={"center"}>
          <IconWrapper>
            <Icon iconId={props.iconId}/>
          </IconWrapper>
          <SkillTitle>{props.title}</SkillTitle>
          <SkillText>{props.description}</SkillText>
        </FlexWrapper>
      </StyledSkill>
  );
};

const StyledSkill = styled.div`
  //width: 380px;
  width: 330px;
  flex-grow: 1;
  padding: 62px 20px 40px;
  
  @media ${theme.media.mobile} {
    padding: 62px 0 40px;
  }
`

export const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.10);
    transform: rotate(45deg) translate(-50%, -50%);

    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`

const SkillTitle = styled.h3`
  text-transform: uppercase;
  margin: 71px 0 15px;
`
const SkillText = styled.p`
  text-align: center;
`

