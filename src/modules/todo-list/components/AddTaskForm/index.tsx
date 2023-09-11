import React from 'react';
import { Task, TaskPriority, TaskStatus } from '../../models';
import { v4 as uuidv4 } from 'uuid';
import { useTaskStore } from '../../stores/useTaskStore';
import styles from './styles.module.css';

const initialTaskValues = {
  id: '',
  title: '',
  description: '',
  status: 'uncompleted' as TaskStatus,
  priority: 'low' as TaskPriority,
};

export const AddTaskForm: React.FC = () => {
  const addNewTask = useTaskStore((state) => state.addNewTask);
  const [newTask, setNewTask] = React.useState<Task>(initialTaskValues as Task);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setNewTask({ ...newTask, [e.target.name]: e.target.value });

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask({
      ...newTask,
      id: uuidv4(),
    });
    setNewTask(initialTaskValues);
  };

  return (
    <form onSubmit={submitForm} className={styles.form}>
      <input
        onChange={handleInputValue}
        placeholder="Title"
        className={styles.input}
        required
        type="text"
        name="title"
        value={newTask.title}
      />
      <input
        onChange={handleInputValue}
        placeholder="Description"
        className={styles.input}
        required
        type="text"
        name="description"
        value={newTask.description}
      />
      <select
        name="priority"
        onChange={handleInputValue}
        className={styles.input}
        value={newTask.priority}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button className={styles.btn} type="submit">
        Add
      </button>
    </form>
  );
};
