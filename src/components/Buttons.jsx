import React, { useState, useEffect } from 'react';

const Buttons = (props) => {

  return (
    <div id="button-div">
      <button style={{color: 'red'}}> Red </button>
      <button style={{color: 'blue'}}> Blue </button>
      <button style={{color: 'green'}}> Green </button>
    </div>
  )
}

export default Buttons;