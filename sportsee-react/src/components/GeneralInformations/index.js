import caloriesIcon from '../../assets/calories-icon.png'
import proteinIcon from '../../assets/protein-icon.png'
import carbsIcon from '../../assets/carbs-icon.png'
import fatIcon from '../../assets/fat-icon.png'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
* Allows to show calories, protein, carbohydrate, lipid
*
* @param {caloriesValue} number - number of calories
* @param {proteinValue} number - number of protein
* @param {carbohydrateValue} number - number of carbohydrate
* @param {lipidValue} number - number of lipid
*
* @return jsx
* @author Guillaume
* @version 1.0
*/

const GeneralInformations = ({ caloriesValue, proteinValue, carbohydrateValue, lipidValue }) => {

        return (
            <ContainerDivLabel className="main__flex-container-sidebar">
                <ItemDivLabel className="main__sidebar-item">
                    <ImgLabel src={caloriesIcon} alt="Calories" />
                    <TextDivLabel>
                        <span>{caloriesValue}Cal</span>
                        <SpanLabel>calories</SpanLabel>
                    </TextDivLabel>
                </ItemDivLabel>
                <ItemDivLabel className="main__sidebar-item">
                    <ImgLabel src={proteinIcon} alt="Protéines" />
                    <TextDivLabel>
                        <span>{proteinValue}g</span>
                        <SpanLabel>Proteines</SpanLabel>
                    </TextDivLabel>
                </ItemDivLabel>
                <ItemDivLabel className="main__sidebar-item">
                    <ImgLabel src={carbsIcon} alt="Glucides" />
                    <TextDivLabel>
                        <span>{carbohydrateValue}g</span>
                        <SpanLabel>glucides</SpanLabel>
                    </TextDivLabel>
                 </ItemDivLabel>
                <ItemDivLabel className="main__sidebar-item">
                    <ImgLabel src={fatIcon} alt="Lipides" />
                    <TextDivLabel>
                        <span>{lipidValue}g</span>
                        <SpanLabel>lipides</SpanLabel>
                    </TextDivLabel>
                </ItemDivLabel>
            </ContainerDivLabel>
        )
}

GeneralInformations.propTypes = {
    caloriesValue: PropTypes.number.isRequired,
    proteinValue: PropTypes.number.isRequired,
    carbohydrateValue: PropTypes.number.isRequired,
    lipidValue: PropTypes.number.isRequired
}

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
        padding-left: 31px;
        padding-right: 31px;
    }
    @media (max-width: 885px) {
        justify-content: space-around;
    }
`
const ItemDivLabel = styled.div`
    background: #FBFBFB;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    display: flex;
    column-gap: 24px;
    opacity: 0;
    padding: 32px 51px 32px 32px;
    animation: scale-anim 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    @keyframes scale-anim {
        0% {
            transform: scale(1.25);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
      }
      @for $i from 1 through 14 {
        .main__flex-container-sidebar > .main__sidebar-item:nth-child(#{$i}) {
            animation-delay: #{$i * 0.15}s;
        }
    }
    
    @media (min-width: 1024px) {
        padding: 28px;
    }
    @media (min-width: 1380px) {
        padding: 32px;
    }
    @media (max-width: 885px) {
        width: 35%;
        padding: 25px;
    }
    @media (max-width: 685px) {
        width: 100%;
    }
`
const ImgLabel = styled.img`
    width: 60px;
    height: 60px;
`
const TextDivLabel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 5px;
`
const SpanLabel = styled.span`
    color: #74798C;
    font-size: 14px;
`

export default GeneralInformations