import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { Image, Header, Button } from 'semantic-ui-react';

import micahLogo from '../../imgs/Micah-Svg.svg';

import { Fade } from '../../utils/Animations.js';

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 0;
    top: 8%;
    opacity: 1;
    transition: opacity 1s;

    .ui.medium.centered.image {
        margin-top: 4rem;
    }

    .ui.center.header {
        font-size: 6rem;
        color: #eaeaea;
    }

    .ui.center.header.subHeader {
        font-size: 3rem;
    }

    .ui.massive.primary.button {
        margin-top: 4rem;
        width: 400px;
        font-size: 3rem;
        padding: 3rem;
        background-color: #43B3E0;
        text-shadow: -1px -1px 0.5px rgba(0, 0, 0, 0.5);
        box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.5), inset 0px 2px 1px 0px rgba(255, 255, 255, 0.75);
        border-radius: 8px;
        
        :hover {
            background-color: #46c4ea;
        }
    }



`;

const Intro = (props) => {

    const [animation, setAnimation] = useState('FadeInLeft')
    const [playState, setplayState] = useState('stop')
    

    useEffect(() => {
        switch(props.activeComponent) {
            case "Portfolio":
                setplayState('play');
                setAnimation('FadeOutLeft');
                break;

            case "Contact":
                setplayState('play');
                setAnimation('FadeOutLeft');
                break; 

            default:
                setplayState('play');
                setAnimation('FadeInLeft');
        }
    }, [props.activeComponent])

    const handleClick = e => {
        e.preventDefault();
        props.setActiveComponent('Portfolio');
    }
    
    return (
        <Fade duration={2} animation={animation} fadeDistance={1100} playState={playState}>
            <Container visible={props.visible} className='intro'>
                <Image centered size='medium' src={micahLogo} />
                <Header textAlign='center'>Hi. I'm Micah Jank.</Header>
                <Header className='subHeader' textAlign='center'>a Web Developer.</Header>
                <Button onClick={handleClick} className='portfolio' primary size='massive'>Check Out My Work</Button>
            </Container>
        </Fade>
    )
};


export default Intro;