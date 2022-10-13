import React from "react";

function Todo({todo, handleDeleTodo, handleChangeTodoStatus}) {

const {id, name, descripcion, status} = todo;

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <p>name: {name}</p>
        <p>descripcion: {descripcion}</p>
      </div>
      <input type="checkbox" checked={status} onChange={()=>handleChangeTodoStatus(id)}/>
      <button onClick={()=>handleDeleTodo(id)}>X</button>
    </div>
  );
}

export default Todo;
