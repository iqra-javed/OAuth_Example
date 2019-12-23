import React from 'react';
import styled from 'styled-components';
import GoogleAuth from './components/GoogleAuth';

const Header = styled.div`
width: 100 wv; 
height: 100px; 
background-color: yellowgreen; 
display: flex; 
justify-content: flex-end;
align-items: center;
padding: 0 40px;
`

function App() {

  return (
    <div className="App">
      <Header className="App-header">
      <GoogleAuth>OAuth</GoogleAuth>
      </Header>
    </div>
  );
}

export default App;
