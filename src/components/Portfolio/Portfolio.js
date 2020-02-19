import React, { useState } from 'react';

import ProjectCard from './ProjectCard.js';

import styled from 'styled-components';

import { Fade } from '../../utils/Animations.js';

const Container = styled.section`
    display: flex;
    height: 400px;
    position: absolute;
    left: 27%;
`;

const Portfolio = (props) => {
    const [animation, setAnimation] = useState('FadeInLeft')
    return (
        <Fade duration={2} animation={animation} fadeDistance={900}>
            <Container visible={props.visible} className='portfolio'>
                <ProjectCard img={''} title={''} description={''} />
                <ProjectCard img={''} title={''} description={''} />
                <ProjectCard img={''} title={''} description={''} />
            </Container>
        </Fade>
    )
};

export default Portfolio;