import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader'
import Message from '../components/Message'
import Sessions from '../components/Sessions'
import Score from '../components/Score'
import GeneralInformations from '../components/GeneralInformations'
import Activity from '../components/Activity'
import { getUserInfo } from '../services/Api';
import styled from 'styled-components'
import Performance from '../components/Performance'
// import useFetch from '../hooks/useFetch'

const MainDivLabel = styled.div`
    padding: 145px 70px 72px 210px;
    height: 100%;
    width: auto;
    @media (min-width: 1024px) {
      padding: 159px 34px 88px 160px;
    }
    @media (min-width: 1380px) {
      padding: 159px 90px 88px 224px;
    }
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
`
const FlexContainer = styled.div`
    display: flex;
    margin: 77px 0 30px 0;
    justify-content: space-between;
    padding-bottom: 90px;
    flex-direction: column-reverse;
    @media (min-width: 1024px) {
      flex-direction: column-reverse;
      row-gap: 45px;
    }
    @media (min-width: 1380px) {
      flex-direction: row;
    }
`

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    if(loading) return <Loader />
       
    if(data) {
      console.log('data',data)
        const name = data.data.userInfos.firstName
        const calories = data.data.keyData.calorieCount
        const proteins = data.data.keyData.proteinCount
        const carbohydrate = data.data.keyData.carbohydrateCount
        const lipid = data.data.keyData.lipidCount
        const score = data.data.todayScore || data.data.score
        
        return (
            <MainDivLabel>
                <Message userName={name}/>
                <FlexContainer>
                  <div>
                    <Activity userId={Number(id)} />
                    <Container>
                      <Sessions userId={Number(id)}/>
                      <Performance userId={Number(id)}/>
                      <Score scoreValue={score}/>
                    </Container>
                  </div>
                  <GeneralInformations
                  caloriesValue={calories} 
                  proteinValue={proteins} 
                  carbohydrateValue={carbohydrate} 
                  lipidValue={lipid} 
                  />
                </FlexContainer>
            </MainDivLabel>
        );
    }    
}

export default Dashboard;