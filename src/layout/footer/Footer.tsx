import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";
import { S } from './Footer_Styles';

const socialItemData = [
  {
    iconId: "instagram",
  },
  {
    iconId: "telegram",
  },
  {
    iconId: "vk",
  },
  {
    iconId: "linkedin",
  },
]

export const Footer: React.FC = () => {
  return (
      <S.Footer>
        <FlexWrapper direction={"column"} align={"center"}>
          <S.Name>Aleksandr</S.Name>
          <S.SocialList>
            {
              socialItemData.map((s, index) => {
                return (
                    <S.SocialItem key={index}>
                      <S.SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={s.iconId}/>
                      </S.SocialLink>
                    </S.SocialItem>
                )})
            }
          </S.SocialList>
          <S.Copyright>© 2023 Aleksandr Demianov, All Rights Reserved.</S.Copyright>
        </FlexWrapper>
      </S.Footer>
  );
};

