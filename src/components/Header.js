import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import MenuIcon from "./header/MenuIcon";

import { colors } from "BaseTheme";
import LogoIcon from "@icons/logo.svg";

const ABBREVIATED_TITLE_THRESHOLD = 440;
const MOBILE_MENU_THRESHOLD = 770;

export default function Header() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <Container>
      <Link to="/">
        <TitleContainer>
          <LogoContainer>
            <LogoIcon fill={colors.primary} width={50} height={50} />
          </LogoContainer>

          <Title />
        </TitleContainer>
      </Link>

      <StyledMenuIcon
        fill={colors.accent}
        $isExpanded={isMenuExpanded}
        onClick={() => setIsMenuExpanded((_isMenuExpanded) => !_isMenuExpanded)}
        size={48}
      />

      <Menu $isExpanded={isMenuExpanded}>
        <MenuItemLink to="/about">About</MenuItemLink>
        <MenuItemLink to="/why-simple-budget">Why Simple Budget</MenuItemLink>
        <MenuItemLink to="/blog">Blog</MenuItemLink>
        <MenuItemLink to="/contact">Contact</MenuItemLink>
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 80px;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
  background-color: ${colors.white};
  justify-content: space-between;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);

  a {
    text-decoration: none;
  }
`;

const LogoContainer = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid transparent;
  box-sizing: border-box;
  z-index: 200;
`;

const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: stretch;
  flex-direction: row;
  transition: top 200ms ease;
  z-index: 100;

  @media screen and (max-width: ${MOBILE_MENU_THRESHOLD}px) {
    flex-direction: column;
    position: absolute;
    top: ${(props) => (props.$isExpanded ? "80px" : "-220px")};
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.96);
  }
`;

const MenuItemLink = styled((props) => <Link {...props} />)`
  margin: 4px 16px;
  text-align: center;
  padding: 8px 0px;
  box-sizing: border-box;
  color: ${colors.accent};
  border-bottom: 1px solid transparent;

  :hover {
    border-color: ${colors.accent};
  }
`;

const StyledMenuIcon = styled((props) => <MenuIcon {...props} />)`
  display: none;

  @media screen and (max-width: ${MOBILE_MENU_THRESHOLD}px) {
    display: flex;
  }
`;

const Title = styled.h1`
  color: ${colors.primary};
  text-decoration: none;
  margin: 0px 20px;
  font-weight: normal;
  z-index: 200;
  font-family: "Nunito";

  ::before {
    content: "Simple Budget";
  }

  @media screen and (max-width: ${ABBREVIATED_TITLE_THRESHOLD}px) {
    ::before {
      content: "";
    }
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 20px;
  border-bottom: 1px solid ${colors.white};

  :hover {
    border-bottom-color: ${colors.primary};
  }
`;
