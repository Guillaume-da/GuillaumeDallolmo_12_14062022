import React from 'react';
import { useState } from "react";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import "../../styles/index.scss";

/**
 * Allows to show Header
 *
 * @return jsx
 * @author Guillaume
 * @version 1.0
 * 
 */
const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <HeaderLabel>
      <ImgLabel src={logo} alt="logo" />
      <NavLabel>
        <UlLabel className={` ${showLinks ? "show-nav" : "hide-nav"} `}>
          <LinkLabel>Accueil</LinkLabel>
          <LinkLabel>Profil</LinkLabel>
          <LinkLabel>Réglage</LinkLabel>
          <LinkLabel>Communauté</LinkLabel>
        </UlLabel>
      </NavLabel>
      <Button onClick={handleShowLinks}>
        <Line></Line>
      </Button>
    </HeaderLabel>
  );
};

const HeaderLabel = styled.header`
  background: #020203;
  transition: all ease-in-out;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px 45px 11px 29px;
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  z-index: 10000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const ImgLabel = styled.img`
  width: 178px;
`;

const NavLabel = styled.nav`
  display: flex;
  align-items: center;
`;

const UlLabel = styled.ul`
  font-size: 24px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  display: flex;
  column-gap: 125px;
  position: relative;
  @media (max-width: 1380px) {
    font-size: 18px;
  }
  @media (max-width: 1080px) {
    column-gap: 55px;
    font-size: 28px;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left: 0;
    transform: translateX(-100vw);
    bottom: 0;
    height: 100vh;
    background: black;
    opacity: 0.8;
    color: white;
    align-items: center;
    width: 100vw;
  }
`;
const LinkLabel = styled.li`
  padding: 10px;
`;
const Button = styled.span`
  position: fixed;
  top: 25px;
  right: 20px;
  display: block;
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;
const Line = styled.span`
  display: none;
  height: 3px;
  width: 40px;
  background: white;
  position: fixed;
  top: 45px;
  right: 20px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    display: block;
    height: 3px;
    width: 40px;
    background: white;
  }
  &::before {
    transform: translateY(-12px);
  }
  &::after {
    transform: translateY(12px);
  }
  @media (max-width: 1080px) {
    display: block;
  }
`;

export default Header;
