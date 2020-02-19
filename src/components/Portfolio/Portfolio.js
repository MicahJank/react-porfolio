import React from 'react';

import ProjectCard from './ProjectCard.js';

import styled from 'styled-components';

const Container = styled.section`
    display: ${props => props.visible === true ? 'flex' : 'none'};
`;

const Portfolio = (props) => {

    return (
        <Container visible={props.visible} className='portfolio'>
            <ProjectCard img={''} title={''} description={''} />
            <ProjectCard img={''} title={''} description={''} />
            <ProjectCard img={''} title={''} description={''} />
        </Container>
    )
};

export default Portfolio;