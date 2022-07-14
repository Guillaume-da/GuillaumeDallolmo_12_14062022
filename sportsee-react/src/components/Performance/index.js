import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import Loader from '../Loader';
import { getUserPerformance } from '../../services/Api.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';

/**
* Allows to show Performance component
*
* @param {number} userId - number ID of the user, coming from getUserInfo() which is called on dashboard page loading
*
* @return RadarChart made with Recharts showing cardio, energy, endurance, strength, speed, intensity values. Tha datas are coming from getUserPerformance()
* @author Guillaume
* @version 1.0
*/
const Performance = (userId) => {
  const { loading, data } = useFetch(getUserPerformance(userId.userId));

  if (loading) return <Loader />;
  
  /**
  * Allows to format datas
  *
  * @param {object} data
  *
  * @return datas
  */
  // eslint-disable-next-line no-unsafe-optional-chaining
  const datas = [...data?.data.data].reverse();
  datas.map((data) => {
    if (data.kind === 1) {
      data.kind = 'Cardio';
    } else if (data.kind === 2) {
      data.kind = 'Energie';
    } else if (data.kind === 3) {
      data.kind = 'Endurance';
    } else if (data.kind === 4) {
      data.kind = 'Force';
    } else if (data.kind === 5) {
      data.kind = 'Vitesse';
    } else if (data.kind === 6) {
      data.kind = 'Intensité';
    }
    return datas;
  });
  
  return (
    <RadarDivLabel>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={datas}
          margin={{ top: 20, bottom: 20, left: 15, right: 15 }}
        >
          <PolarGrid stroke="#fff" />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#FFF"
            tickLine={false}
            style={{ fontSize: '12px' }}
          />
          <Tooltip />
          <Radar
            name="Valeur"
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </RadarDivLabel>
  );
};

Performance.propTypes = {
  userId: PropTypes.number.isRequired,
};

const RadarDivLabel = styled.div`
  border-radius: 5px;
  width: 258px;
  height: 263px;
  background: #282d30;
  display: inline-block;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  animation: scale-anim 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 0.75s;
  @keyframes scale-anim {
    0% {
      transform: scale(0.85);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @media (max-width: 580px) {
    width: 100%;
    height: 350px;
  }
  .recharts-polar-angle-axis-tick tspan {
     alignment-baseline: central;
  }
`;

export default Performance;
