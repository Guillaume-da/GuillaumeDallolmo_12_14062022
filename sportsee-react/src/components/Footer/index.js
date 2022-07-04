import React from 'react'
import yogaIcon from '../../assets/yoga-icon.png'
import swimmingIcon from '../../assets/swimming-icon.png'
import bikeIcon from '../../assets/bike-icon.png'
import weightIcon from '../../assets/weight-icon.png'
import styled from 'styled-components'

/**
* Allows to show Footer
*
*
* @return jsx
* @author Guillaume
* @version 1.0
*/

const Footer = () => {
    return (
        <div>
            <AsideLabel>
                <DivLabel>
                    <ImgLabel src={yogaIcon} alt="" />
                    <ImgLabel src={swimmingIcon} alt="" />
                    <ImgLabel src={bikeIcon} alt="" />
                    <ImgLabel src={weightIcon} alt="" />
                </DivLabel>
            </AsideLabel>
        </div> 
    );
};

const AsideLabel = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #020203;
    width: 117px;
    position: fixed;
    z-index: 500;
    height: 100%;
    top: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
    @media (max-width: 1380px) {
        height: 100px;
        width: 100%;
        top: unset;
        bottom: 0;
      }
`
const DivLabel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    @media (max-width: 1380px) {
        flex-direction: row;
        column-gap: 20px;
      }
`
const ImgLabel = styled.img`
    width: 64px;
    height: 64px;
    @media (max-width: 1380px) {
        width: 50px;
        height: 50px;
      }
`

export default Footer;