import React, { useReducer, useState } from "react";

const Action = {
  ADD_TODO: "add_todo",
};
const reduce = (todos, action) => {
  switch (action.type) {
    case Action.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
  }
};
function newTodo(name) {
  return { id: Date.new(), name: name, complete: false };
}
const usereduce = () => {
  const [state, dispatch] = useReducer(reduce, []);
  const [name, setName] = useState("");

  function handleSubmit() {
    dispatch({ type: ADD_TODO, payload: { name: name } });
    console.warn("Todo will display ", name);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};

export default usereduce;
