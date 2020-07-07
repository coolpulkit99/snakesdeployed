import React from 'react';
import App from './../App';
import ReactDOM from 'react-dom';
import './Input.css';



function setSize(){
    // alert(document.getElementById("sizebox").value);
    // console.log(document.getElementById("sizebox").value);
    if(document.getElementById("sizebox").value<3)
    {
      alert("Size should be greater than 2");
      return;
    }
ReactDOM.render(
    <React.StrictMode>
            
      <App id="boardgame" size={document.getElementById("sizebox").value} />

    </React.StrictMode>,
    document.getElementById('root')
  );

}

function Input(props) {
  return (
    <div class="inputbox">
      <label class="labelSize">Snake Game</label>
      <br/>
      <input class="inputSize" id="sizebox" placeholder="Size..."></input>
      <button class="inputSubmit" onClick={setSize}>Start Game</button>
    </div>
  );
}

export default Input;