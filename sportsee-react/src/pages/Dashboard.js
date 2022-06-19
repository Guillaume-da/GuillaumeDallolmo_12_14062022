import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader'
import Message from '../components/Message'
import ScoreContainer from '../components/ScoreContainer'
import Activity from '../components/Activity'
import { getUserInfo } from '../services/Api';

const Dashboard = () => {
    const slug = useParams();
    const id = slug.id

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUserData = async () => {
            console.log(loading)
            try {
              const userData = await getUserInfo(id)
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
        const name = data.data.userInfos.firstName
        const calories = data.data.keyData.calorieCount
        const proteins = data.data.keyData.proteinCount
        const carbohydrate = data.data.keyData.carbohydrateCount
        const lipid = data.data.keyData.lipidCount

        return (
            <main className="main">
                <Message userName={name}/>
                <div className="main__flex-container">
                    <Activity userId={id}/>
                    <ScoreContainer 
                    caloriesValue={calories} 
                    proteinValue={proteins} 
                    arbohydrateValue={carbohydrate} 
                    lipidValue={lipid} 
                    />
                </div>
                
            </main>
        );
    }
        
}

export default Dashboard;