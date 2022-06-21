import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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
              console.log(loading)
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
                <ResponsiveContainer width="100%" height="90%" >
                    <LineChart width={300} height={80} data={data.data.sessions}>
                        <Tooltip />
                        <Line 
                        type="natural" 
                        dataKey="sessionLength" 
                        stroke="#FFFFFF" 
                        strokeWidth={2} 
                        
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default Sessions