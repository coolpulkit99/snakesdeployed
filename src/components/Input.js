import React from 'react';
import App from './../App';
import ReactDOM from 'react-dom';


function setSize(){
    // alert(document.getElementById("sizebox").value);
    // console.log(document.getElementById("sizebox").value);
    
ReactDOM.render(
    <React.StrictMode>
            
      <App id="boardgame" size={document.getElementById("sizebox").value} />

    </React.StrictMode>,
    document.getElementById('root')
  );

}

function Input(props) {
  return (
    <div>
      <input id="sizebox" placeholder="Size..."></input>
      <button onClick={setSize}>Start Game</button>
    </div>
  );
}

export default Input;
