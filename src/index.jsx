import React from 'react';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

import Title from './components/Title.jsx';

const App = () => {

  return (
    <div id="app">
      <Title />
    </div>
  )
}

root.render(<App />);