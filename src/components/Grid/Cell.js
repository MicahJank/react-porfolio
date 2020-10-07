import React, { useMemo } from 'react';
import styled from 'styled-components';

const CellSquare = styled.div`
    
    &:focus {
        outline: none;
    }
`;

const Cell = ({ cellOn }) => {
    const styles={
        width: 20,
        height: 20,
        backgroundColor: cellOn ? '#a7000080' : undefined,
        transition: 'background-color 3s'
    }

    const memoCell = useMemo(() => <CellSquare className='cell' style={styles} />, [styles])

    return (
        <>
        {memoCell}
        </>
    )
}

export default Cell;