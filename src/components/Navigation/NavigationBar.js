import React, { useState } from 'react';

import { Input, Menu, Icon, Button } from 'semantic-ui-react';

import styled from 'styled-components';

const Nav = styled.nav`
    .ui.menu {
        display: flex;
        justify-content: center;
        text-align: center;
        @media screen and (max-width: 500px) {
            display: none;
        }
    }
    .ui.menu a.item, .ui.menu a.item.active {
        display: flex;
        justify-content: center; 
        color: white;
        margin: 1rem 1rem 0;
        width: 10%;
        border-radius: 1rem;
        transition: background 0.5s;

        :hover {
        color: white;
        border-radius: 1rem;
        }
    }

    .bars-button {
        display: none;

        @media screen and (max-width: 500px) {
            display: block;
            width: 100%;
        }
    }

`;



const NavigationBar = (props) => {
    const [active, setActive] = useState('');
    
    const handleClick = (e, { name }) => {
        setActive(name);
        props.setActiveComponent(name);
    }

    return (
        <Nav className='navBar'>
            <Button color='blue' className="bars-button" icon='bars' size="massive" />
            <Menu secondary stackable>
                <Menu.Item
                    name='Intro'
                    active={props.activeComponent === 'Intro'}
                    onClick={handleClick}
                />
                <Menu.Item 
                    name='Portfolio'
                    active={props.activeComponent === 'Portfolio'}
                    onClick={handleClick}
                />
                <Menu.Item 
                    name='Contact'
                    active={props.activeComponent === 'Contact'}
                    onClick={handleClick}
                /> 
            </Menu>
        </Nav>
    )
};

export default NavigationBar;