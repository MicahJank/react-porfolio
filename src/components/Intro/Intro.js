import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { Image, Header, Button } from 'semantic-ui-react';

import micahLogo from '../../imgs/Micah-Svg.svg';

import { Fade } from '../../utils/Animations.js';
import { animated, useTransition } from 'react-spring';

const Container = styled(animated.section)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 0;
    top: 8%;

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

    const [animation, setAnimation] = useState('')
    const [playState, setplayState] = useState(true)
    // const springProps = useSpring({opacity: 1, from: {opacity: 0}});
    const transitions = useTransition(playState, null, {
        from: animation === "FadeInLeft" ? { opacity: 0, transform: 'translate(-100%)' } : { opacity: 0, transform: 'translateX(100%)' },
        enter: { opacity: 1, transform: 'translateX(0)' },
        leave: { opacity: 0, transform: 'translate(-100%)' },
    })

    useEffect(() => {
        switch(props.activeComponent) {
            case "Portfolio":
                setAnimation('FadeOutLeft');
                setplayState(false)
                break;

            case "Contact":
                setAnimation('FadeOutLeft');
                setplayState(false)
                break; 

            default:
                setAnimation('FadeInLeft');
                setplayState(true)
        }
    }, [props.activeComponent])

    const handleClick = e => {
        e.preventDefault();
        props.setActiveComponent('Portfolio');
    }
    return transitions.map(({ item, key, props }) => 
     (item &&
        <Container key={key} style={props} visible={props.visible} className='intro'>
            <Image centered size='medium' src={micahLogo} />
            <Header textAlign='center'>Hi. I'm Micah Jank.</Header>
            <Header className='subHeader' textAlign='center'>a Web Developer.</Header>
            <Button onClick={handleClick} className='portfolio' primary size='massive'>Check Out My Work</Button>
        </Container>
    ))
};


export default Intro;