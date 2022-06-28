import styled from 'styled-components'

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

const Dashboard = () => {
    return (
        <MainDivLabel>
            <p>Homepage</p>
        </MainDivLabel>
    );
};


export default Dashboard;