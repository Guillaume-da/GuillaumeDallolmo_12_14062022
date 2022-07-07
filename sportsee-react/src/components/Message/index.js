import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Allows to show Message component
 *
 * @param {string} userName - name of user
 *
 * @return jsx
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
  color: #ff0101;
  line-height: 24px;
  margin-left: 10px;
  @media (max-width: 980px) {
    font-size: 38px;
  }
`;
const MessageLabel = styled.p`
  margin-top: 48px;
  margin-left: 0;
  @media (max-width: 1380px) {
    margin-left: 40px;
    margin-right: 40px;
  }
`;

export default Message;
