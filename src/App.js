import { useState } from "react";
import "./App.css";

//{
//  name:"correr",
//   id:0,
//   status:true
//}

function App() {
  const [todos, setTodos] = useState([{ name: "correr", id: 0, status: true }]);
  const [text, setText] = useState("");
  const [id, setId] = useState(1);

  const handleDeleTodo = (todoToDelete) =>
    setTodos(todos.filter(({ id }) => id !== todoToDelete));
    
  const renderTodos = ({ name, id, status }) => {
    console.log(id, status);
    return (
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        key={id}
      >
        {name}
        <input type="checkbox" value={status} />
        <button onClick={() => handleDeleTodo(id)}>X</button>
      </div>
    );
  };

  const resultRenderTodos = todos.map(renderTodos);
  const handleInput = (event) => setText(event.target.value);

  const handleOnCick = () => {
    setTodos([...todos, { name: text, status: true, id: id }]);
    setId(id + 1);
    setText("");
  };

  const handleDeleteAllTodos = () => setTodos([]);

  return (
    <main className="App">
      <div>
        <input onChange={handleInput} value={text}></input>
        <button onClick={handleOnCick}>Add</button>
        <button onClick={handleDeleteAllTodos}>Delete All</button>
      </div>
      <div>{resultRenderTodos}</div>
    </main>
  );
}

export default App;
