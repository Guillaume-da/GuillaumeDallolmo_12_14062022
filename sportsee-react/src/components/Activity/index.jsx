import React, { useState, useEffect } from 'react';
import Loader from '../Loader'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getUserActivity } from '../../services/Api.js';
// import useFetch from '../../hooks/useFetch'
import './activity.scss'

const Activity = (props) => {
    const id = props.userId
    // const loading = props.loadingValue
    // const data = props.dataValue

    // const { loading, data } = useFetch(getUserActivity(id))
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function CustomTooltip({ payload, label, active }) {
        if (active) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${payload[0].value}`}kg</p>
              <p className="label">{`${payload[1].value}`}KCal</p>
            </div>
          );
        }
        return null;
      }

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
                    // scale={'point'}
                    padding={{ left: 0, right: 0 }}
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
                    <Tooltip position={{ y: -25}} content={<CustomTooltip />} cursor={{background: '#C4C4C4', opacity: 0.5}}/>
                    {/* <Legend /> */}
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
            </div>
        )
    }
    
}

export default Activity