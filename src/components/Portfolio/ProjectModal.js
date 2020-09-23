import React from 'react';

import { Modal, Button, Header, Image, Embed, Divider, Icon} from 'semantic-ui-react';
import node from '../../imgs/nodejs.svg';
import oauth from '../../imgs/oauth.svg';
import postgresql from '../../imgs/postgresql.svg';
import react from '../../imgs/react.svg';
import reactrouter from '../../imgs/reactrouter.svg';
import redux from '../../imgs/redux.svg';
import semanticui from '../../imgs/semanticui.svg';
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

    .tech {
        width: 70px;
    }
  
`;

const ProjectModal = props => {

    return (
        <>
            <Modal.Header>
                {/* <Embed id='O6Xo21L0ybE' source='youtube' /> */}
                <Placeholder>
                    <Header className='demo-video-text' as='h1' content="Demo Video Coming Soon"/>
                </Placeholder>
            </Modal.Header>
            <TechStack>
                <Divider horizontal>
                    {/* <FontAwesomeIcon className="tech" icon={faReact} /> */}
                    <img src={react} className='tech' alt='react svg logo' />
                    <img src={redux} className='tech redux' alt='redux svg logo' />

                </Divider>
            </TechStack>
            <Modal.Content className={'middle-section'}>
                <Modal.Description>
                    <Header as="h1">{props.title}</Header>
                    <h2>{props.description}</h2>
                </Modal.Description>
            </Modal.Content>
            <Divider/>
            <Modal.Content>
                <LowerSection>
                <Button as="a" href={props.github} size='massive' icon labelPosition='left'>
                <Icon name='github' />
                Repository
                </Button>
                <Button as="a" href={props.deployment} size='massive' icon labelPosition='left'>
                <Icon name='desktop' />
                Deployment
                </Button>
                </LowerSection>
            </Modal.Content> 
        </>
    )
}


export default ProjectModal;