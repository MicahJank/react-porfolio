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
  const [animation, setAnimation] = useState('FadeInLeft')

  // animations
  const Fade = ({ children, duration, playState }) => {
    if(animation === 'FadeInLeft') {
      return (
        <Tween 
          duration={duration}
          playState={playState}
          from={
            { opacity: 0, x: '200px' }
          }
          to={
            { opacity: 1, x: '0' }
          }
        >
          {children}
        </Tween>
      )
    } else if (animation === 'FadeOutLeft') {
      return (
        <Tween 
          duration={duration}
          playState={playState}
          from={
            { opacity: 1, x: '0' }
          }
          to={
            { opacity: 0, x: '-200px' }
          }
        >
          {children}
        </Tween>
      )
    } else if (animation === 'FadeInRight') {
      return (
        <Tween 
          duration={duration}
          playState={playState}
          from={
            { opacity: 0, x: '-200px' }
          }
          to={
            { opacity: 1, x: '0' }
          }
        >
          {children}
        </Tween>
      )
    } else if (animation === 'FadeOutRight') {
      return (
        <Tween 
          duration={duration}
          playState={playState}
          from={
            { opacity: 1, x: '0' }
          }
          to={
            { opacity: 0, x: '200px' }
          }
        >
          {children}
        </Tween>
      )
    }
  }
  return (
    <Container>
      <NavigationBar />
      <Fade duration={2}>
        <div className='tween'>
          <Intro setAnimation={setAnimation} setActiveComponent={setActiveComponent} visible={activeComponent === 'Intro'} />
        </div>
      </Fade>
      <Portfolio visible={activeComponent === 'Portfolio'} />
    </Container>
  );
}

export default App;
