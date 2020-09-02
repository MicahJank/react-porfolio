import React, { useState, useEffect } from 'react';

import { Form, Input, TextArea, Button, Modal, Message, Image, Transition, TransitionablePortal } from 'semantic-ui-react';

import styled from 'styled-components';

import { Fade } from '../../utils/Animations.js';

import useForm from '../../utils/useForm.js';
import { animated, useTransition } from 'react-spring';

import micahLogo from '../../imgs/Micah-Svg.svg';


const Container = styled(animated.section)`
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 120px;

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

    .ui.modal.transition.visible.active {
        background-color: black;
    }

`;

const Contact = (props) => {
    // determines what animation the component will render with
    const [animation, setAnimation] = useState('')

    // determines when the component should play the animation - default is stop because on initial load of page if the
    // component is not the active component it should be invisible
    const [playState, setPlayState] = useState(true);

    const transitions = useTransition(playState, null, {
        from: animation === "FadeInLeft" ? { opacity: 0, transform: 'translate(100%)' } : { opacity: 0, transform: 'translateX(100%)' },
        enter: { opacity: 1, transform: 'translateX(0)' },
        leave: { opacity: 0, transform: 'translate(100%)' },
    })

    // useForm will help keep the state of the form
    const [state, handleChange, clearForm, errors] = useForm();

    // handles the loading state for the form when submitting the information
    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState("");

    const [openModal, setOpenModal] = useState(false); // change to false


    // the useEffect will run whenever the activeComponent changes in the App.js
    useEffect(() => {
        switch(props.activeComponent) {
            case "Intro":
                setPlayState(false);
                setAnimation("FadeOutRight");
                break;

            case "Portfolio":
                setPlayState(false);
                setAnimation("FadeOutRight");
                break;

            default:
                setPlayState(true);
                setAnimation("FadeInLeft")
        }
    }, [props.activeComponent]);

    const submitHandler = event => {
        event.preventDefault();
        setLoading(true);
        const form = event.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            clearForm();
            setLoading(false);
            setOpenModal(true);
            setStatus("SUCCESS");
        } else {
            setStatus("ERROR");
        }
        };
        xhr.send(data);
    }

    return transitions.map(({ item, key, props }) => 
    (item &&
        <>
            <Container key={key} style={props}>
                <Form action={'https://formspree.io/mvowwebd'} method={"POST"} size="massive" onSubmit={submitHandler} loading={loading}>
                    <Form.Group>
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='First name'
                            placeholder='First name'
                            type="text"
                            name='first-name'
                            value={state['first-name'] || ''}
                            onChange={handleChange} 
                        />
                        <Form.Field 
                            id='form-input-control-last-name'
                            control={Input}
                            label='Last name'
                            placeholder='Last name'
                            type="text"
                            name='last-name'
                            value={state['last-name'] || ''}
                            onChange={handleChange} 
                        />
                    </Form.Group>
                        <Form.Field
                            id="form-input-control-error-email"
                            control={Input}
                            label="Email"
                            placeholder="Email"
                            type="email"
                            required
                            name='email' 
                            error={errors.email}
                            value={state.email || ''}
                            onChange={handleChange} 
                        />
                        <Form.Field
                            id='form-textarea-control-opinion' 
                            control={TextArea}
                            label='Message'
                            placeholder='Message'
                            type="text"
                            name='message'
                            value={state.message || ''}
                            onChange={handleChange}  
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
                <TransitionablePortal open={openModal} transition={{animation: "scale", duraction: 1000}}>
                    <Modal style={{ background: 'none', boxShadow: 'none'}} open={openModal} onClose={() => setOpenModal(false)}>
                        {/* <Transition animation='fade up' duration={1000} visible={true} > */}
                            <Message style={{ textAlign: 'center', boxShadow: 'none'}} size='massive' color="olive">
                                <Image centered size='medium' src={micahLogo} />
                                <Message.Header>Thanks a bunch for the message!</Message.Header>
                                <Message.Content>I'll be sure to get back to you ASAP!</Message.Content>
                            </Message>
                        {/* </Transition> */}
                    </Modal>
                </TransitionablePortal>
            </Container> 
        {/* status === 'SUCCESS' */}
        </>
    ));
};

export default Contact;