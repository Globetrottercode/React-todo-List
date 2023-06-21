import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import "../index.css";
import * as Sentry from "@sentry/react";

// function FallbackComponent() {
//   return <div>An error has occurred</div>;
// }

// const myFallback = <FallbackComponent />;

function App() {
  const [items, setItems] = useState([
    "Buy Eggs",
    "Exercise 30 mins",
    "Clean Dishes",
  ]);

  function addItem(inputText) {
    setItems((prevItems) => {
      console.log(prevItems);
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />

      <div>
        <ul>
          {items.map((todoItem, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                text={todoItem}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sentry.withProfiler(App);
