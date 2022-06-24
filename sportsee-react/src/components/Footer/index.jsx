import React from 'react'
import yogaIcon from '../../assets/yoga-icon.png'
import swimmingIcon from '../../assets/swimming-icon.png'
import bikeIcon from '../../assets/bike-icon.png'
import weightIcon from '../../assets/weight-icon.png'
import './footer.scss'

const Footer = () => {
    return (
        <div>
            <aside className="mainContainer__vertical-menu">
                <div className="mainContainer__vertical-menu-container">
                    <img src={yogaIcon} alt="" className="mainContainer__vertical-menu-item" />
                    <img src={swimmingIcon} alt="" className="mainContainer__vertical-menu-item" />
                    <img src={bikeIcon} alt="" className="mainContainer__vertical-menu-item" />
                    <img src={weightIcon} alt="" className="mainContainer__vertical-menu-item" />
                </div>
            </aside>
        </div> 
    );
};


export default Footer;