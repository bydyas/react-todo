import React from 'react';
import { useTaskStore } from '../../stores/useTaskStore';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Task } from '../../models';
import { FaArrowLeft } from 'react-icons/fa6';
import styles from './styles.module.css';

export const TaskPage: React.FC = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { tasks, editTask } = useTaskStore((state) => ({
    tasks: state.tasks,
    editTask: state.editTask,
  }));
  const task = tasks.filter((task) => task.id === taskId)[0];
  const statusColor = task.status === 'uncompleted' ? styles.unc : styles.c;
  const [updatedTask, setupdatedTask] = React.useState<Task>(task);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setupdatedTask({ ...updatedTask, [e.target.name]: e.target.value });

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editedTask = {
      id: task.id,
      status: task.status,
      title: updatedTask.title,
      description: updatedTask.description,
      priority: updatedTask.priority,
    };
    editTask(editedTask);
    navigate('/');
  };

  return (
    <div className={styles.root}>
      <Link to="/" className={styles.goHome}>
        <FaArrowLeft />
      </Link>
      <h2 className={styles.heading}>
        Task #{task.id}: <span className={statusColor}>{task.status}</span>
      </h2>
      <form className={styles.form} onSubmit={submitForm}>
        <label className={styles.lbl}>
          <span>Title: </span>
          <input
            onChange={handleInputValue}
            className={styles.input}
            type="text"
            name="title"
            value={updatedTask.title}
          />
        </label>
        <label className={styles.lbl}>
          <span>Description: </span>
          <input
            onChange={handleInputValue}
            className={styles.input}
            type="text"
            name="description"
            value={updatedTask.description}
          />
        </label>
        <label className={styles.lbl}>
          <span>Priority: </span>
          <select
            className={styles.input}
            onChange={handleInputValue}
            name="priority"
            value={updatedTask.priority}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button className={styles.btn} type="submit">
          Edit & Save
        </button>
      </form>
    </div>
  );
};
