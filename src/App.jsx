import React, { useState } from 'react';
import './App.css';

function App() {
  const [buttonPosition, setButtonPosition] = useState({ left: '700px', top: '500px' });

  const moveButton = () => {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setButtonPosition({ left: newX + 'px', top: newY + 'px' });
  };

  const stopButtonMovement = () => {
    setButtonPosition({ display: 'none' });
  };

  const getFlag = () => {
    document.getElementById('get-flag').style.display = 'block';
    document.getElementById('flag-text').innerHTML = `${import.meta.env.VITE_FLAG}`;
  };
  const getflag = () => {
    document.getElementById('get-flag').style.display = 'block';
    document.getElementById('get-flag').href = `${import.meta.env.VITE_DEATH_NOTE}`;
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements['death-note-input'].value.toLowerCase();
    if (inputValue === 'javascript') {
      stopButtonMovement();
    }
    if (inputValue === "button movement dies and settles below this input") {
      getFlag();
      stopButtonMovement();
    }
    if (inputValue === "get flag") {
      getflag();
      stopButtonMovement();
    }
  };

  return (
    <div>
      <h1>how NITK profs be using attendance register against students</h1>
      <img
        src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/10/Featured-Image-9.jpg"
        width="560"
        height="560"
        alt="why would you do that?"
      />
      <h3 id="flag-text">what will you write in the DEATH NOTE if you had it?</h3>
      <button
        id="download-button"
        onMouseEnter={moveButton}
        style={buttonPosition}
      >
        Download Flag
      </button>
      <a id="get-flag" style={{ display: 'none' }} href="">
        Flag :)
      </a>
      <form id="death-note-form" onSubmit={handleFormSubmit}>
        <label htmlFor="death-note-input">Death Note:</label>
        <input type="text" id="death-note-input" name="death-note-input" />
        <input type="submit" value="Submit" id='flag-submit' />
      </form>
    </div>
  );
}

export default App;
