import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  posts: [],
  loading: true,
  error: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, posts: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data,
          loading: false,
        });
      } catch (err) {
        dispatch({
          type: "FETCH_ERROR",
          payload: err.message,
          loading: false,
        });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {state.loading && <div>Loading...</div>}
      {state.error && <div>Error: {state.error}</div>}
      {state.posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default DataFetchingTwo;
