import React, { useState, useEffect } from 'react';

import ProjectCard from './ProjectCard.js';

import styled from 'styled-components';

import { Fade } from '../../utils/Animations.js';

import tidyHive from '../../imgs/TidyHive.png';
import githubUserCard from '../../imgs/GithubUserCards.png';
import expatJournal from '../../imgs/ExpatJournal.png';

const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10% 0;
    position: absolute;
    left: 0;

    .ui.centered.card {
        width: 30%;
        margin: 2%;
        text-align: center;
        
        h1.header {
            font-size: 4rem;
        }
    }
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
                <ProjectCard img={tidyHive} title={'TidyHive'} description={'TidyHive is a home organizational tool where members of a household can create, assign, and complete tasks.'} />
                <ProjectCard img={expatJournal} title={'Expat Journal'} description={''} />
                <ProjectCard img={githubUserCard} title={'Github User Cards'} description={''} />
            </Container>
        </Fade>
    )
};

export default Portfolio;