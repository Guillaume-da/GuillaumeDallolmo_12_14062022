import caloriesIcon from '../../assets/calories-icon.png'
import proteinIcon from '../../assets/protein-icon.png'
import carbsIcon from '../../assets/carbs-icon.png'
import fatIcon from '../../assets/fat-icon.png'
import PropTypes from 'prop-types'



const GeneralInformations = (props) => {
    const calories = props.caloriesValue
    const proteins = props.proteinValue
    const carbohydrate = props.carbohydrateValue
    const lipid = props.lipidValue
    
    return (
        <div className="main__flex-container-sidebar">
            <div className="main__sidebar-item">
                <img src={caloriesIcon} alt="" className="main__sidebar-img" />
                <div className="main__sidebar-item-text">
                    <span>{calories}Cal</span>
                    <span className="main__sidebar-item-unity-text">calories</span>
                </div>
            </div>
            <div className="main__sidebar-item">
                <img src={proteinIcon} alt="" className="main__sidebar-img" />
                <div className="main__sidebar-item-text">
                    <span>{proteins}g</span>
                    <span className="main__sidebar-item-unity-text">Proteines</span>
                </div>
            </div>
            <div className="main__sidebar-item">
                <img src={carbsIcon} alt="" className="main__sidebar-img" />
                <div className="main__sidebar-item-text">
                    <span>{carbohydrate}g</span>
                    <span className="main__sidebar-item-unity-text">glucides</span>
                </div>
             </div>
            <div className="main__sidebar-item">
                <img src={fatIcon} alt="" className="main__sidebar-img" />
                <div className="main__sidebar-item-text">
                    <span>{lipid}g</span>
                    <span className="main__sidebar-item-unity-text">lipides</span>
                </div>
            </div>
        </div>
    )
}
GeneralInformations.defaultProps = {
    calories: 0,
    proteins: 0,
    carbohydrate: 0,
    lipid: 0
}

GeneralInformations.propTypes = {
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    carbohydrate: PropTypes.number.isRequired,
    lipid: PropTypes.number.isRequired
}

export default GeneralInformations