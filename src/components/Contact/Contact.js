import React, { useState, useEffect } from 'react';

import { Form, Input, TextArea, Button } from 'semantic-ui-react';

import styled from 'styled-components';

import { Fade } from '../../utils/Animations.js';


const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 25%;

    .ui.form .field>label {
        display: none;
    }

    .field.submitBtn {
        display: flex;
        justify-content: flex-end;
    }

    .field .ui.button {
        font-size: 1.5rem;
        width: 40%;
    }
`;

const Contact = (props) => {
    // determines what animation the component will render with
    const [animation, setAnimation] = useState('FadeInLeft')

    // determines when the component should play the animation - default is stop because on initial load of page if the
    // component is not the active component it should be invisible
    const [playState, setPlayState] = useState('stop');

    // the useEffect will run whenever the activeComponent changes in the App.js
    useEffect(() => {
        console.log("TCL: Contact -> props.activeComponent", props.activeComponent)
        switch(props.activeComponent) {
            case "Intro":
                setPlayState('play');
                setAnimation("FadeOutRight");
                break;

            case "Portfolio":
                setPlayState('play');
                setAnimation("FadeOutRight");
                break;

            default:
                setPlayState('play');
                setAnimation("FadeInLeft")
        }
    }, [props.activeComponent]);

    return (
        <Fade duration={2} animation={animation} fadeDistance={900} playState={playState}>
            <Container>
                <Form size="massive">
                    <Form.Group>
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='First name'
                            placeholder='First name'
                            type="text" 
                        />
                        <Form.Field 
                            id='form-input-control-last-name'
                            control={Input}
                            label='Last name'
                            placeholder='Last name'
                            type="text"
                        />
                    </Form.Group>
                        <Form.Field
                            id="form-input-control-error-email"
                            control={Input}
                            label="Email"
                            placeholder="Email"
                            error={{
                                content: "Please enter a valid email address",
                                pointing: "below"
                            }}
                            type="email" 
                        />
                        <Form.Field
                            id='form-textarea-control-opinion'
                            control={TextArea}
                            label='Message'
                            placeholder='Message'
                            type="text" 
                        />
                        <Form.Field primary
                            className="submitBtn"
                            id='form-button-control-public'
                            control={Button}
                            content='Submit'
                            label='Submit'
                            type="submit" 
                        />  
                </Form>
            </Container>
        </Fade>
    );
};

export default Contact;