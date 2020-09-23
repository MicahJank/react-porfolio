import React, { useState, useEffect } from 'react';

import { Modal, Button, Header, Image, Embed, Divider, Icon} from 'semantic-ui-react';
import node from '../../imgs/nodejs.svg';
import oauth from '../../imgs/oauth.svg';
import postgre from '../../imgs/postgresql.svg';
import react from '../../imgs/react.svg';
import reactrouter from '../../imgs/reactrouter.svg';
import redux from '../../imgs/redux.svg';
import semantic from '../../imgs/semanticui.svg';
import styled from 'styled-components';

const LowerSection = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    
    .button {
        @media screen and (max-width: 400px) {
            font-size: 1.5rem !important;
        }
    }
    
`;

const Placeholder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;

    background-image: url('https://react.semantic-ui.com/images/wireframe/image.png');
    background-position: center;
    background-size: cover;

    .demo-video-text {
        font-size: 4rem !important;
        text-align: center;
    }      
`;

const TechStack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .tech.react {
        width: 70px;
        @media screen and (max-width: 500px) {
          width: 35px;
        }
    }
    .tech.redux {
        height: 40px;
        margin-right: 10px;
        @media screen and (max-width: 500px) {
            height: 20px;
          }
    }
    .tech.semantic {
        width: 40px;
        @media screen and (max-width: 500px) {
            width: 20px;
          }
    }
    .tech.reactrouter {
        width: 70px;
        margin-left: 20px;
        @media screen and (max-width: 500px) {
            width: 35px;
          }
    }
    .tech.oauth {
        width: 50px;
        @media screen and (max-width: 500px) {
            width: 25px;
          }
    }
    .tech.node {
        width: 45px;
        margin-left: 10px;
        @media screen and (max-width: 500px) {
            width: 20px;
          }
    }
    .tech.postgre {
        width: 40px;
        margin-right: 10px;
        @media screen and (max-width: 500px) {
            width: 20px;
          }
    }
  
`;

const ProjectModal = props => {
    const [icons, setIcons] = useState({});

    useEffect(() => {
        setIcons({
            node,
            react,
            redux,
            semantic,
            oauth,
            postgre,
            reactrouter
        })
    },[])
    return (
        <>
            <Modal.Header>
                {/* <Embed id='O6Xo21L0ybE' source='youtube' /> */}
                <Placeholder>
                    <Header className='demo-video-text' as='h1' content="Demo Video Coming Soon"/>
                </Placeholder>
            </Modal.Header>
            <Divider horizontal>
                <TechStack>
                    {/* <FontAwesomeIcon className="tech" icon={faReact} /> */}
                    {props.tech ? props.tech.map(item => {
                        
                        return <img key={item} src={icons[item]} className={`tech ${item}`} alt={`${item} svg logo`} />
                    }) : ''}
                    {/* <img src={oauth} className='tech oauth' alt='oauth svg logo' />
                    <img src={semanticui} className='tech semanticui' alt='semantic ui svg logo' />
                    <img src={react} className='tech react' alt='react svg logo' />
                    <img src={redux} className='tech redux' alt='redux svg logo' />
                    <img src={reactrouter} className='tech reactrouter' alt='react router svg logo' />
                    <img src={node} className='tech nodejs' alt='node svg logo' /> */}

                </TechStack>
            </Divider>
            <Modal.Content className={'middle-section'}>
                <Modal.Description>
                    <Header as="h1">{props.title}</Header>
                    <h2>{props.description}</h2>
                </Modal.Description>
            </Modal.Content>
            <Divider/>
            <Modal.Content>
                <LowerSection>
                <Button color="black" as="a" href={props.github} size='massive' icon labelPosition='left'>
                <Icon name='github' />
                Repository
                </Button>
                <Button color="olive" as="a" href={props.deployment} size='massive' icon labelPosition='left'>
                <Icon name='desktop' />
                Deployment
                </Button>
                </LowerSection>
            </Modal.Content> 
        </>
    )
}


export default ProjectModal;