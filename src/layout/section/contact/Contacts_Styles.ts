import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Contacts = styled.section`
  position: relative;
`

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:  center;
  gap: 16px;
  margin: 0 auto;
  
  textarea {
    resize: none;
    height: 155px;
  }
`

const Field = styled.input`
  width: 100%;
  border: 1px solid ${theme.color.borderColor};
  background-color: ${theme.color.secondaryBg};
  padding: 7px 15px;

  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;

  color: ${theme.color.font};

  &::placeholder {
    color: ${theme.color.placeholderColor};
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 1px solid ${theme.color.borderColor};
  }
`

export const S = {
  Field,
  StyledForm,
  Contacts,
}