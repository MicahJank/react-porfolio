import React, { useState, useEffect } from 'react';

import NavigationBar from './components/Navigation/NavigationBar.js';
import Intro from './components/Intro/Intro.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Contact from './components/Contact/Contact.js';
import { useSessionStorage } from './utils/useSessionStorage.js';
import video from './components/VideoBG/gameoflife-edit.mp4';

import styled from 'styled-components';


const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100vh;

  hr {
    width: 40%;
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

const VideoContainer = styled.div`
  width: 100%;
  box-shadow: 0px 33px 34px 0px rgba(15,15,15,0.34);

  video {
    width: 100%;
  }
`;


function App() {
  // the active component is what determines which component is visible on the screen
  const [activeComponent, setActiveComponent] = useSessionStorage('active', 'Intro');

  return (
    <>
    <Container>
      {/* <Grid /> */}
      <div className='navigation'>
        <NavigationBar activeComponent={activeComponent} setActiveComponent={setActiveComponent}  />
        <hr/>
      </div>
      <div className='main'>
        <Intro setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
        <Portfolio setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
        <Contact setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
      </div>
      <VideoContainer>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </VideoContainer>
    </Container>
    </>
  );
}

export default App;
