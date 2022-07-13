import React from 'react';
import yogaIcon from '../../assets/yoga-icon.png';
import swimmingIcon from '../../assets/swimming-icon.png';
import bikeIcon from '../../assets/bike-icon.png';
import weightIcon from '../../assets/weight-icon.png';
import styled from 'styled-components';

/**
 * Allows to show Footer
 *
 * @return Footer containg icons and a copyright message
 * @author Guillaume
 * @version 1.0
 * 
 */
const Footer = () => {
  const icons = [
    yogaIcon,
    swimmingIcon,
    bikeIcon,
    weightIcon
  ]
  return (
    <div>
      <AsideLabel>
        <DivLabel>
          {icons.map((icon, index) => (
            <ImgLabel src={`${icon}`} alt="" key={`${icon}-${index}`} />
          ))}
        </DivLabel>
      </AsideLabel>
      <SpanLabel>Copyright, SportSee 2020</SpanLabel>
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
  @media (max-width: 880px) {
    height: 115px;
  }
`;
const DivLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  @media (max-width: 1380px) {
    flex-direction: row;
    column-gap: 20px;
  }
`;
const ImgLabel = styled.img`
  width: 64px;
  height: 64px;
  @media (max-width: 1380px) {
    width: 50px;
    height: 50px;
  }
`;
const SpanLabel = styled.span`
  color: white;
  font-size: 12px;
  font-weight: 300;
  transform: rotate(-90deg);
  z-index: 700;
  position: fixed;
  left: -15px;
  bottom: 120px;
  @media (max-width: 1380px) {
    transform: rotate(0);
    color: white;
    bottom: 40px;
    right: 80px;
    left: unset;
    z-index: 700;
  }
  @media (max-width: 880px) {
    left: 50%;
    transform: translateX(-50%);
    right: unset;
    bottom: 10px;
  }
`

export default Footer;
