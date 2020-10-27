import React, { useState, useCallback, useRef, useEffect } from 'react';

import Cell from './Cell.js';
import styled from 'styled-components';

const numCols = 50;
const numRows = 25; 

const GridContainer = styled.div`
    position: absolute;
`;
// operations
// this will make it easier for me to determine the neighbors of an 'alive' cell
// where [0,0] is the alive cell we are checking

const operations = [
    [0,1], // right of alive cell
    [0,-1], // left of alive cell
    [1,-1], // bottom left diagonal of alive cell
    [-1,1], // top right diagonal of alive cell
    [1,1], // bottom right diagonal of alive cell
    [-1,-1], // top left diagonal of alive cell
    [1,0], // bottom of alive cell
    [-1,0], // top of alive cell
  ];

const getNeigbors = (rowIndex, colIndex, grid) => {
    let neighbors = 0;
    
    // used for finding out which cells should be turned on or off
    operations.forEach(([x,y]) => {
        // neighbors += grid[]
        let newRowIndex = rowIndex + x;
        let newColIndex = colIndex + y;
        // if else checks here will make the game wrap around the grid
        if (newRowIndex < 0) {
            newRowIndex = numRows - 1;
        } else if (newRowIndex > numRows - 1) {
            newRowIndex = 0
        }
        if (newColIndex < 0) {
            newColIndex = numCols - 1;
        } else if (newColIndex > numCols - 1) {
            newColIndex = 0
        }
        if (grid[newRowIndex][newColIndex]) {
            neighbors += grid[newRowIndex][newColIndex];                            
        }
    });

    return neighbors;
}

const generateRandom = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => Math.random() > 0.7 ? 1: 0))
    }
    return rows;
}


const Grid = () => {
    const [currentGrid, setCurrentGrid] = useState(() => generateRandom());

    // i am using the speed in the useCallback hook - therefore i will need to make a ref of it so the speed can update properly
    const [speed, setSpeed] = useState(5000); // speed is in ms
    const speedRef = useRef(speed);
    speedRef.current = speed;

    // determines if the game simulation is running or not
    const [running, setRunning] = useState(false);    
    const runningRef = useRef(running);
    runningRef.current = running;

    // useCallback will return a memoised version of the function - i.e. should speed up the application since it will
    // be using recursion
    const runGame = useCallback(() => {
        
        setCurrentGrid((grid) => {

            return grid.map((rowValue, rowIndex) => {
                // nested arrays inside grid so i need to map again to make sure the nested arrays are copied as well
                return rowValue.map((colValue, colIndex) => { 
                    
                    let neighbors = getNeigbors(rowIndex, colIndex, grid);

                    if ((grid[rowIndex][colIndex] === 1 && neighbors < 2) || (grid[rowIndex][colIndex] === 1 && neighbors > 3)) {
                        return 0;
                    } else if (grid[rowIndex][colIndex] === 0 && neighbors === 3) {
                        return 1;
                    } else {

                        return colValue; 
                    }

                })
            })
        });
        // console.log(number);
        // re-run the function after x ms
        setTimeout(runGame, speedRef.current);
    }, [])


    // set the random grid to state first and starts the runGame loop
    useEffect(() => {
        // setCurrentGrid(generateRandom());
        setRunning(true);
        runningRef.current = true;
        runGame();
    },[])

    return (
        <GridContainer>
            <div style={
                { display: 'grid',
                gridTemplateColumns: `repeat(${numCols}, 1fr)`,
                width: '100vw',
                height: '100vh'
                }} 
                className="grid">
                    {currentGrid.map((rows, i) =>
                        rows.map((cols, k) => {
                            return <Cell cellOn={currentGrid[i][k]} 
                                key={`${i}-${k}`} 
                                gameRunning={running} />
                        })
                    )}
            </div>
        </GridContainer>
    )
}


export default Grid;