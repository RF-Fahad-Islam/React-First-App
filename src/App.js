import Header from "./MyComponents/Header.js";
import { AddTodo } from "./MyComponents/AddTodo.js";
import Todos from "./MyComponents/Todos.js";
import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
      );
    };
      if (localStorage.getItem("todos") !== null) {
      setTodos(JSON.parse(localStorage.getItem("todo")));
    }

    const addTodo = (title, desc) => {
      let sno;
      if (todos.length === 0) {
        sno = 0;
      } else {
        sno = todos[todos.length - 1].sno + 1;
      }
      let myTodo = {
        sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  return (
    <>
      <Header title="Todo List App" searchbar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
