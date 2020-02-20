import React, { useState, useEffect } from 'react';

import NavigationBar from './components/Navigation/NavigationBar.js';
import Intro from './components/Intro/Intro.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import { useLocalStorage } from './utils/useLocalStorage.js';

import styled from 'styled-components';


const Container = styled.div`
  background: linear-gradient(to bottom, rgb(146, 20, 30), rgb(212, 21, 37) );
  height: 100vh;
`;

function App() {
  // the active component is what determines which component is visible on the screen
  const [activeComponent, setActiveComponent] = useLocalStorage('active', 'Intro');

  
  

  return (
    <>
    <NavigationBar activeComponent={activeComponent} setActiveComponent={setActiveComponent}  />
    <Container>
      <div className='main'>
        <Intro setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
        <Portfolio activeComponent={activeComponent} />
      </div>
    </Container>
    </>
  );
}

export default App;
