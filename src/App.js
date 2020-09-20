import React, { useState, useEffect } from 'react';

import NavigationBar from './components/Navigation/NavigationBar.js';
import Intro from './components/Intro/Intro.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Contact from './components/Contact/Contact.js';
import { useSessionStorage } from './utils/useSessionStorage.js';
import video from './components/VideoBG/gameoflife-edit.mp4';
import Grid from './components/Grid/Grid.js';



import styled from 'styled-components';


const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100vh;

  hr {
    width: 40%;
    @media screen and (max-width: 500px) {
      display: none;
  }
  }

  .navigation {
    width: 100%;
    position: absolute;
    z-index: 5
  }
  
  .main {
    position: relative;
    z-index: 4;
    top: 8%;
  }

`; 



function App() {
  // the active component is what determines which component is visible on the screen
  const [activeComponent, setActiveComponent] = useSessionStorage('active', 'Intro');
  const [transitionActive, setTransitionActive] = useState(false);



  return (
    <>
    <Container>
      <Grid />
      <div className='navigation'>
        <NavigationBar setTransitionActive={setTransitionActive} activeComponent={activeComponent} setActiveComponent={setActiveComponent}  />
        <hr/>
      </div>
      <div className='main'>
        <Intro setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
        <Portfolio setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
        <Contact setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
      </div>
    </Container>
    </>
  );
}

export default App;
