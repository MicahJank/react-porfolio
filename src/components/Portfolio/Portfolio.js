import React, { useState, useEffect } from 'react';

import ProjectCard from './ProjectCard.js';

import styled from 'styled-components';

import { Fade } from '../../utils/Animations.js';
import { animated, useTransition } from 'react-spring';

import { Header, Button } from 'semantic-ui-react'; 

import tidyHive from '../../imgs/TidyHive.png';
import githubUserCard from '../../imgs/GithubUserCards.png';
import expatJournal from '../../imgs/ExpatJournal.png';

const Container = styled(animated.section)`
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
    const [animation, setAnimation] = useState('')
    const [playState, setPlayState] = useState(true);

    const transitions = useTransition(playState, null, {
        from: animation === "FadeInLeft" ? { opacity: 0, transform: 'translate(-100%)' } : { opacity: 0, transform: 'translate(100%)' },
        enter: { opacity: 1, transform: 'translateX(0)' },
        leave: animation === "FadeOutRight" ? { opacity: 0, transform: 'translate(100%)' } : { opacity: 0, transform: 'translate(-100%)' },
    })

    useEffect(() => {
        switch(props.activeComponent) {
            case "Intro":
                setPlayState(false);
                setAnimation("FadeOutRight");
                break;

            case "Contact":
                setPlayState(false);
                setAnimation("FadeOutLeft");
                break;

            default:
                setPlayState(true);
                setAnimation( animation === "FadeOutLeft" ? "FadeInLeft" : "FadeInRight")
        }
    }, [props.activeComponent])

    const handleClick = e => {
        e.preventDefault();
        props.setActiveComponent('Contact');
    }
    return transitions.map(({ item, key, props }) => 
    (item &&
        <>
            <Container key={key} style={props} visible={props.visible} className='portfolio'>
                <div className='cards'>
                    <ProjectCard deployment="https://tidyhive.vercel.app" github="https://github.com/MicahJank/homerun-fe/blob/master/README.md" img={tidyHive} title={'TidyHive'} description={'TidyHive is a home organizational tool where members of a household can create, assign, and complete tasks.'} />
                    <ProjectCard img={expatJournal} title={'Expat Journal'} description={''} />
                    <ProjectCard img={githubUserCard} title={'Github User Cards'} description={''} />
                </div>
                <div className="bottom-section">
                    <Header className="title">like what you see?</Header>
                    <Button onClick={handleClick} className='portfolio' primary size='massive'>Contact Me!</Button>
                </div>
            </Container>
        </>
    ))
};

export default Portfolio;