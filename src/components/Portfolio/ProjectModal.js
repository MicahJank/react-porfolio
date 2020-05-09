import React from 'react';

import { Modal, Button, Header, Image } from 'semantic-ui-react';

const ProjectModal = () => {

    return (
        <>
            <Modal.Header>
                A modal
            </Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>Stuff</Header>
                    <p>A paragraph here.</p>
                </Modal.Description>
            </Modal.Content>
        </>
    )
}


export default ProjectModal;