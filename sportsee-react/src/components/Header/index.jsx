import React from 'react'
import logo from '../../assets/logo.png'
import styled from 'styled-components'

const HeaderLabel = styled.header`
    background: #020203;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 20px 45px 11px 29px;
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    z-index: 10000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const ImgLabel = styled.img`
    width: 178px;
`

const NavLabel = styled.nav`
    display: flex;
    align-items: center;
`

const UlLabel = styled.ul`
    font-size: 24px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    display: flex;
    column-gap: 125px; 
`

const Header = () => {
    return (
        <HeaderLabel>
            <ImgLabel src={logo} alt="logo"  />
            <NavLabel>
                <UlLabel>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </UlLabel>
            </NavLabel>
        </HeaderLabel>
    );
};

export default Header;