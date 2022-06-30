import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SpanLabel = styled.span`
    font-size: 48px;
    line-height: 24px;
    margin-left: 0;
    @media (max-width: 1380px) {
        margin-left: 40px;
    }
`
const RedSpanLabel = styled.span`
    font-size: 48px;
    color: #FF0101;
    line-height: 24px;
`
const MessageLabel = styled.p`
    margin-top: 48px;
    margin-left: 0;
    @media (max-width: 1380px) {
        margin-left: 40px;
    }
`

const Message = (userName) => {
    
    return (
        <div>
            <SpanLabel>Bonjour</SpanLabel> <RedSpanLabel>{userName.userName}</RedSpanLabel>
            <MessageLabel>Félicitation ! Vous avez explosé vos objectifs hier 👏</MessageLabel>
        </div>
    );
};


Message.propTypes = {
    userName: PropTypes.string.isRequired
}


export default Message;