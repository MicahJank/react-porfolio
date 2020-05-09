import React from 'react';

import { Modal, Button, Header, Image } from 'semantic-ui-react';

const ProjectModal = props => {

    return (
        <>
            <Modal.Header>
                Demo Video
            </Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>{props.title}</Header>
                    <p>{props.description}</p>
                </Modal.Description>
            </Modal.Content>
        </>
    )
}


export default ProjectModal;