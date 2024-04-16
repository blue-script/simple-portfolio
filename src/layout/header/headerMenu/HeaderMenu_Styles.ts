import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

// Menu

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${theme.color.accent};
  transition: ${theme.animations.transition};
  
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const MenuItem = styled.li`
  position: relative;
`

const NavLink = styled(Link)`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 55px; /* 110% */
  text-align: center;
  color: transparent;

  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.color.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
    transition: ${theme.animations.transition};
  }

  &:hover, &.active {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.color.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`

// Mobile_Menu

const MobileMenu = styled.nav``

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  background-color: rgba(31, 31, 32, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 1s ease-in-out;

  ul {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 1s ease-in-out;
  }

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);

    & ul {
      gap: 30px;
    }
  `}
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 99999;

  span {
    display: block;
    height: 2px;
    width: 36px;
    background-color: ${theme.color.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.color.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
     `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.color.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
     `}
    }
  }
}
`

// Desktop_Menu

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`

// export

export const S = {
  NavLink,
  Mask,
  MenuItem,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton,
  DesktopMenu,
}