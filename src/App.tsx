import React, { useState } from "react";
import "./App.css";

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

const App = (): JSX.Element => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  const addTodo = (text: string) => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default App;
