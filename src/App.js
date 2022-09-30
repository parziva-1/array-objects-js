import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");


  const renderTodos = (todo) => <div>{todo.name}</div>;
  const resultRenderTodos = todos.map(renderTodos)

  const handleInput = (event)=> setText(event.target.value)

  const handleOnCick = ()=>setTodos([...todos,text])

  return (
    <main className="App">
      <div>
        <input onChange={handleInput} value={text}></input>
        <button onClick={handleOnCick}>Add</button>
      </div>
      <div>{resultRenderTodos}</div>
    </main>
  );
}

export default App;
