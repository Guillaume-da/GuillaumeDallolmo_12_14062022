import React from 'react';
import Loader from '../Loader';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { getUserActivity } from '../../services/Api.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';


/**
 * Allows to show activity sessions of the user (day, kilogram, calories)
 *
 * @param {number} userId - user ID of the user, coming from getUserInfo() which is called on dashboard page loading
 *
 * @return BarChart Component made with Recharts showing user activity. Datas are coming from getUserActivity(), the XAxis represents month days and the YAxis represents the user weight.
 * @author Guillaume
 * @version 1.0
 * 
 */
const Activity = (userId) => {
  const { loading, data } = useFetch(getUserActivity(userId.userId));

  function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <TooltipContainer>
          <p>{`${payload[0].value}`}kg</p>
          <p>{`${payload[1].value}`}KCal</p>
        </TooltipContainer>
      );
    }
    return null;
  }

  function FormatDate(tickItem) { 
    var options = {/* year: 'numeric',  *//* month: 'long',  */day: 'numeric' };
    const formatedDate = new Date(tickItem)
    return formatedDate.toLocaleDateString('fr-FR', options)
  }

  if (loading) return <Loader />;

  if (data) {
    return (
      <ContainerDivLabel>
        <HeaderDivLabel>
          <h2>Activité quotidienne</h2>
          <LegendDivLabel>
            <HeaderContainerDivLabel>
              <GreyCircle></GreyCircle>
              <span>Poids (kg)</span>
            </HeaderContainerDivLabel>
            <HeaderContainerDivLabel>
              <RedCircle></RedCircle>
              <span>Calories brûlées (kCal)</span>
            </HeaderContainerDivLabel>
          </LegendDivLabel>
        </HeaderDivLabel>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart
            width="100%"
            barGap={8}
            height="75%"
            data={data.data.sessions}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="1"
              style={{ padding: '0', margin: '0' }}
            />
            <XAxis
              // domain={['minData', 'maxData']}
              tickMargin={15}
              tickLine={false}
              padding={{ left: 0, right: 0 }}
              axisLine={{ stroke: '#DEDEDE' }}
              tick={{ fill: '#9B9EAC', fontSize: '14px' }}
              dataKey="day"
              tickFormatter={FormatDate}
            />
            <YAxis
              yAxisId="kilogram"
              dataKey="kilogram"
              orientation="right"
              domain={['dataMin-2', 'dataMax+1']}
              tickCount="3"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9B9EAC', fontSize: '14px' }}
              style={{ marginLeft: '20px' }}
              dx={45}
              scale="auto"
            />
            <YAxis yAxisId="calories" dataKey="calories" hide={true} />
            <Tooltip
              position={{ y: -25 }}
              content={<CustomTooltip />}
              cursor={{ background: '#C4C4C4', opacity: 0.5 }}
            />
            <Bar
              dataKey="kilogram"
              yAxisId="kilogram"
              fill="#282D30"
              barSize={7.5}
              radius={[50, 50, 0, 0]}
            />
            <Bar
              dataKey="calories"
              yAxisId="calories"
              fill="#E60000"
              barSize={7.5}
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </ContainerDivLabel>
    );
  }
};

Activity.propTypes = {
  userId: PropTypes.number.isRequired,
  payload: PropTypes.object,
  active: PropTypes.bool
};

const ContainerDivLabel = styled.div`
  width: auto;
  height: 320px;
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  padding: 26px 26px 26px 32px;
  margin-bottom: 28px;
  animation: scale-anim 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  position: relative;
  top: 0;
  @media (max-width: 1080px) {
    top: 50px;
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (min-width: 1081px) and (max-width: 1380px) {
    top: 0;
    margin-left: 20px;
    margin-right: 20px;
    width: 72vw;
  }
  @media (min-width: 1380px) {
    margin-bottom: 28px;
    padding: 26px 26px 46px 32px;
    width: 59vw;
  }
  @media (min-width: 1550px) {
    width: 64vw;
  }

  @keyframes scale-anim {
    0% {
      transform: scale(1);
      opacity: 0.25;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.75;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
const HeaderDivLabel = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: space-between;
  margin-bottom: 45px;
  h2 {
    font-size: 15px;
    font-weight: 500;
  }
`;
const LegendDivLabel = styled.div`
  color: #74798c;
  column-gap: 32px;
  display: flex;
`;
const HeaderContainerDivLabel = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`;
const GreyCircle = styled.div`
  background: #282d30;
  border-radius: 50%;
  width: 8px;
  height: 8px;
`;
const RedCircle = styled.div`
  background: #e60000;
  border-radius: 50%;
  width: 8px;
  height: 8px;
`;
const TooltipContainer = styled.div`
  background: #e60000;
  color: white;
  font-size: 7px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 0 10px;
  margin-left: 4vw;
  margin-right: 4vw;
`;

export default Activity;
