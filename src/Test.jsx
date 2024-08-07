import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider';
  
const Test = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",

      }}>
        <h1>Hello</h1>
        <button onClick={toggleTheme}>Theme Switch</button>
      </div>
    </div>
  )
}

export default Test