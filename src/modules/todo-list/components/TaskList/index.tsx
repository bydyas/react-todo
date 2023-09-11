import { useTaskStore } from '../../stores/useTaskStore';
import { TaskItem } from '../TaskItem';
import { FaRegPenToSquare } from 'react-icons/fa6';
import styles from './styles.module.css';

export const TaskList = () => {
  const searchedTasks = useTaskStore((state) => state.searchedTasks);

  const placeholder = (
    <div className={styles.placeholder}>
      <p>No tasks yet</p>
      <br />
      <FaRegPenToSquare />
    </div>
  );

  return (
    <div className={styles.list}>
      {!searchedTasks.length
        ? placeholder
        : searchedTasks.map((task) => <TaskItem key={task.id} {...task} />)}
    </div>
  );
};
