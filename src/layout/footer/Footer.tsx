import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
  return (
      <StyledFooter>
        <FlexWrapper direction={"column"} align={"center"}>
          <Name>Aleksandr</Name>
          <SocialList>
            <SocialItem>
              <SocialLink>
                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"}/>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"}/>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedin"}/>
              </SocialLink>
            </SocialItem>
          </SocialList>
          <Copyright>© 2023 Aleksandr Demianov, All Rights Reserved.</Copyright>
        </FlexWrapper>
      </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background-color: ${theme.color.primaryBg};
  padding: 40px 0;
`

const Name = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
`

const SocialList = styled.ul`
  display: flex;
  margin: 30px 0;
  gap: 20px;
`

const SocialItem = styled.li``

const SocialLink = styled.a`
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.10);
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.color.accent};
  
  &:hover {
    color: ${theme.color.primaryBg};
    transform: translateY(-4px);
  }
`

const Copyright = styled.small`
  opacity: 0.5;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`