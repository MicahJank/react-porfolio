import React, { useState } from 'react';

import NavigationBar from './components/Navigation/NavigationBar.js';
import Intro from './components/Intro/Intro.js';
import Portfolio from './components/Portfolio/Portfolio.js';

import styled from 'styled-components';
import { Tween } from 'react-gsap';


const Container = styled.div`
  background: linear-gradient(to bottom, rgb(146, 20, 30), rgb(212, 21, 37) );
  height: 100vh;
`;

function App() {
  // the active component is what determines which component is visible on the screen
  const [activeComponent, setActiveComponent] = useState('Intro')

  return (
    <Container>
      <NavigationBar />
      <Tween from={{ opacity: 0, y: '-50px'}} to={{ opacity: 1, y: '0' }} duration={2}>
        <div className='tween'>
        <Intro visible={activeComponent === 'Intro'} />
        </div>
      </Tween>
      <Portfolio visible={activeComponent === 'Portfolio'} />
    </Container>
  );
}

export default App;
