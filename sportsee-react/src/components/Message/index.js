import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Allows to show Message component
 *
 * @param {string} userName - name of user
 *
 * @return Div containing a Welcome message with the name of the user. The name is fetched from getUserInfo()
 * @author Guillaume
 * @version 1.0
 */
const Message = (userName) => {
  return (
    <div>
      <SpanLabel>Bonjour</SpanLabel>{' '}
      <RedSpanLabel>{userName.userName}</RedSpanLabel>
      <MessageLabel>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </MessageLabel>
    </div>
  );
};

Message.propTypes = {
  userName: PropTypes.string.isRequired,
};

const SpanLabel = styled.span`
  font-size: 48px;
  font-weight: 500;
  line-height: 24px;
  margin-left: 0;
  @media (max-width: 1380px) {
    margin-left: 40px;
  }
  @media (max-width: 980px) {
    font-size: 38px;
  }
`;
const RedSpanLabel = styled.span`
  font-size: 48px;
  font-weight: 500;
  color: #ff0101;
  line-height: 24px;
  margin-left: 10px;
  @media (max-width: 980px) {
    font-size: 38px;
  }
`;
const MessageLabel = styled.p`
  margin-top: 38px;
  margin-left: 0;
  font-weight: 400;
  @media (max-width: 1380px) {
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 48px;
  }
`;

export default Message;
