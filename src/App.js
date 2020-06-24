import React, { useState, useEffect } from 'react';
import './App.css';
import Row from "./components/Row";

function handleGrid() {
  // console.log("/c");

}
function handleKey(e) {

}

//update array with new positions
function processArray(snakepos, foodpos) {
  let gridv = new Array();
  for (let row = 0; row < 10; row++) {
    let temp = new Array();
    for (let col = 0; col < 10; col++) {
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

function addNewPos(dir, element) {
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
    x = 9;
  if (x > 9)
    x = 0;
  if (y < 0)
    y = 9;
  if (y > 9)
    y = 0;
  return [x, y];
}

let gameOver = 0;
//main react component
function App() {

  let gridv = new Array();
  for (let row = 0; row < 10; row++) {
    let temp = new Array();
    for (let col = 0; col < 10; col++) {
      temp.push(0);
    }
    gridv.push(temp);
  }
  //inital positions 
  gridv[4][4] = 2;
  gridv[5][5] = 1;
  //1 is snake
  //2 is food

  const [score, updateScore] = useState(0);
  const [grid, updateGrid] = useState(gridv);
  const [foodpos, updateFood] = useState([4, 4]);
  const [snakepos, updateSnake] = useState([[5, 5]]);
  const [snakedir, updateDir] = useState(1);
  //1 left
  //3 right
  //2 down
  //4 up 
  document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 37:
        updateDir(1);
        break;
      case 38: updateDir(4);
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
      
      snakepos.push(addNewPos(snakedir, snakepos[snakepos.length - 1]));
      let lastpos = snakepos[snakepos.length - 1];
      //check if food is eaten
      if (lastpos[0] == foodpos[0] && lastpos[1] == foodpos[1]) {
        updateScore(score + 1);
        let newX = Math.floor(Math.random() * 10);
        let newY = Math.floor(Math.random() * 10);
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
        for (let row = 0; row < 10; row++) {
          let temp = new Array();
          for (let col = 0; col < 10; col++) {
            temp.push(0);
          }
          gridv.push(temp);
        }
        for (let row = 0; row < 10; row++) {
          for (let col = 0; col < 10; col++) {
            gridv[row][col] = 2;
            setTimeout(() => { updateGrid(gridv) }, 100);
          }

        }

        return;
      }
      console.log(gameOver);
      // if (snakepos[0] >= 0 && snakepos[0] < 10 && snakepos[1] >= 0 && snakepos[1] < 10) 
      {
        updateSnake(snakepos);
        // console.log("move");
        updateGrid(processArray(snakepos, foodpos));
      }
    }, 100);
    return () => clearInterval(interval);
  });


  return (
    <div>
      <label>Score:{score}</label>
      <div className="Board">
        {grid.map((ind) =>
          <Row rowval={ind} />
        )}

      </div>
    </div>
  );
}

export default App;
