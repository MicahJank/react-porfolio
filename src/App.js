import React, { useState, useEffect } from 'react';

import NavigationBar from './components/Navigation/NavigationBar.js';
import Intro from './components/Intro/Intro.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Contact from './components/Contact/Contact.js';
import Grid from './components/Grid/Grid.js';
import { useSessionStorage } from './utils/useSessionStorage.js';
import video from './components/VideoBG/gameoflife-edit.mp4';

import styled from 'styled-components';


const Container = styled.div`
  
  height: 100vh;

  hr {
    width: 40%;
  }
`;

const VideoContainer = styled.div`
 position: absolute;
 z-index: -1;
`;


function App() {
  // the active component is what determines which component is visible on the screen
  const [activeComponent, setActiveComponent] = useSessionStorage('active', 'Intro');

  return (
    <>
    <Container>
      {/* <Grid /> */}
      <VideoContainer>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </VideoContainer>
      <NavigationBar activeComponent={activeComponent} setActiveComponent={setActiveComponent}  />
      <hr/>
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
