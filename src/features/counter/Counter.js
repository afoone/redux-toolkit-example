import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Decrement Value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment Value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>

      <button
        aria-label="Plus 5"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        +5
      </button>
    </div>
  );
};

export default Counter;
