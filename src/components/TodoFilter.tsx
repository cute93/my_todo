import type { FilterType } from '../types/todo';
import styles from './TodoFilter.module.css';

interface Props {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FILTERS: { value: FilterType; label: string }[] = [
  { value: 'all', label: '전체' },
  { value: 'active', label: '진행 중' },
  { value: 'completed', label: '완료' },
];

export function TodoFilter({ filter, onFilterChange }: Props) {
  return (
    <div className={styles.wrapper}>
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          className={`${styles.tab} ${filter === value ? styles.active : ''}`}
          onClick={() => onFilterChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
