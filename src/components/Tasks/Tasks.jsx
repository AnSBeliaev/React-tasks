import './styles.css';
import { useState } from "react";

export const Task = () => {
  const [todosList, setTodosList] = useState([]);
  const [currentTodoTitle, setCurrentTodoTitle] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleAddTask = () => {
    if (currentTodoTitle.trim() === "") {
      setHasError(true);
      return;
    };
    const newTask = {
      id: Date.now(),
      title: currentTodoTitle,
      checked: false,
    }
    setTodosList((prev) => [...prev, newTask])
    setCurrentTodoTitle("");
    setHasError(false);
  }

  const handleChangeTitle = (event) => {
    setCurrentTodoTitle(event.target.value)
  }

  const handleCheckTodo = (id) => {
    setTodosList((prev) => {
      return prev.map((currentTodo) => {
      if (currentTodo.id === id) {
        return {
          ...currentTodo,
          checked: !currentTodo.checked,
        }
      } else return currentTodo;
    })
    })
  }

  const handleDeleteTask = (id) => {
    setTodosList((prev) => prev.filter((todo) => todo.id !== id))
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
        {todosList.map((todoItem) => {
          return (
            <div key={todoItem.id} className={todoItem.checked ? "completed" : ""}>
              <input type="checkbox" checked={todoItem.checked} onChange={() => handleCheckTodo(todoItem.id)}/>
              {todoItem.title}
              <button onClick={() => handleDeleteTask(todoItem.id)}>Удалить</button>
            </div>
          )
        })}
      <input value={currentTodoTitle} onChange={handleChangeTitle} onKeyDown={handleKeyDown} className={hasError ? "input-error" : ""}/>
      <button onClick={handleAddTask}>Добавить</button>
    </div>
  );
}