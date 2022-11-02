import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="container">
      <div className="counter">
        <button className="button" onClick={decrease}>
          -
        </button>
        <div className="number">{counter}</div>
        <button className="button" onClick={increase}>
          +
        </button>
      </div>
      <button
        className="reset"
        onClick={() => {
          setCounter(counter - counter);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
