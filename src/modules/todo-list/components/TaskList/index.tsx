import { useTaskStore } from '../../stores/useTaskStore';
import { TaskItem } from '../TaskItem';
import styles from './styles.module.css';

export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div className={styles.list}>
      {!tasks.length
        ? 'No planned tasks'
        : tasks.map((task) => <TaskItem key={task.id} {...task} />)}
    </div>
  );
};
