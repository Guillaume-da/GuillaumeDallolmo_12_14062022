import caloriesIcon from '../../assets/calories-icon.png'
import proteinIcon from '../../assets/protein-icon.png'
import carbsIcon from '../../assets/carbs-icon.png'
import fatIcon from '../../assets/fat-icon.png'
import PropTypes from 'prop-types'

const GeneralInformations = ({ caloriesValue, proteinValue, carbohydrateValue, lipidValue }) => {

        return (
            <div className="main__flex-container-sidebar">
                <div className="main__sidebar-item">
                    <img src={caloriesIcon} alt="" className="main__sidebar-img" />
                    <div className="main__sidebar-item-text">
                        <span>{caloriesValue}Cal</span>
                        <span className="main__sidebar-item-unity-text">calories</span>
                    </div>
                </div>
                <div className="main__sidebar-item">
                    <img src={proteinIcon} alt="" className="main__sidebar-img" />
                    <div className="main__sidebar-item-text">
                        <span>{proteinValue}g</span>
                        <span className="main__sidebar-item-unity-text">Proteines</span>
                    </div>
                </div>
                <div className="main__sidebar-item">
                    <img src={carbsIcon} alt="" className="main__sidebar-img" />
                    <div className="main__sidebar-item-text">
                        <span>{carbohydrateValue}g</span>
                        <span className="main__sidebar-item-unity-text">glucides</span>
                    </div>
                 </div>
                <div className="main__sidebar-item">
                    <img src={fatIcon} alt="" className="main__sidebar-img" />
                    <div className="main__sidebar-item-text">
                        <span>{lipidValue}g</span>
                        <span className="main__sidebar-item-unity-text">lipides</span>
                    </div>
                </div>
            </div>
        )
}

GeneralInformations.propTypes = {
    caloriesValue: PropTypes.number.isRequired,
    proteinValue: PropTypes.number.isRequired,
    carbohydrateValue: PropTypes.number.isRequired,
    lipidValue: PropTypes.number.isRequired
}

export default GeneralInformations