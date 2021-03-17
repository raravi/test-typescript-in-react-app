import React from "react";

const Count = ({ counter }: {counter: number | undefined}) => {
  return (
    <p>{'Counter: '}<span id="counter">{counter}</span></p>
  );
};

export default Count;