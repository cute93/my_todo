import type { Todo } from '../types/todo';
import styles from './TodoItem.module.css';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function formatCreatedAt(createdAt: number): string {
  const date = new Date(createdAt);
  const now = new Date();
  const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (date >= todayMidnight) {
    return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false });
  }
  return date.toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' });
}

export function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className={styles.checkbox}
      />
      <span className={`${styles.text} ${todo.completed ? styles.completed : ''}`}>
        {todo.text}
      </span>
      <span className={styles.time}>{formatCreatedAt(todo.createdAt)}</span>
      <button className={styles.delete} onClick={() => onDelete(todo.id)}>
        ✕
      </button>
    </li>
  );
}
