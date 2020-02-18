import React from 'react';

import ProjectCard from './ProjectCard.js';

import styled from 'styled-components';

const Container = styled.section`
    display: flex;
`;

const Portfolio = () => {

    return (
        <Container>
            <ProjectCard img={''} title={''} description={''} />
            <ProjectCard img={''} title={''} description={''} />
            <ProjectCard img={''} title={''} description={''} />
        </Container>
    )
};

export default Portfolio;