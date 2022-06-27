import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ScoreContainer = styled.div`
    border-radius: 5px;
    width: auto;
    height: 263px;
    background: #FBFBFB;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    display: inline-block;
    position: relative;
    @media (min-width: 1024px) {
        width: 30%;
    }
    @media (min-width: 1380px) {
        width: 258px;
    }
`
const Title = styled.h2`
        font-size: 15px;
        margin-top: 24px;
        margin-left: 30px;
        position: absolute;
`
const Background = styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        background: #FFFFFF;
        height: 60%;
        border-radius: 50%;
`
const PercentScore = styled.div`
        position: absolute;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 26px;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
`
const PercentText = styled.span`
        display: inline-block;
        font-size: 16px;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
        text-align: center;
        line-height: 26px;
        margin-top: 5px;
        color: #74798C;
`

const Score = (scoreValue)=> {
    const formatedData = [
        { name: "score", value: scoreValue.scoreValue, stroke: "#FF0000"},
        { name: "score", value: 1 - scoreValue.scoreValue, stroke: 'transparent' }
    ]
    const percentScore = scoreValue.scoreValue * 100
   
    return (
        <ScoreContainer>
            <Title>Score</Title>
            <Background>
                <PercentScore>{percentScore}% <PercentText>de votre objectif</PercentText></PercentScore>
            </Background>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                    data={formatedData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius="68%"
                    outerRadius="68%"
                    fill="#FF0000"
                    startAngle={90}
                    endAngle={470}
                    strokeWidth={10}
                    radius={[50, 50, 0, 0]}
                    />
                </PieChart>
            </ResponsiveContainer>
        </ScoreContainer>
    )
}

Score.propTypes = {
    scoreValue: PropTypes.number.isRequired
}

export default Score