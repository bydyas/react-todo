import React from 'react';
import { useTaskStore } from '../../stores/useTaskStore';
import styles from './styles.module.css';

export const SearchTaskBar: React.FC = () => {
  const searchTaskByTitle = useTaskStore((state) => state.searchTaskByTitle);
  const searchForTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchTaskByTitle(e.target.value);
  };

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
