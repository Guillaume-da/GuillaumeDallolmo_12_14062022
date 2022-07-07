import React from 'react';
import caloriesIcon from "../../assets/calories-icon.png";
import proteinIcon from "../../assets/protein-icon.png";
import carbsIcon from "../../assets/carbs-icon.png";
import fatIcon from "../../assets/fat-icon.png";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Allows to show calories, protein, carbohydrate, lipid
 *
 * @param {number} count - number of calories, proteins, carbohydrate and lipid
 *
 * @return jsx
 * @author Guillaume
 * @version 1.0
 * 
 */
const Counter = (count) => {
  if (count.index === 0) {
    return (
      <ItemDivLabel className="main__sidebar-item">
        <ImgLabel src={caloriesIcon} alt="Calories" />
        <TextDivLabel>
          <span>{count.count.toLocaleString('en-US')}kCal</span>
          <SpanLabel>calories</SpanLabel>
        </TextDivLabel>
      </ItemDivLabel>
    );
  } else if (count.index === 1) {
    return (
      <ItemDivLabel className="main__sidebar-item">
        <ImgLabel src={proteinIcon} alt="Calories" />
        <TextDivLabel>
          <span>{count.count.toLocaleString('en-US')}g</span>
          <SpanLabel>Proteines</SpanLabel>
        </TextDivLabel>
      </ItemDivLabel>
    );
  } else if (count.index === 2) {
    return (
      <ItemDivLabel className="main__sidebar-item">
        <ImgLabel src={carbsIcon} alt="Calories" />
        <TextDivLabel>
          <span>{count.count.toLocaleString('en-US')}g</span>
          <SpanLabel>Glucides</SpanLabel>
        </TextDivLabel>
      </ItemDivLabel>
    );
  } else if (count.index === 3) {
    return (
      <ItemDivLabel className="main__sidebar-item">
        <ImgLabel src={fatIcon} alt="Calories" />
        <TextDivLabel>
          <span>{count.count.toLocaleString('en-US')}g</span>
          <SpanLabel>Lipides</SpanLabel>
        </TextDivLabel>
      </ItemDivLabel>
    );
  }
};
Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

const ItemDivLabel = styled.div`
  background: #fbfbfb;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  display: flex;
  column-gap: 24px;
  opacity: 0;
  padding: 32px 51px 32px 32px;
  animation: scale-anim 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
  @for $i from 1 through 14 {
    .main__flex-container-sidebar > .main__sidebar-item:nth-child(#{$i}) {
      animation-delay: #{$i * 0.15}s;
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
`;

export default Counter
