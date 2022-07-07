import React from 'react';
import styled from 'styled-components';

const Dashboard = () => {
  return (
    <MainDivLabel>
      <p>Homepage</p>
    </MainDivLabel>
  );
};

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
`;

export default Dashboard;
