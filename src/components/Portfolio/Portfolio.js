import React, { useState, useEffect } from 'react';

import ProjectCard from './ProjectCard.js';

import styled from 'styled-components';

import { Fade } from '../../utils/Animations.js';

const Container = styled.section`
    width: 100%;
    display: flex;
    padding: 10% 0;
    position: absolute;
    left: 0;
`;

const Portfolio = (props) => {
    const [animation, setAnimation] = useState('FadeInLeft')
    const [playState, setPlayState] = useState('stop');

    useEffect(() => {
        switch(props.activeComponent) {
            case "Intro":
                setPlayState('play');
                setAnimation("FadeOutRight");
                break;

            case "Contact":
                setPlayState('play');
                setAnimation("FadeOutLeft");
                break;

            default:
                setPlayState('play');
                setAnimation("FadeInLeft")
        }
    }, [props.activeComponent])
    return (
        <Fade duration={2} animation={animation} fadeDistance={900} playState={playState}>
            <Container visible={props.visible} className='portfolio'>
                <ProjectCard img={''} title={''} description={''} />
                <ProjectCard img={''} title={''} description={''} />
                <ProjectCard img={''} title={''} description={''} />
            </Container>
        </Fade>
    )
};

export default Portfolio;