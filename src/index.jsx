import React from 'react';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

import Title from './components/Title.jsx';
import Buttons from './components/Buttons.jsx'

const App = () => {

  return (
    <div>
      <Title />
      <Buttons />
    </div>
  )
}

root.render(<App />);