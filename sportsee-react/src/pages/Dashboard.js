import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Sessions from '../components/Sessions';
import Error from '../components/Error';
import Score from '../components/Score';
import Counter from '../components/Counter';
import Activity from '../components/Activity';
import { getUserInfo } from '../services/Api';
import styled from 'styled-components';
import Performance from '../components/Performance';

/**
 * Allows to show Dashboard page.
 *
 * @return Dashboard page. Contains Message, Sessions, Score, Counter, Activity and Performance components. getUserInfo() is called on loading page and allows to fetch datas in each component.
 * @author Guillaume
 * @version 1.0
 * 
 */
const Dashboard = () => {
  const slug = useParams();
  const id = slug.id;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await getUserInfo(id);
        setData(userData);
      } catch (err) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loader />;

  if (data?.data) {
    const name = data.data.userInfos.firstName;
    const calories = data.data.keyData.calorieCount;
    const proteins = data.data.keyData.proteinCount;
    const carbohydrate = data.data.keyData.carbohydrateCount;
    const lipid = data.data.keyData.lipidCount;
    const score = data.data.todayScore || data.data.score;

    return (
      <MainDivLabel>
        <Message userName={name} />
        <FlexContainer>
          <div>
            <Activity userId={Number(id)} />
            <Container className="anim-container">
              <Sessions userId={Number(id)} className="anim-item" />
              <Performance userId={Number(id)} className="anim-item" />
              <Score scoreValue={score} className="anim-item" />
            </Container>
          </div>
          <ContainerDivLabel className="main__flex-container-sidebar">
            <Counter value={calories} idValue="calories" />
            <Counter value={proteins} idValue="proteines" />
            <Counter value={carbohydrate} idValue="glucides" />
            <Counter value={lipid} idValue="lipides" />
          </ContainerDivLabel>
        </FlexContainer>
      </MainDivLabel>
    );
  } else {
    return <Error />;
  }
};

const ContainerDivLabel = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1080px) {
    flex-direction: column;
  }
  @media (max-width: 1380px) {
    flex-wrap: wrap;
    row-gap: 20px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (max-width: 885px) {
    justify-content: space-around;
  }
`;
const MainDivLabel = styled.div`
  padding: 145px 70px 72px 210px;
  height: 100%;
  width: auto;
  @media (max-width: 1024px) {
    padding: 159px 34px 88px 160px;
    width: 100%;
  }
  @media (min-width: 1024px) {
    padding: 159px 34px 88px 160px;
  }
  @media (min-width: 1380px) {
    padding: 159px 90px 0 224px;
  }
  @media (max-width: 1380px) {
    padding: 150px 0px 60px 0px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1380px) {
    margin-top: 100px;
  }
  @media (max-width: 1380px) {
    flex-wrap: wrap;
    row-gap: 50px;
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (max-width: 1080px) {
    justify-content: space-evenly;
  }
  @media (max-width: 680px) {
    padding: 0;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  margin: 77px 0 30px 0;
  justify-content: space-between;
  padding-bottom: 90px;
  flex-direction: column-reverse;
  @media (min-width: 1080px) {
    flex-direction: column-reverse;
    row-gap: 45px;
    margin: 77px 0 0 0;
    flex-direction: row;
  }
  @media (min-width: 1380px) {
    margin: 57px 0 0 0;
    flex-direction: row;
  }
`;

export default Dashboard;
