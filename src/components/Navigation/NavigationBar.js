import React, { useState } from 'react';

import { Input, Menu } from 'semantic-ui-react';

import styled from 'styled-components';

const Nav = styled.nav`
    .ui.menu {
        background-color: #2b2b2b;
    }
    .ui.menu a.item, .ui.menu a.item.active {
        color: white;

        :hover {
        color: white;
        }
    }
`;

const NavigationBar = () => {
    const [active, setActive] = useState('');
    
    const handleClick = (e, { name }) => {
        setActive(name);
    }

    return (
        <Nav>
            <Menu size='huge' secondary widths='12' stackable>
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