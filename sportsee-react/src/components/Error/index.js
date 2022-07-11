import React from 'react';
import styled from 'styled-components';

/**
 * Allows to show 404 error
 *
 * @return 404 page
 * @author Guillaume
 * @version 1.0
 * 
 */
const Error = () => {
  return (
    <MainLabel>
      <TitleLabel>404</TitleLabel>
      <ParagraphLabel>
        Oups! La page que vous demandez n&apos;existe pas.
      </ParagraphLabel>
    </MainLabel>
  );
};

const MainLabel = styled.main`
  color: #ff0101;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleLabel = styled.h1`
  font-size: 96px;
  font-weight: 700;
  display: inline-block;
  margin-top: 145px;
  text-align: center;
  width: 100%;
`;

const ParagraphLabel = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`

export default Error;
