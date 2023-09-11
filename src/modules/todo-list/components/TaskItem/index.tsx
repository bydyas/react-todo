import React from 'react';
import { Task } from '../../models';
import { FaTrashCan } from 'react-icons/fa6';
import { useTaskStore } from '../../stores/useTaskStore';
import styles from './styles.module.css';

export const TaskItem: React.FC<Task> = ({ id, title, description, status, priority }) => {
  const removeTaskById = useTaskStore((state) => state.removeTaskById);
  const statusColor = status === 'completed' ? styles.completed : styles.uncompleted;

  return (
    <li className={styles.task}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.container}>
        <p className={styles.description}>{description}</p>
        <div className={styles.details}>
          <p className={[styles.status, statusColor].join(' ')}>{status}</p>
          <p className={styles.priority}>{priority}</p>
          <button onClick={() => removeTaskById(id)} type="button" className={styles.btn}>
            <FaTrashCan />
          </button>
        </div>
      </div>
    </li>
  );
};
