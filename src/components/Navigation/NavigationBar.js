import React, { useState } from 'react';

import { Input, Menu } from 'semantic-ui-react';

import styled from 'styled-components';

const Nav = styled.nav`
    .ui.menu {
        background-color: #2b2b2b;
        display: flex;
        justify-content: center;
        text-align: center;
    }
    .ui.menu a.item, .ui.menu a.item.active {
        display: flex;
        justify-content: center;
        color: white;
        margin: 1rem;
        width: 5%;


        :hover {
        color: white;
        background-color: #3d3d3d;
        border-radius: 1rem;
        }
    }
`;

const NavigationBar = () => {
    const [active, setActive] = useState('');
    
    const handleClick = (e, { name }) => {
        setActive(name);
    }

    return (
        <Nav className='navBar'>
            <Menu secondary stackable>
                <Menu.Item
                    name='Top'
                    active={active === 'Top'}
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