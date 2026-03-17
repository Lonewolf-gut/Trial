import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, firstCounter: state.firstCounter + 1 };
    case "DECREMENT":
      return { ...state, firstCounter: state.firstCounter - 1 };
    case "RESET":
      return { ...state, firstCounter: initialState.firstCounter };
    default:
      return state;
  }
};

export default function CounterOne() {
  const [count, setCount] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {count.firstCounter}</h2>
      <button onClick={() => setCount({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => setCount({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => setCount({ type: "RESET" })}>Reset</button>
    </div>
  );
}
