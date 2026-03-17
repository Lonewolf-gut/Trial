import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default function CounterOne() {
  const [count, setCount] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount("INCREMENT")}>Increment</button>
      <button onClick={() => setCount("DECREMENT")}>Decrement</button>
    </div>
  );
}
