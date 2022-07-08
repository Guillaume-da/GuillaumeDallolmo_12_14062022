import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './styles';
import { createGlobalStyle } from 'styled-components'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Add some reset css rules
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    ol, ul {
      list-style: none;
    }
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);


