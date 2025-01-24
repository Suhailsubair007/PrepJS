import React, { useRef } from 'react';

const InputTracker = () => {
  const inputRef = useRef(); // Create a reference to the input element
  const outputRef = useRef(''); // Store the current input value

  const handleChange = () => {
    outputRef.current = inputRef.current.value; // Update the outputRef with the current input value
    document.getElementById('output').textContent = outputRef.current; // Update the output dynamically
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Track Input with useRef</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        onChange={handleChange}
      />
      <p id="output" style={{ marginTop: '10px', fontWeight: 'bold' }}></p>
    </div>
  );
};

export default InputTracker;
