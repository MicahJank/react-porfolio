import React from 'react';
import styled from 'styled-components';

const CellSquare = styled.div`
    
   

    &:focus {
        outline: none;
    }
`;

const Cell = ({ clickFunction, key, row, col, gameRunning, cellOn }) => {

    const toggleCell = () => {
        if (!gameRunning) {
            clickFunction(row, col)
        }
    }

   const styles={
        width: 20,
        height: 20,
        backgroundColor: cellOn ? '#a7000080' : undefined,
        transition: 'background-color 3s'
    }

    return (
        <CellSquare className='cell' onClick={toggleCell} style={styles} />
    )
}

export default Cell;