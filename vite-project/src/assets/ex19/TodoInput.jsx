import { useState } from "react";
import styles from "./TodoInput.module.css";

function TodoInput({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }

    onAddTodo(inputValue);
    setInputValue("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add a new todo..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <button className={styles.addButton} type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoInput;