import React, { useReducer } from "react";
//loading with the counter tool
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
//defining the function to actually run the counter and using the useReducer hook to manage the state of the counter.
export default function CounterOne() {
  const [count, setCount] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount("INCREMENT")}>Increment</button>
      <button onClick={() => setCount("DECREMENT")}>Decrement</button>
      <button onClick={() => setCount("RESET")}>Reset</button>
    </div>
  );
}
