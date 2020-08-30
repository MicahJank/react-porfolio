import React, { useState, useEffect } from 'react';

import ProjectCard from './ProjectCard.js';

import styled from 'styled-components';

import { Fade } from '../../utils/Animations.js';
import { Header, Button } from 'semantic-ui-react'; 

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
    top: 8%;
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

    .title {
        font-size: 4rem !important;
        color: white;
    }

    .ui.massive.primary.button {
        width: 300px;
        font-size: 2rem;
        padding: 2rem;
        background-color: #43B3E0;
        text-shadow: -1px -1px 0.5px rgba(0, 0, 0, 0.5);
        box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.5), inset 0px 2px 1px 0px rgba(255, 255, 255, 0.75);
        border-radius: 8px;
        
        :hover {
            background-color: #46c4ea;
        }
    }

    .cards {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .bottom-section {
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

    const handleClick = e => {
        e.preventDefault();
        props.setActiveComponent('Contact');
    }
    return (
        <>
            <Fade duration={4} animation={animation} fadeDistance={2000} playState={playState}>
                <Container visible={props.visible} className='portfolio'>
                    <div className='cards'>
                        <ProjectCard img={tidyHive} title={'TidyHive'} description={'TidyHive is a home organizational tool where members of a household can create, assign, and complete tasks.'} />
                        <ProjectCard img={expatJournal} title={'Expat Journal'} description={''} />
                        <ProjectCard img={githubUserCard} title={'Github User Cards'} description={''} />
                    </div>
                    <div className="bottom-section">
                        <Header className="title">like what you see?</Header>
                        <Button onClick={handleClick} className='portfolio' primary size='massive'>Contact Me!</Button>
                    </div>
                </Container>
            </Fade>
        </>
    )
};

export default Portfolio;