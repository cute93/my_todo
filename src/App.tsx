import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoFilter } from './components/TodoFilter';
import { TodoList } from './components/TodoList';
import styles from './App.module.css';

function App() {
  const { filter, filteredTodos, addTodo, toggleTodo, deleteTodo, setFilter } = useTodos();

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>TODO</h1>
        <TodoInput onAdd={addTodo} />
        <TodoFilter filter={filter} onFilterChange={setFilter} />
        <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </>
  );
}

export default App;
