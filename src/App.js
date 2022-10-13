import { useState } from "react";
import "./App.css";

import useLocalStorage from "./lib/hooks/useLocalStorage";

import Todo from "./Todo/Todo";

//{
//  name:"correr",
//   id:0,
//   status:true
//   description:"",
//}

function App(nombre = "jaime") {
  const [todos, setTodos] = useLocalStorage("todos", [
    { name: "caminar", id: 200, descripcion: "a las 4 pm", status: false },
  ]);

  const [name, setName] = useState("");
  const [descripcion, setDescription] = useState("");
  const [id, setId] = useLocalStorage("id", 1);

  const [error, setError] = useState(false);

  const handleDeleTodo = (todoToDelete) =>
    setTodos(todos.filter(({ id }) => id !== todoToDelete));

  const handleChangeTodoStatus = (todoToChange) =>
    setTodos(
      todos.map((todo) =>
        todo.id === todoToChange ? { ...todo, status: !todo.status } : todo
      )
    );

  const handleInput = (event) => {
    setError(false);
    setName(event.target.value);
  };

  const handleInputDescription = (event) => {
    setDescription(event.target.value);
  };

  const renderTodos = (todo) => (
    <Todo
      key={todo.id}
      todo={todo}
      handleDeleTodo={handleDeleTodo}
      handleChangeTodoStatus={handleChangeTodoStatus}
    />
  );

  const todosUncompleted = todos.filter((todo)=>!todo.status).map(renderTodos);
  const todosCopleted = todos.filter((todo)=>todo.status).map(renderTodos);
  const todosAll = todos.map(renderTodos);

  const handleOnCick = () => {
    if (name === "") {
      setError(true);
      return;
    }
    setTodos([
      { name: name, status: false, id: id, descripcion: descripcion },
      ...todos,
    ]);
    setId(id + 1);
    setName("");
  };

  const handleDeleteAllTodos = () => setTodos([]);

console.log({todosUncompleted})
console.log({todosCopleted})

  return (
    <main className="App">
      {error ? <p>no puedes agregar una tarea sin un nombre.</p> : ""}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input onChange={handleInput} value={name} placeholder="name"></input>
          {name ? (
            <textarea
              onChange={handleInputDescription}
              value={descripcion}
              placeholder="description"
            ></textarea>
          ) : (
            ""
          )}
        </div>
        <button onClick={handleOnCick}>Add</button>
        <button onClick={handleDeleteAllTodos}>Delete All</button>
      </div>
      <p>Todo's completed</p>
      <div>{todosCopleted}</div>
      <p>Todo's uncompleted</p>
      <div>{todosUncompleted}</div>
      <p>Todo's</p>
      <div>{todosAll}</div>

    </main>
  );
}

export default App;
