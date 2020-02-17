import React from 'react';

import NavigationBar from './components/Navigation/NavigationBar.js';

import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  background: linear-gradient(to bottom, rgb(146, 20, 30), rgb(212, 21, 37) );
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <NavigationBar />
    </Container>
  );
}

export default App;
