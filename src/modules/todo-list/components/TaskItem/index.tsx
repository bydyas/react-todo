import React from 'react';
import { Task } from '../../models';
import { FaTrashCan, FaRegFaceLaugh } from 'react-icons/fa6';
import { useTaskStore } from '../../stores/useTaskStore';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const TaskItem: React.FC<Task> = ({ id, title, description, status, priority }) => {
  const { removeTaskById, completeTaskById } = useTaskStore((state) => ({
    removeTaskById: state.removeTaskById,
    completeTaskById: state.completeTaskById,
  }));
  const statusColor = status === 'completed' ? styles.completed : styles.uncompleted;

  return (
    <li className={styles.task}>
      <Link to={`/${id}`}>
        <h3 className={styles.title}>{title}</h3>
      </Link>
      <div className={styles.container}>
        <p className={styles.description}>{description}</p>
        <div className={styles.details}>
          <p className={[styles.status, statusColor].join(' ')}>{status}</p>
          <p className={styles.priority}>{priority}</p>
          {status === 'uncompleted' && (
            <button onClick={() => completeTaskById(id)} type="button" className={styles.compl}>
              <FaRegFaceLaugh />
            </button>
          )}
          <button onClick={() => removeTaskById(id)} type="button" className={styles.delete}>
            <FaTrashCan />
          </button>
        </div>
      </div>
    </li>
  );
};
