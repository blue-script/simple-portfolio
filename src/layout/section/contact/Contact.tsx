import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import { S } from './Contacts_Styles';

export const Contact: React.FC = () => {
  return (
      <S.Contacts>
        <Container>
          <SectionTitle>Contact</SectionTitle>
          <S.StyledForm>
            <S.Field placeholder={"name"}/>
            <S.Field placeholder={"subject"}/>
            <S.Field placeholder={"message"} as={"textarea"}/>
            <Button type={"submit"}>Send message</Button>
          </S.StyledForm>
        </Container>
      </S.Contacts>
  );
};