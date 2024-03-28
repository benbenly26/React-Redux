import React, { useEffect } from "react";
import "./App.css";
import { todoData } from "./store/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const { dataVal, isLoading, error } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoData());
  }, [dispatch]);

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p style={{ color: "red" }}>Error fetching todos!</p>
      </div>
    );
  }

  return (
    <>
      <div className="App">
        <h2 style={{ color: "blue" }}>Redux</h2>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          dataVal.map((todo) => <p key={todo.id}>{todo.title}</p>)
        )}
      </div>
    </>
  );
}
