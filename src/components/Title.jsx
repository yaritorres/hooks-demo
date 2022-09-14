import React, { useState, useEffect } from 'react';
import Buttons from '../components/Buttons.jsx';

const Title = (props) => {
  const [color, setColor] = useState('purple');

  useEffect(() => {
    console.log('mounting');

    if (color === 'purple') {
      setColor('orange');
    }

    return () => { console.log('unmounting'); }
  })

  return (
    <div id="title-div">
      <h1 style={{color: color}} onClick={() => { setColor('orange') }}> This is a title. </h1>
      <Buttons setColor={setColor} />
    </div>
  )
}

export default Title;