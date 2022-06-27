import React, { useState, useEffect } from 'react';
import Loader from '../Loader'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getUserActivity } from '../../services/Api.js';
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import useFetch from '../../hooks/useFetch'
// import './activity.scss'

const ContainerDivLabel = styled.div`
    width: auto;
    height: 260px;
    background: $grey-color;
    padding: 26px 26px 26px 32px;
    margin-bottom: 28px;
    animation: scale-anim 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    position: relative;
    top: 0;
    
    @media (min-width: 1380px) {
      margin-bottom: 28px;
      width: 57vw;
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
`
const HeaderDivLabel = styled.div`
    display: flex;
    font-size: 15px;
    justify-content: space-between;
    margin-bottom: 45px;
`
const LegendDivLabel = styled.div`
    color: #74798C;
    column-gap: 32px;
    display: flex;
`
const HeaderContainerDivLabel = styled.div`
    display: flex;
    column-gap: 12px;
    align-items: center;
`
const GreyCircle = styled.div`
    background: #282D30;
    border-radius: 50%;
    width: 8px;
    height: 8px;
`
const RedCircle = styled.div`
    background: #E60000;
    border-radius: 50%;
    width: 8px;
    height: 8px;
`
const TooltipContainer = styled.div`
    background: #E60000;
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
`

const Activity = (userId) => {
    // const loading = props.loadingValue
    // const data = props.dataValue

    // const { loading, data } = useFetch(getUserActivity(id))
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function CustomTooltip({ payload, label, active }) {
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

    useEffect(() => {
        const getUserData = async () => {
            try {
              const userData = await getUserActivity(userId.userId)
              setData(userData)
            } catch (err) {
              setError(true)
              console.log(error)
            } finally {
              setLoading(false)
              console.log(loading)
            }
          }
          getUserData()
    }, [error, loading, userId.userId]);

    if(loading) {
        return <Loader />
    }
    if(data) {
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
                <ResponsiveContainer width="100%" height="80%" >
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
                    domain={['minData', 'maxData']} 
                    tickMargin={15}
                    tickLine={false}
                    padding={{ left: -40, right: -40 }}
                    axisLine={{ stroke: '#DEDEDE' }}
                    tick={{ fill: '#9B9EAC', fontSize: '14px' }}
                    tickFormatter={(number) => number + 1}
                    />
                    <YAxis 
                    yAxisId="kilogram"
                    dataKey="kilogram"
                    orientation="right" 
                    domain={["dataMin-2", "dataMax+1"]}
                    tickCount="3" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9B9EAC', fontSize: '14px' }}
                    style={{ marginLeft: '20px' }}
                    dx={45}
                    scale="auto"
                    />
                    <YAxis
                    yAxisId="calories"
                    dataKey="calories"
                    hide={true}
                    />
                    <Tooltip 
                    position={{ y: -25}} 
                    content={<CustomTooltip />} 
                    cursor={{background: '#C4C4C4', opacity: 0.5 }} 
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
        )
    }  
}

Activity.propTypes = {
  userId: PropTypes.string.isRequired
}

export default Activity