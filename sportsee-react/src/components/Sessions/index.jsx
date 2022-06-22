import React, { useState, useEffect } from 'react';
import { XAxis, Area, AreaChart, Line, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Loader from '../Loader'
import { getUserAverageSessions } from '../../services/Api.js';
import './sessions.scss'

const Sessions = (props) => {
    const id = props.userId

    // const { loading, data } = useFetch(getUserAverageSessions(id))
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUserData = async () => {
            try {
              const userData = await getUserAverageSessions(id)
              setData(userData)
            } catch (err) {
              setError(true)
              console.log(error)
            } finally {
              setLoading(false)
            }
          }
          getUserData()
    }, [error, id, loading]);

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
                        top: 30,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    >
                        <XAxis
                            dataKey="day"
                            stroke="#fff"
                            tickLine={false}
                            axisLine={false}
                            padding={{ left: 10, right: 10 }}
                        />
                        <YAxis hide={true} domain={["dataMin-10", "dataMax+10"]} />
                        <Tooltip />
                        <Line 
                        type="monotone" 
                        dataKey="sessionLength" 
                        scale="band"
                        />
                        <Area
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#fff"
                        strokeWidth="3"
                        fill="#FF0D0D"
                        activeDot={{ stroke: "#FFFFFF", strokeWidth: 4, r: 4 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default Sessions