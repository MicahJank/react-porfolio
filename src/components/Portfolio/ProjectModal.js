import React from 'react';

import { Modal, Button, Header, Image, Embed, Divider, Icon} from 'semantic-ui-react';
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
const ProjectModal = props => {

    return (
        <>
            <Modal.Header>
                <Embed id='O6Xo21L0ybE' source='youtube' />
            </Modal.Header>
            <Modal.Content className={'middle-section'}>
                <Modal.Description>
                    <Header as="h1">{props.title}</Header>
                    <h3>{props.description}</h3>
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