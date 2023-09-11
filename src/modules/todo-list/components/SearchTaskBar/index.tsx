import React from 'react';
import { useTaskStore } from '../../stores/useTaskStore';
import styles from './styles.module.css';

export const SearchTaskBar: React.FC = () => {
  const setQuery = useTaskStore((state) => state.setQuery);
  const searchForTask = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  return (
    <form className={styles.form}>
      <input
        onChange={searchForTask}
        className={styles.input}
        type="text"
        placeholder="Searching for the task..? Type its title"
      />
    </form>
  );
};
