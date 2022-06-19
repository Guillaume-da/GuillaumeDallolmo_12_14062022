import React from 'react'
import PropTypes from 'prop-types'

import './message.scss'
// import PropTypes from 'prop-types';

const Message = (props) => {
    const name = props.userName
    return (
        <div>
            <span className="main__title">Bonjour</span> <span className="main__title--red">{name}</span>
            <p className="main__subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

Message.defaultProps = {
    name: ''
}
Message.propTypes = {
    name: PropTypes.string.isRequired
}


export default Message;