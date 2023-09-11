import { useTaskStore } from '../../stores/useTaskStore';
import { TaskItem } from '../TaskItem';
import styles from './styles.module.css';

export const TaskList = () => {
  const searchedTasks = useTaskStore((state) => state.searchedTasks);

  return (
    <div className={styles.list}>
      {!searchedTasks.length
        ? 'No planned tasks'
        : searchedTasks.map((task) => <TaskItem key={task.id} {...task} />)}
    </div>
  );
};
