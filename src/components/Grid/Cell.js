import React, { memo } from 'react';
import styled from 'styled-components';

const CellSquare = styled.div`
    
    &:focus {
        outline: none;
    }
`;

const Cell = ({ cellOn }) => {
    // console.log('From Individual Cell')
    const styles={
        width: 20,
        height: 20,
        backgroundColor: cellOn ? '#a7000080' : undefined,
        transition: 'background-color 3s'
    }

    return (
        <>
        <CellSquare className='cell' style={styles} />
        </>
    )
}

export default memo(Cell);