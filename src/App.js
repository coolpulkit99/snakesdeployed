import React, { useState, useEffect } from 'react';
import './App.css';
import Row from "./components/Row";

function handleGrid() {
  // console.log("/c");

}
function handleKey(e) {

}
const gameOvergrid=[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[3,3,3,3,0,0,3,0,0,3,3,0,3,3,0,3,3,3,3,0],
[3,0,0,0,0,3,0,3,0,3,0,3,0,3,0,3,3,0,0,0],
[3,0,3,3,0,3,3,3,0,3,0,3,0,3,0,3,3,3,3,0],
[3,0,0,3,0,3,0,3,0,3,0,0,0,3,0,3,3,0,0,0],
[3,3,3,3,0,3,0,3,0,3,0,0,0,3,0,3,3,3,3,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[3,3,3,3,0,3,0,0,0,3,0,3,3,3,3,0,3,3,3,3],
[3,0,0,3,0,3,0,0,0,3,0,3,3,0,0,0,3,0,0,3],
[3,0,0,3,0,3,0,0,0,3,0,3,3,3,3,0,3,3,3,3],
[3,0,0,3,0,0,3,0,3,0,0,3,3,0,0,0,3,0,3,0],
[3,3,3,3,0,0,0,3,0,0,0,3,3,3,3,0,3,0,3,3],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]
function limitWrapChecker(minlimit,maxlimit,value){
  if(value>maxlimit)
  return maxlimit;
  if(value<minlimit)
  return minlimit;
  return value;
}

//update array with new positions
function processArray(snakepos, foodpos, size) {
  let gridv = new Array();
  for (let row = 0; row < size; row++) {
    let temp = new Array();
    for (let col = 0; col < size; col++) {
      temp.push(0);
    }
    gridv.push(temp);
  }
  snakepos.map((ind) => {
    // console.log(ind)
    gridv[ind[0]][ind[1]] = 1;
  })
  gridv[foodpos[0]][foodpos[1]] = 2;
  return gridv;
}

//create new snake position

function addNewPos(dir, element, size) {
  let x = element[0];
  let y = element[1];

  switch (dir) {
    case 1: y -= 1;
      break;
    case 2: x += 1
      break;
    case 3: y += 1
      break;
    case 4: x -= 1;
      break;
  };
  if (x < 0)
    x = size - 1;
  if (x > size - 1)
    x = 0;
  if (y < 0)
    y = size - 1;
  if (y > size - 1)
    y = 0;
  return [x, y];
}

let gameOver = 0;
//main react component
function App(props) {

  let gridv = new Array();
  for (let row = 0; row < props.size; row++) {
    let temp = new Array();
    for (let col = 0; col < props.size; col++) {
      temp.push(0);
    }
    gridv.push(temp);
  }
  //inital positions 
  gridv[Math.floor(props.size / 2)][Math.floor(props.size / 2)] = 2;
  let tempvaradd = Math.floor(props.size / 2) + 1;
  // console.log(Math.floor(props.size / 2));
  gridv[tempvaradd][tempvaradd] = 1;
  //1 is snake
  //2 is food

  const [score, updateScore] = useState(0);
  const [grid, updateGrid] = useState(gridv);
  const [foodpos, updateFood] = useState([Math.floor(props.size / 2), Math.floor(props.size / 2)]);
  const [snakepos, updateSnake] = useState([[Math.floor(props.size / 2) + 1, Math.floor(props.size / 2) + 1]]);
  const [snakedir, updateDir] = useState(1);
  const [gridSize,setGridSize]=useState(2);
  //1 left
  //3 right
  //2 down
  //4 up 
  document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 37:
        updateDir(1);
        break;
      case 38:
        updateDir(4);
        break;
      case 39:
        updateDir(3);
        break;
      case 40:
        updateDir(2);
        break;
    }
    // console.log(snakedir);

  });

  useEffect(() => {
    //game timer
    const interval = setInterval(() => {

      if (gameOver == 1)
        return () => clearInterval(interval);
      // console.log(snakepos);

      snakepos.push(addNewPos(snakedir, snakepos[snakepos.length - 1], props.size));
      let lastpos = snakepos[snakepos.length - 1];
      //check if food is eaten
      if (lastpos[0] == foodpos[0] && lastpos[1] == foodpos[1]) {
        updateScore(score + 1);
        let newX = Math.floor(Math.random() * props.size);
        let newY = Math.floor(Math.random() * props.size);
        updateFood([newX, newY]);
      } else {
        snakepos.shift();
      }

      let countcollision = 0;
      snakepos.forEach(element => {
        if (element[0] == snakepos[snakepos.length - 1][0] && element[1] == snakepos[snakepos.length - 1][1])
          countcollision += 1;
      });
      if (countcollision > 1) {
        gameOver = 1;

        document.removeEventListener('keydown', () => { });

        let gridv = new Array();
        for (let row = 0; row < props.size; row++) {
          let temp = new Array();
          for (let col = 0; col < props.size; col++) {
            temp.push(0);
          }
          gridv.push(temp);
        }
        for (let row = 0; row < props.size; row++) {
          for (let col = 0; col < props.size; col++) {
            gridv[row][col] = 3;
            // setTimeout(() => { updateGrid(gridv) }, 1000);
          }

        }
        updateGrid(gameOvergrid)

        return;
      }
      // console.log(gameOver);
      // if (snakepos[0] >= 0 && snakepos[0] < 10 && snakepos[1] >= 0 && snakepos[1] < 10) 
      {
        updateSnake(snakepos);
        // console.log("move");
        updateGrid(processArray(snakepos, foodpos, props.size));
      }
    }, 100);
    return () => clearInterval(interval);
  });


  return (
    <div>
      <div className="gameBox">
        <label className="scoreBoard">Score:<br/><label className="score">{score}</label></label>
        {/* <br></br> */}
        <div className="controlPanel">
        <button className="panelButton gridSizeDec" onClick={()=>{setGridSize(limitWrapChecker(1,3,gridSize-1))}}>-</button>
        <button className="panelButton gridSizeInc" onClick={()=>{setGridSize(limitWrapChecker(1,3,gridSize+1))}}>+</button>
        {/* <button className="toggleGrid"></button>   */}
        </div>
        <div className={"Board size"+gridSize}>
          {grid.map((ind) =>
            <Row rowval={ind} />
          )}

        </div>
      </div>
    </div>
  );
}

export default App;
