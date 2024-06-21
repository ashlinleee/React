/* Create a toggle button component in React using the `useState` hook.The button should switch between "ON" and "OFF" states and display the current state dynamically.  Write the code for this component and explain how state management is handled. */

import React, { useState } from 'react';
const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);
    const toggle = () => {
    setIsOn(!isOn);
  };
  return (
    <button onClick={toggle}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
};
export default ToggleButton;

// Explanation for state management:
//useState hook manages the component's state. intially it is set to false
// when the button is clicked the toggle function is called and updates state using setIsOn.
// react rerenders the component when state changes so the text on the button changes bases on current state (On or Off)

