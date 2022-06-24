import React from 'react'
import PropTypes from 'prop-types'
import './message.scss'

const Message = (userName) => {
    
    return (
        <div>
            <span className="main__title">Bonjour</span> <span className="main__title--red">{userName.userName}</span>
            <p className="main__subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};


Message.propTypes = {
    userName: PropTypes.string.isRequired
}


export default Message;