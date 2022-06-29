// import React, { useState, useEffect } from 'react';
import { XAxis, Area, AreaChart, Line, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Loader from '../Loader'
import { getUserAverageSessions } from '../../services/Api.js';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useFetch from '../../hooks/useFetch'

const Container = styled.div`
    border-radius: 5px;
    width: auto;
    height: 263px;
    background: #FF0000;
    display: inline-block;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    @media (min-width: 1024px) {
      width: 30%;
    }
    @media (min-width: 1380px) {
      width: 258px;
    }
`
const Title = styled.h2`
    color: white;
    font-size: 15px;
    line-height: 24px;
    margin-top: 29px;
    margin-left: 34px;
    opacity: 0.5;
    width: 147px;
    position: absolute;
`
const SessionsCustomTooltip = styled.div`
    background: #FFFFFF;
    color: black;
    font-size: 8px;
    font-weight: 500;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 0 10px;
    margin-left: 0;
    margin-right: 0;
`

const Sessions = (userId) => {
    // const id = props.userId
    // console.log('userId', userId)
    const { loading, data } = useFetch(getUserAverageSessions(userId.userId))
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    function CustomTooltip({ payload, label, active }) {
        if (active) {
          return (
            <SessionsCustomTooltip>
              <p className="label">{`${payload[0].value}`} min</p>
            </SessionsCustomTooltip>
          );
        }
        return null;
      }

    // useEffect(() => {
    //     const getUserData = async () => {
    //         try {
    //           const userData = await getUserAverageSessions(userId.userId)
    //           setData(userData)
    //         } catch (err) {
    //           setError(true)
    //           console.log(error)
    //         } finally {
    //           setLoading(false)
    //         }
    //       }
    //       getUserData()
    // }, [error, userId.userId]);

    if(loading) {
        return <Loader />
    }
    if(data) {
        console.log('Sessions',data)
        return (
            <Container>
                <Title>Durée moyenne des sessions</Title>
                <ResponsiveContainer 
                width="100%" 
                height="100%"
                >
                    <AreaChart
                    outerRadius={90}
                    data={data.data.sessions}
                    margin={{
                        top: 70,
                        left: 0,
                        right: 0,
                        bottom: 30,
                    }}
                    >
                        <XAxis
                            dataKey="day"
                            stroke="#fff"
                            tickLine={false}
                            axisLine={false}
                            interval={0}
                            tick={{ fontSize: '16px' }}
                            style={{ transform: 'scale(0.85)', transformOrigin: '134px 350px', opacity: '0.5'}}
                            tickFormatter={(item) => {
                              const daysInLetters = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
                              return `${daysInLetters[item - 1]}`
                            }}
                        />
                        <YAxis hide={true} domain={["dataMin-10", "dataMax+10"]} />
                        <Tooltip 
                        content={<CustomTooltip />} 
                        cursor={false}
                        />
                        <Line 
                        type="monotone" 
                        dataKey="sessionLength"
                        />
                        <Area
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#fff"
                        strokeWidth="2"
                        fill="#FF0D0D"
                        activeDot={{ width: 8, fill: '#FFFFFF', stroke: "#FFFFFF", strokeWidth: 10, r: 3, strokeOpacity: 0.35, border: '5px solid rgba(255, 255, 255, 0.198345)' }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </Container>
        )
    }
}
Sessions.propTypes = {
    userId: PropTypes.number.isRequired
}

export default Sessions