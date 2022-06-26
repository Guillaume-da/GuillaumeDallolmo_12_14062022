import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import React, { useState, useEffect } from 'react'
import Loader from '../Loader'
import { getUserPerformance } from '../../services/Api.js'
import PropTypes from 'prop-types'
import './performance.scss'
// import useFetch from '../../hooks/useFetch'

const Performance = (userId) => {
    // const id = props.userId

    // const { loading, data } = useFetch(getUserPerformance(id))
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUserData = async () => {
            try {
              const userData = await getUserPerformance(userId.userId)
              console.log('userData',userData)
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
    const datas = [...data.data.data].reverse()
    datas.map((item) => {
      if(item.kind === 1) {
        item.kind = "Cardio"
      } else if (item.kind === 2) {
        item.kind = "Energie"
      } else if (item.kind === 3) {
        item.kind = "Endurance"
      } else if (item.kind === 4) {
        item.kind = "Force"
      } else if (item.kind === 5) {
        item.kind = "Vitesse"
      } else if (item.kind === 6) {
        item.kind = "Intensité"
      }
      return datas
    })
    
    return (
        <div className="radar">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart 
                cx="50%" 
                cy="50%" 
                outerRadius="80%" 
                data={datas} 
                margin={{top: 20, bottom: 20, left: 15, right: 15}}
                >
                    <PolarGrid stroke="#fff"/>
                    <PolarAngleAxis 
                    dataKey="kind" 
                    stroke="#FFF"
                    tickLine={false}
                    // transform: scale(1.045);
                    // transform-origin: 146px 59px;
                    style={{ fontSize: '12px' }}
                    // style={{ transform: 'scale(1.045)', transformOrigin: '146px 59px'}}
                    />
                    {/* <Tooltip /> */}
                    <Radar 
                    // name="Mike" 
                    dataKey="value" 
                    stroke="#FF0101" 
                    fill="#FF0101" 
                    fillOpacity={0.7} 
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
    
}

Performance.propTypes = {
  userId: PropTypes.string.isRequired
}

export default Performance