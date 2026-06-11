import { useState } from "react";
import TodoInput from "./TodoInput";
// import TodoItem from "./TodoItem";
import styles from "./TodoApp.module.css";
import TodoItem from './TodoItem'

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "hey whtsapp", completed: false },
    { id: 2, text: "how are yu doing", completed: true },
    { id: 3, text: "This is cool right ?", completed: false },
  ]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className={styles.page}>
      <div className={styles.todoCard}>
        <h1 className={styles.title}>My Todo List</h1>

        <TodoInput onAddTodo={addTodo} />

        <div className={styles.todoList}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;