import React from "react";

const Count = ({counter}) => {
  return (
    <p>{'Counter: '}<span id="counter">{counter}</span></p>
  );
};

export default Count;