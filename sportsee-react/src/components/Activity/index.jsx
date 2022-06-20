import React, { useState, useEffect } from 'react';
import Loader from '../Loader'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getUserActivity } from '../../services/Api.js';
import './activity.scss'

const Activity = (props) => {
    const id = props.userId
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUserData = async () => {
            try {
              const userData = await getUserActivity(id)
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
        return (
            <div className="activity">
                <div className="activity__header">
                    <h2>Activité quotidienne</h2>
                    <div className="activity__header-legend">
                        <div className="activity__header-legend-container">
                            <div className="activity__header-grey-circle"></div>
                            <span>Poids (kg)</span>
                        </div>
                        <div className="activity__header-legend-container">
                            <div className="activity__header-red-circle"></div>
                            <span>Calories brûlées (kCal)</span>
                        </div>
                    </div>
                                
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    width="100%"
                    barGap={8}
                    height="75%"
                    data={data.data.sessions}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
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
                    scale="point"
                    padding={{ left: 12, right: 12 }}
                    axisLine={{ stroke: '#DEDEDE' }}
                    tick={{ fill: '#9B9EAC', fontSize: '14px' }}
                    tickFormatter={(number) => number + 1}
                    
                    />
                    <YAxis 
                    orientation="right" 
                    tickCount="3" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9B9EAC', fontSize: '14px' }}
                    style={{ marginLeft: '20px' }}
                    dx={45}
                    />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar 
                    dataKey="kilogram" 
                    fill="#282D30" 
                    barSize={7.5} 
                    radius={[50, 50, 0, 0]}
                    />
                    <Bar 
                    dataKey="calories" 
                    fill="#E60000" 
                    barSize={7.5} 
                    radius={[50, 50, 0, 0]}
                    />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
    
}

export default Activity