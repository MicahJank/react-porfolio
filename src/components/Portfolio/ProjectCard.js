import React from 'react';

import { Card, Icon, Image } from 'semantic-ui-react';


const ProjectCard = (props) => {

    return (
        <Card centered>
            <Card.Content>
            <Card.Header as={'h1'}>{props.title}</Card.Header>
                {/* <Card.Description>{props.description}</Card.Description> */}
            </Card.Content>
            <Image src={props.img} wrapped ui={false} />
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