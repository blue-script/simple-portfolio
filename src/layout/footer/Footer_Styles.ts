import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.div`
  background-color: ${theme.color.primaryBg};
  padding: 40px 0;
`

const Name = styled.span`
  letter-spacing: 3px;
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
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
    background-color: ${theme.color.accent};
  }
`

const Copyright = styled.small`
  opacity: 0.5;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`

export const S = {
  Footer,
  Name,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright,
}