import React from 'react';

import { Card, Icon, Image } from 'semantic-ui-react';


const ProjectCard = (props) => {

    return (
        <Card centered raised>
            {/* <Card.Header as={'h1'}>{props.title}</Card.Header> */}
            <Image src={props.img} wrapped ui={false} />
             <Card.Content extra>
            {props.title}
            </Card.Content>
           
        </Card>
    )
};

export default ProjectCard;