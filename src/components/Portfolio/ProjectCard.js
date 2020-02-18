import React from 'react';

import { Card, Icon, Image } from 'semantic-ui-react';

const ProjectCard = () => {

    return (
        <Card>
            <Image />
            <Card.Content>
                <Card.Header>Title</Card.Header>
                <Card.Description>Description</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                <Icon name='user' />
                10 Friends
                </a>
            </Card.Content>
        </Card>
    )
};

export default ProjectCard;