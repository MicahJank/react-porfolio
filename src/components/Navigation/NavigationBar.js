import React, { useState } from 'react';

import { Input, Menu } from 'semantic-ui-react';

const NavigationBar = () => {
    const [active, setActive] = useState('Top');
    
    const handleClick = (e, { name }) => {
        setActive(name);
    }

    return (
        <Menu size='huge' secondary widths='12'>
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
    )
};

export default NavigationBar;