import React from 'react';
import Counter from '../Counter';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Allows to show calories, protein, carbohydrate, lipid
 *
 * @param {number} caloriesValue - number of calories
 * @param {number} proteinValue - number of protein
 * @param {number} carbohydrateValue - number of carbohydrate
 * @param {number} lipidValue - number of lipid
 *
 * @return jsx
 * @author Guillaume
 * @version 1.0
 */
const GeneralInformations = (
  values
) => {
  
  // const values = [caloriesValue, proteinValue, carbohydrateValue, lipidValue];
  console.log(values.values.calories)
  // console.log('proteins',proteins)
  return (
    <ContainerDivLabel className="main__flex-container-sidebar">
      if(value.values.calories !== undefined){
        <Counter
          count={values.values.calories}
        />
      }
      {/* {values?.map((value, index) => (
        <Counter
          count={value}
          index={index}
          key={`${value}-${index}`}
        />
      ))} */}
    </ContainerDivLabel>
  );
};

// GeneralInformations.propTypes = {
//   caloriesValue: PropTypes.number.isRequired,
//   proteinValue: PropTypes.number.isRequired,
//   carbohydrateValue: PropTypes.number.isRequired,
//   lipidValue: PropTypes.number.isRequired
// };

const ContainerDivLabel = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1080px) {
    flex-direction: column;
  }
  @media (max-width: 1380px) {
    flex-wrap: wrap;
    row-gap: 20px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (max-width: 885px) {
    justify-content: space-around;
  }
`;

export default GeneralInformations;
