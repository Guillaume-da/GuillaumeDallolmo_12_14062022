import React from 'react';
import styled from "styled-components";

/**
 * Allows to show loader
 *
 * @return jsx
 * @author Guillaume
 * @version 1.0
 */

const Loader = () => {
  return (
    <DivLabel>
      <DivContentLabel></DivContentLabel>
    </DivLabel>
  );
};

const DivLabel = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  opacity: 1;
  overflow: hidden;
  z-index: 999;
`;
const DivContentLabel = styled.div`
  border: 8px solid #ff0101;
  border-left-color: black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
