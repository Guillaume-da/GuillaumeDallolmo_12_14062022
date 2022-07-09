import React from 'react';
import caloriesIcon from '../../assets/calories-icon.png';
import proteinIcon from '../../assets/protein-icon.png';
import carbsIcon from '../../assets/carbs-icon.png';
import fatIcon from '../../assets/fat-icon.png';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Allows to show calories, protein, carbohydrate, lipid
 *
 * @param {number} value - number of calories, proteins, carbohydrate or lipid
 *
 * @return jsx
 * @author Guillaume
 * @version 1.0
 * 
 */
const Counter = (value) => {
  if (value.idValue === 'calories') {
    return (
      <ItemDivLabel className="main__sidebar-item">
        <ImgLabel src={caloriesIcon} alt="Calories" />
        <TextDivLabel>
          <CountSpanLabel>{value.value.toLocaleString('en-US')}kCal</CountSpanLabel>
          <SpanLabel>calories</SpanLabel>
        </TextDivLabel>
      </ItemDivLabel>
    );
  } else if (value.idValue === 'proteines') {
    return (
      <ItemDivLabel className="main__sidebar-item">
        <ImgLabel src={proteinIcon} alt="Calories" />
        <TextDivLabel>
          <CountSpanLabel>{value.value.toLocaleString('en-US')}g</CountSpanLabel>
          <SpanLabel>Proteines</SpanLabel>
        </TextDivLabel>
      </ItemDivLabel>
    );
  } else if (value.idValue === 'glucides') {
    return (
      <ItemDivLabel className="main__sidebar-item">
        <ImgLabel src={carbsIcon} alt="Calories" />
        <TextDivLabel>
          <CountSpanLabel>{value.value.toLocaleString('en-US')}g</CountSpanLabel>
          <SpanLabel>Glucides</SpanLabel>
        </TextDivLabel>
      </ItemDivLabel>
    );
  } else if (value.idValue === 'lipides') {
    return (
      <ItemDivLabel className="main__sidebar-item">
        <ImgLabel src={fatIcon} alt="Calories" />
        <TextDivLabel>
          <CountSpanLabel>{value.value.toLocaleString('en-US')}g</CountSpanLabel>
          <SpanLabel>Lipides</SpanLabel>
        </TextDivLabel>
      </ItemDivLabel>
    );
  }
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};

const ItemDivLabel = styled.div`
  background: #fbfbfb;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  display: flex;
  column-gap: 24px;
  opacity: 0;
  padding: 32px 51px 32px 32px;
  animation: scale-anim 1.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes scale-anim {
    0% {
      transform: scale(1.25);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @media (min-width: 1024px) {
    padding: 24px;
  }
  @media (min-width: 1380px) {
    padding: 32px;
  }
  @media (max-width: 885px) {
    width: 35%;
    padding: 25px;
  }
  @media (max-width: 685px) {
    width: 100%;
  }
`;
const ImgLabel = styled.img`
  width: 60px;
  height: 60px;
`;
const TextDivLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 5px;
`;
const SpanLabel = styled.span`
  color: #74798c;
  font-size: 14px;
  font-weight: 500;
`;
const CountSpanLabel = styled.span`
  font-weight: 700;
`

export default Counter
