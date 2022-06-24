import React from 'react'
import logo from '../../assets/logo.png'
import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="logo" className="header__logo" />
            <nav className="header__nav-container">
                <ul className="header__nav">
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    );
};


export default Header;