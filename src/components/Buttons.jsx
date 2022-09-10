import React, { useState, useEffect } from 'react';

const Buttons = (props) => {

  return (
    <div id="button-div">
      <button style={{color: 'red'}} onClick={() => { props.setColor('red') }}> Red </button>
      <button style={{color: 'blue'}} onClick={() => { props.setColor('blue') }}> Blue </button>
      <button style={{color: 'green'}} onClick={() => { props.setColor('green') }}> Green </button>
    </div>
  )
}

export default Buttons;