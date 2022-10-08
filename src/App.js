import { useState } from "react";
import "./App.css";

import useLocalStorage from "./lib/hooks/useLocalStorage";

//{
//  name:"correr",
//   id:0,
//   status:true
//   description:""
//}

function App() {
  const [todos, setTodos] = useLocalStorage("todos", [
    { name: "caminar", id: 200, descripcion: "a las 4 pm", status: false },
  ]);

  const [name, setName] = useState("");
  const [descripcion, setDescription] = useState("");
  const [id, setId] = useState(1);

  const [error, setError] = useState(false);

  const handleDeleTodo = (todoToDelete) =>
    setTodos(todos.filter(({ id }) => id !== todoToDelete));

  const renderTodos = ({ name, id, status, descripcion }) => {
    console.log(id, status);
    return (
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        key={id}
      >
        <div>
          <p>name: {name}</p>
          <p>descripcion: {descripcion}</p>
        </div>
        <input type="checkbox" checked={status} />
        <button onClick={() => handleDeleTodo(id)}>X</button>
      </div>
    );
  };

  const resultRenderTodos = todos.map(renderTodos);
  const handleInput = (event) => {
    setError(false);
    setName(event.target.value);
  };

  const handleInputDescription = (event) => {
    setDescription(event.target.value)
  };

  const handleOnCick = () => {
    if (name === "") {
      setError(true);
      return;
    }
    setTodos([
      ...todos,
      { name: name, status: false, id: id, descripcion: descripcion },
    ]);
    setId(id + 1);
    setName("");
  };

  const handleDeleteAllTodos = () => setTodos([]);

  return (
    <main className="App">
      {error ? <p>no puedes agregar una tarea sin un nombre.</p> : ""}
      <div style={{display:"flex"}}>
        <div style={{display:"flex", flexDirection:"column"}}>
          <input onChange={handleInput} value={name} placeholder="name"></input>
          {name?<textarea onChange={handleInputDescription} value={descripcion} placeholder="description"></textarea>:""}
        </div>
        <button onClick={handleOnCick}>Add</button>
        <button onClick={handleDeleteAllTodos}>Delete All</button>
      </div>
      <div>{resultRenderTodos}</div>
    </main>
  );
}

export default App;
