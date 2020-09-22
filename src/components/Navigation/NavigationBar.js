import React, { useState } from 'react';

import { Input, Menu, Icon, Button } from 'semantic-ui-react';

import styled from 'styled-components';

const Nav = styled.nav`
    .ui.menu {
        display: flex;
        justify-content: center;
        text-align: center;

        @media screen and (max-width: 500px) {
            width: 100%
            justify-content: space-around;
        }

    }
    .ui.menu a.item, .ui.menu a.item.active {
        display: flex;
        justify-content: center; 
        color: white;
        margin: 1rem 1rem 0;
        
        border-radius: 1rem;
        transition: background 0.5s;

        @media screen and (max-width: 500px) {
            width: 30%;
        }

        :hover {
        color: white;
        border-radius: 1rem;
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
            <Menu secondary>
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