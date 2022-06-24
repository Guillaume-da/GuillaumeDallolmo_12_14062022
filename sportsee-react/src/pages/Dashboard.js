import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader'
import Message from '../components/Message'
import Sessions from '../components/Sessions'
import Score from '../components/Score'
import GeneralInformations from '../components/GeneralInformations'
import Activity from '../components/Activity'
import { getUserInfo } from '../services/Api';
// import { getUserActivity } from '../services/Api';
import Performance from '../components/Performance'
// import useFetch from '../hooks/useFetch'

const Dashboard = () => {
    const slug = useParams();
    const id = slug.id

    // const { loading, data } = useFetch(getUserInfo(id))
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUserData = async () => {
            try {
              const userData = await getUserInfo(id)
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
      console.log('data',data)
        const name = data.data.userInfos.firstName
        const calories = data.data.keyData.calorieCount
        const proteins = data.data.keyData.proteinCount
        const carbohydrate = data.data.keyData.carbohydrateCount
        const lipid = data.data.keyData.lipidCount
        const score = data.data.todayScore || data.data.score
        
        return (
            <main className="main">
                <Message userName={name}/>
                <div className="main__flex-container">
                  <div>
                    <Activity userId={id} />
                    <div className="main__container">
                      <Sessions userId={id}/>
                      <Performance userId={id}/>
                      <Score scoreValue={score}/>
                    </div>
                  </div>
                  <GeneralInformations
                  caloriesValue={calories} 
                  proteinValue={proteins} 
                  carbohydrateValue={carbohydrate} 
                  lipidValue={lipid} 
                  />
                </div>
            </main>
        );
    }    
}

export default Dashboard;