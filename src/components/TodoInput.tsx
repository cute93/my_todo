import { useState } from 'react';
import styles from './TodoInput.module.css';

interface Props {
  onAdd: (text: string) => void;
}

export function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState('');

  function handleSubmit() {
    onAdd(value);
    setValue('');
  }

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        placeholder="할 일을 입력하세요"
      />
      <button className={styles.button} onClick={handleSubmit}>
        추가
      </button>
    </div>
  );
}
