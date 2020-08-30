import React, { useState, useCallback, useRef, useEffect } from 'react';

import Cell from './Cell.js';
import styled from 'styled-components';

const numCols = 35;
const numRows = 35;

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
  ]

// creates a grid with random values alive
const generateRandom = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => Math.random() > 0.7 ? 1: 0))
    }
    return rows;
}

const GridContainer = styled.div`
    position: absolute;
`;

const Grid = () => {
    const [currentGrid, setCurrentGrid] = useState([]);
    // i am using the speed in the useCallback hook - therefore i will need to make a ref of it so the speed can update properly
    const [speed, setSpeed] = useState(2000); // speed is in ms
    const speedRef = useRef(speed);
    speedRef.current = speed;

    // determines if the game simulation is running or not
    const [running, setRunning] = useState(false);    
    const runningRef = useRef(running);
    runningRef.current = running;
  

    // useCallback will return a memoised version of the function - i.e. should speed up the application since it will
    // be using recursion
    const runGame = useCallback(() => {
        // the conditions that breaks the recursion loop
        if(!runningRef.current) {
            return;
        }
  
        // grid is the current value of the grid
        // since i am mapping over it the returned result is a copy of the original and doesnt mutate the original
        setCurrentGrid((grid) => {

            return grid.map((rowValue, rowIndex) => {
                // nested arrays inside grid so i need to map again to make sure the nested arrays are copied as well
                return rowValue.map((colValue, colIndex) => { 
                    let neighbors = 0;
                    // let currentCell = [rowIndex, colIndex];
                    operations.forEach(([x,y]) => {
                        // let newRowIndex = rowIndex;
                        // let newColIndex = colIndex;
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

    
                        if (newRowIndex >= 0 && newRowIndex < numRows && newColIndex >= 0 && newColIndex < numCols) {
                            neighbors += grid[newRowIndex][newColIndex]; 
                        }
                    });
                    
                    // gridCopy is the grid that we can manipulate while the 'grid' is being displayed to the use
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

        // re-run the function after x ms
        setTimeout(runGame, speedRef.current);
    }, [])


    useEffect(() => {
        setCurrentGrid(generateRandom());
        setRunning(true);
        runningRef.current = true;
        runGame();
    },[])

    return (
        <GridContainer>
            <div style={
                { display: 'grid',
                gridTemplateColumns: `repeat(${numCols}, 0.5fr)`,
                width: '100vw',
                height: '100vh'
                }} 
                className="grid">
                    {currentGrid.map((rows, i) =>
                        rows.map((cols, k) => {
                            return <Cell cellOn={currentGrid[i][k]} 
                                key={`${i}-${k}`} row={i} col={k} 
                                gameRunning={running} />
                        })
                    )}
            </div>
        </GridContainer>
    )
}


export default Grid;