import React from 'react';

import styled from 'styled-components';
import { Image, Header, Button } from 'semantic-ui-react';

import micahLogo from '../../imgs/Micah-Svg.svg';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

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
        width: 25%;
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

const Intro = () => {

    return (
        <Container className='intro'>
            <Image centered size='medium' src={micahLogo} />
            <Header textAlign='center'>Hi. I'm Micah Jank.</Header>
            <Header className='subHeader' textAlign='center'>a Web Developer.</Header>
            <Button className='portfolio' primary size='massive'>Check Out My Work</Button>
        </Container>
    )
};


export default Intro;