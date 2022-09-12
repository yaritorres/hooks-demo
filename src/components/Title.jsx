import React, { useState, useEffect } from 'react';
import Buttons from '../components/Buttons.jsx';

const Title = (props) => {
  const [color, setColor] = useState('purple');

  // useEffect(() => {
  //   console.log('mounting');

  //   setColor('green');

  //   return () => { console.log('unmounting'); }
  // })

  return (
    <div id="title-div">
      <h1 style={{color: color}} onClick={() => { setColor('purple') }}> This is a title. </h1>
      <Buttons setColor={setColor} index={index} setIndex={setIndex} passedArr={colorArr[index]} colorArr={colorArr} />
    </div>
  )
}

export default Title;