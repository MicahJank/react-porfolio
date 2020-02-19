import React from 'react';

import { Tween } from 'react-gsap';

// fade animations
export const Fade = ({ children, duration, playState, animation }) => {
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