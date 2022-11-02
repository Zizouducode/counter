import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(counter - counter);
  };
  return (
    <div className="container">
      <div className="counter">
        <button className="button" onClick={decrease}>
          {counter > 0 ? "-" : ""}
        </button>
        <div className="number">{counter}</div>
        <button className="button" onClick={increase}>
          {counter > 9 ? "" : "+"}
        </button>
      </div>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
