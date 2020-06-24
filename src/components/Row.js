import React from 'react';
import "./Row.css"

function Row(props) {
  return (
    <div className="Row">
      {
      props.rowval.map((ind) => {
        return <div className={"cellClass class" + ind}/>
      })
      }
    </div>
  );
}

export default Row;
