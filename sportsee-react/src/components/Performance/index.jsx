import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Tooltip, ResponsiveContainer } from 'recharts'
import React, { useState, useEffect } from 'react'
import Loader from '../Loader'
import { getUserPerformance } from '../../services/Api.js'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './performance.scss'
// import useFetch from '../../hooks/useFetch'

const RadarDivLabel = styled.div`
    border-radius: 5px;
    width: 258px;
    height: 263px;
    background: #282D30;
    display: inline-block;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
`

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
        <RadarDivLabel >
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
    )
}

Performance.propTypes = {
  userId: PropTypes.string.isRequired
}

export default Performance