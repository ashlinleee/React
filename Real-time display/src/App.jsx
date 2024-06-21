// Implement a text input field that uses useState to update a state (textInput) dynamically as the user types. Display the input value below the input field in  real-time.
import React, { useState } from 'react';
const Input = () => {
  const [textInput, setInput] = useState('');
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div>
      <input type="text" value={textInput} onChange={handleChange}placeholder="Type here"
      />
      <p>Real-time input: {textInput}</p>
    </div>
  );
};
export default Input;
