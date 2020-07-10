import React from 'react';

import { Modal, Button, Header, Image, Embed } from 'semantic-ui-react';

const ProjectModal = props => {

    return (
        <>
            <Modal.Header>
                <Embed id='O6Xo21L0ybE' source='youtube' />
            </Modal.Header>
            <Modal.Content className={'middle-section'}>
                <Modal.Description>
                    <Header>{props.title}</Header>
                    <p>{props.description}</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Content>
                <Modal.Description>
                    Hello
                </Modal.Description>
            </Modal.Content> 
        </>
    )
}


export default ProjectModal;