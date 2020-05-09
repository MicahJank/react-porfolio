import React, { useState } from 'react';

import { Card, Icon, Image, Modal } from 'semantic-ui-react';
import ProjectModal from './ProjectModal.js';


const ProjectCard = (props) => {
    const [projectModal, setProjectModal] = useState(false);

    return (
        <>
        <Card centered raised onClick={() => setProjectModal(true)}>
            {/* <Card.Header as={'h1'}>{props.title}</Card.Header> */}
            <Image src={props.img} wrapped ui={false} />
             <Card.Content extra>
            {props.title}
            </Card.Content>
           
        </Card>
        <Modal dimmer={'blurring'} centered={false} open={projectModal} onClose={() => setProjectModal(false)}>
            <ProjectModal title={props.title} description={props.description} />
        </Modal>
        </>
    )
};

export default ProjectCard;