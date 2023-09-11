import React from 'react';
import { Task } from '../models';
import { FaTrashCan } from 'react-icons/fa6';
import styles from './styles.module.css';

export const TaskItem: React.FC<Task> = ({ title, description, status, priority }) => {
  const statusColor = status === 'completed' ? styles.completed : styles.uncompleted;

  return (
    <div className={styles.task}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.container}>
        <button type="button">{}</button>
        <p className={styles.description}>{description}</p>
        <p className={[styles.status, statusColor].join(' ')}>{status}</p>
        <p className={styles.priority}>{priority}</p>
        <button type="button">
          <FaTrashCan />
        </button>
      </div>
    </div>
  );
};
