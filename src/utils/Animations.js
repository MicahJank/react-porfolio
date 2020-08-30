import React from 'react';

import { Tween } from 'react-gsap';

// fade animations
export const Fade = ({ children, duration, playState, animation, fadeDistance }) => {
    if(animation === 'FadeInLeft') {
      return (
        <Tween 
          duration={duration}
          playState={playState}
          from={
            { autoAlpha: 0, x: fadeDistance }
          }
          to={
            { autoAlpha: 1, x: '0' }
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
            { autoAlpha: 1, x: '0' }
          }
          to={
            { autoAlpha: 0, x: -fadeDistance }
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
            { autoAlpha: 0, x: -fadeDistance }
          }
          to={
            { autoAlpha: 1, x: '0' }
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
            { autoAlpha: 1, x: '0' }
          }
          to={
            { autoAlpha: 0, x: fadeDistance }
          }
        >
          {children}
        </Tween>
      )
    } else if (animation === 'Initial') {
      return (
        <Tween 
          duration={duration}
          playState={playState}
          from={
            { autoAlpha: 0, y: -fadeDistance }
          }
          to={
            { autoAlpha: 1, y: 0 }
          }
        >
          {children}
        </Tween>
      )
        }
  }