import React, { Component, useState } from 'react';

import "./room.css";

document.getElementsByTagName("body")[0].style.backgroundColor = "white";

function Room() {
  function turnOff() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    setColor("black");
    setShow(false);
  }

  function turnOn() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    setShow(true);
    if (temp >= 40) {
      setColor("red");
    }
    else if (temp < 40) {
      setColor("blue");
    }
  }

  let [temp, setTemp] = useState(35);
  let [color, setColor] = useState("blue");
  let [show, setShow] = useState(false);

  function increase() {
    setTemp(temp= temp +1);
    if (temp >= 40) {
      setColor("red");
    }
  }

  function decrease() {
    setTemp(temp = temp-1);
    if (temp < 40) {
      setColor("blue");
    }
  }

  return (
    <div className='main-div' >
      <div className='button-div'>
        <button className="on" onClick={turnOn}>ON</button>
        <button className='off' onClick={turnOff}>OFF</button>
      </div>

      <div className='temp'>
        <h3 style={{ "margin-right": "15px" }}>Temperature:</h3>
        <h3 style={{ "color": color }}>{temp} C</h3>
      </div>
      {show ? <div className='controls'>
        <button className='inc' onClick={increase}>+</button>
        <button className='dec' onClick={decrease}>-</button>
      </div> : <></>}
    </div>
  );
}

export default Room;