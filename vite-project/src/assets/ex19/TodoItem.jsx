import styles from "./TodoItem.module.css";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div
      className={`${styles.todoItem} ${
        todo.completed ? styles.completedItem : ""
      }`}
    >
      <div className={styles.leftSide}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <span
          className={`${styles.todoText} ${
            todo.completed ? styles.completedText : ""
          }`}
        >
          {todo.text}
        </span>
      </div>

      {todo.completed && (
        <button
          className={styles.deleteButton}
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default TodoItem;