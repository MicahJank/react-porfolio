import React from 'react';

import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

import micahLogo from '../../imgs/Micah-Svg.svg';

const Container = styled.section`

    .ui.medium.centered.image {
        margin-top: 4rem;
    }
`;

const Intro = () => {

    return (
        <Container>
            <Image centered size='medium' src={micahLogo} />
        </Container>
    )
};


export default Intro;