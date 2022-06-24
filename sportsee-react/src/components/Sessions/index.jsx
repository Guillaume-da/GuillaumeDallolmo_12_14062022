import React, { useState, useEffect } from 'react';
import { XAxis, Area, AreaChart, Line, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Loader from '../Loader'
import { getUserAverageSessions } from '../../services/Api.js';
import PropTypes from 'prop-types'
import './sessions.scss'

const Sessions = (userId) => {
    // const id = props.userId
    console.log('userId', userId)
    // const { loading, data } = useFetch(getUserAverageSessions(id))
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function CustomTooltip({ payload, label, active }) {
        if (active) {
          return (
            <div className="sessions-custom-tooltip">
              <p className="label">{`${payload[0].value}`} min</p>
            </div>
          );
        }
        return null;
      }

    useEffect(() => {
        const getUserData = async () => {
            try {
              const userData = await getUserAverageSessions(userId.userId)
              setData(userData)
            } catch (err) {
              setError(true)
              console.log(error)
            } finally {
              setLoading(false)
            }
          }
          getUserData()
    }, [error, userId.userId]);

    if(loading) {
        return <Loader />
    }
    if(data) {
        console.log('Sessions',data)
        return (
            <div className="duration">
                <h2 className="duration__title">Durée moyenne des sessions</h2>
                <ResponsiveContainer width="100%" height="100%">
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
                        <Tooltip content={<CustomTooltip />} cursor={false}/>
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
                        activeDot={{ stroke: "#FFFFFF", strokeWidth: 3, r: 3, border: '5px solid rgba(255, 255, 255, 0.198345)' }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        )
    }
}
Sessions.propTypes = {
    userId: PropTypes.string.isRequired
}

export default Sessions