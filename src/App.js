import { useState, useRef, useEffect } from "react";
import { Counter } from "./Counter";
import Count from "./Count";

function App() {
  const counter = useRef();
  const [count, setCount] = useState();
  useEffect(() => {
    counter.current = new Counter();
    setCount(counter.current.getCounter());
  }, []);

  const onClickIncrement = (e) => {
    counter.current.incrementCounter();
    setCount(counter.current.getCounter());
  };

  const onClickReset = (e) => {
    counter.current.setCounter(0);
    setCount(counter.current.getCounter());
  };

  return (
    <div>
      <h1>Testing</h1>
      <Count counter={count} />
      <button id="button-increment" onClick={onClickIncrement}>Increment me!</button>
      <button id="button-reset" onClick={onClickReset}>Reset me!</button>
    </div>
  );
}

export default App;
