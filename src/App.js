import React, { useState } from 'react';

import NavigationBar from './components/Navigation/NavigationBar.js';
import Intro from './components/Intro/Intro.js';
import Portfolio from './components/Portfolio/Portfolio.js';

import styled from 'styled-components';


const Container = styled.div`
  background: linear-gradient(to bottom, rgb(146, 20, 30), rgb(212, 21, 37) );
  height: 100vh;
`;

function App() {
  // the active component is what determines which component is visible on the screen
  const [activeComponent, setActiveComponent] = useState('Intro');

  // The active component here will let me easily switch between which components should be on the screen
  // i am trying to get the portfolio site working without using browser router or any routing at all
  const Active = () => {
    switch(activeComponent) {
      case 'Intro':
        return (<Intro setActiveComponent={setActiveComponent} visible={activeComponent === 'Intro'} />);

      case 'Portfolio':
        return (<Portfolio visible={activeComponent === 'Portfolio'} />);
  
      default: 
        return (<Intro setActiveComponent={setActiveComponent} visible={activeComponent === 'Intro'} />);
    }

  }
  
  return (
    <Container>
      <NavigationBar />
      <Active />
    </Container>
  );
}

export default App;
