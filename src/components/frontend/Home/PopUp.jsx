import React, { useState } from 'react';

function Popup() {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Welcome to our website!</h2>
        <p>Please sign up to receive our newsletter.</p>
        <button>Sign up</button>
      </div>
    </div>
  );
}

function App2() {
  const [showPopup, setShowPopup] = useState(true);

  function closePopup() {
    setShowPopup(false);
  }

  return (
    <div className="app">
      {showPopup ? <Popup /> : null}
      <h1>Welcome to our website</h1>
      <p>Some content here...</p>
      <button onClick={closePopup}>Close Popup</button>
    </div>
  );
}

export default App2;
