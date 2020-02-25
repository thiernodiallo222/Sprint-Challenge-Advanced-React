import React from 'react'
import { useDarkMode } from "./Hooks/useDarkMode";
import './Style.css';

export default function NavBar() {
    // const [mode, setMode] = useDarkMode(false);
        const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1 className ="title" >PLAYERS:</h1>
      <button onClick ={toggleMode} className ="toggle-button">Click Me to change mode</button>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
    )
};
