import React, { useState } from 'react';

import { Input, Menu } from 'semantic-ui-react';

import styled from 'styled-components';

const Nav = styled.nav`

    .ui.menu {
        display: flex;
        justify-content: center;
        text-align: center;
    }
    .ui.menu a.item, .ui.menu a.item.active {
        display: flex;
        justify-content: center; 
        color: white;
        margin: 1rem 1rem 0;
        width: 10%;
        border-radius: 1rem;


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
            <Menu secondary stackable>
                <Menu.Item
                    name='Intro'
                    active={active === 'Intro'}
                    onClick={handleClick}
                />
                <Menu.Item 
                    name='Portfolio'
                    active={active === 'Portfolio'}
                    onClick={handleClick}
                />
                <Menu.Item 
                    name='Contact'
                    active={active === 'Contact'}
                    onClick={handleClick}
                /> 
            </Menu>
        </Nav>
    )
};

export default NavigationBar;