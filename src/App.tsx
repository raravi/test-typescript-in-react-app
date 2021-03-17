import React, { useState, useRef, useEffect } from "react";
import { Counter } from "./Counter";
import Count from "./Count";

declare class Counter {
  constructor();
  count: number;
  getCounter(): number;
  setCounter(counter: number): void;
  incrementCounter(): void;
}

function App() {
  const counter = useRef<Counter>();
  const [count, setCount] = useState<number>();
  useEffect(() => {
    counter.current = new Counter();
    setCount(counter.current.getCounter());
  }, []);

  const onClickIncrement = (e: React.MouseEvent) => {
    counter.current?.incrementCounter();
    setCount(counter.current?.getCounter());
  };

  const onClickReset = (e: React.MouseEvent) => {
    counter.current?.setCounter(0);
    setCount(counter.current?.getCounter());
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
