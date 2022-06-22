import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts'
import React, { useState, useEffect } from 'react'
import Loader from '../Loader'
import { getUserPerformance } from '../../services/Api.js'
// import useFetch from '../../hooks/useFetch'
import './performance.scss'

const Performance = (props) => {
    const id = props.userId

    // const { loading, data } = useFetch(getUserPerformance(id))
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUserData = async () => {
            try {
              const userData = await getUserPerformance(id)
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
    const datas = data.data.data
    const formatedDatas = datas.map((item) => {
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
    console.log(formatedDatas)
    return (
        <div className="radar">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart 
                cx="50%" 
                cy="50%" 
                outerRadius="80%" 
                data={data.data.data} 
                margin={{top: 30, bottom: 30, left: 5, right: 10}}
                >
                    <PolarGrid  stroke="#fff"/>
                    <PolarAngleAxis 
                    dataKey="kind" 
                    stroke="#FFF"
                    tickLine={false}
                    style={{ fontSize: '10px'}}
                    />
                    <Tooltip />
                    {/* <PolarRadiusAxis angle={30} domain={[0, 150]} /> */}
                    <Radar 
                    name="Mike" 
                    dataKey="value" 
                    stroke="#FF0101" 
                    fill="#FF0101" 
                    fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
    
}

export default Performance