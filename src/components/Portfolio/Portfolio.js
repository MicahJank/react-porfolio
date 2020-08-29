import React, { useState, useEffect } from 'react';

import ProjectCard from './ProjectCard.js';

import styled from 'styled-components';

import { Fade } from '../../utils/Animations.js';
import { Header } from 'semantic-ui-react'; 

import tidyHive from '../../imgs/TidyHive.png';
import githubUserCard from '../../imgs/GithubUserCards.png';
import expatJournal from '../../imgs/ExpatJournal.png';

const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    flex-wrap: wrap;
    position: absolute;
    left: 0;
    z-index: 1;

    .ui.centered.card {
        width: 35%;
        height: 300px;
        max-width: 450px;
        text-align: center;
        margin: 20px;
        margin-bottom: 0;
        cursor: pointer;
        
        h1.header {
            font-size: 4rem;
        }

        .middle-section {
            border-bottom: 1px solid black;
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
        <Fade duration={4} animation={animation} fadeDistance={2000} playState={playState}>
            <Container visible={props.visible} className='portfolio'>
                <ProjectCard img={tidyHive} title={'TidyHive'} description={'TidyHive is a home organizational tool where members of a household can create, assign, and complete tasks.'} />
                <ProjectCard img={expatJournal} title={'Expat Journal'} description={''} />
                <ProjectCard img={githubUserCard} title={'Github User Cards'} description={''} />
                <Header as="h1" textAlign='center'>a Web Developer.</Header>
            </Container>
        </Fade>
    )
};

export default Portfolio;