import React from 'react';
import styled from 'styled-components';
import videosrc from '../video/GameOfLife.mov';
const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;

    div {
        
        width:100%;
        height:0px;
        position:relative;
        padding-bottom:51.406%;
    }
`;
const VideoBG = () => {

    // const videoSrc = 'https://streamable.com/608mg3'

    return (
        <Container>
            <video autoPlay loop muted>
                <source src={videosrc} type="video/mov" />
                Your browser does not support this video tag.
            </video>
        </Container>
    )
}

export default VideoBG;