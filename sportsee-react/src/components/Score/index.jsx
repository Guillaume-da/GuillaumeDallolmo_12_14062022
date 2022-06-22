import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'
import './score.scss'

const Score = (scoreValue)=> {
    console.log('scoreValue',scoreValue)
    const formatedData = [
        { name: "score", value: scoreValue.scoreValue, stroke: "#FF0000"},
        { name: "score", value: 1 - scoreValue.scoreValue, stroke: 'transparent' }
    ]
    const percentScore = scoreValue.scoreValue * 100
   
    return (
        <div className="score">
            <h2 className="score__title">Score</h2>
            <div className="score__background">
                <div className="score__percent-score">{percentScore}%</div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                    data={formatedData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="60%"
                    fill="#FF0000"
                    startAngle={90}
                    endAngle={470}
                    strokeWidth={10}
                    radius={[50, 50, 0, 0]}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

Score.propTypes = {
    scoreValue: PropTypes.number.isRequired
}

export default Score