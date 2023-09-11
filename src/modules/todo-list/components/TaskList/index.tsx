import { useTaskStore } from '../../stores/useTaskStore';
import { TaskItem } from '../TaskItem';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { Task } from '../../models';
import styles from './styles.module.css';

export const TaskList = () => {
  const { tasks, query, filterQuery } = useTaskStore((state) => ({
    tasks: state.tasks,
    query: state.query,
    filterQuery: state.filterQuery,
  }));
  const completedTasks = tasks.filter((task) => task.status === 'completed');

  const search = (arr: Task[]) => {
    return arr.filter((item: Task) => item.title.toLowerCase().includes(query.toLowerCase()));
  };

  const filter = (arr: Task[]) => {
    return arr.filter((item: Task) => {
      if (filterQuery === 'all') {
        return item;
      } else {
        return item.priority === filterQuery;
      }
    });
  };

  const placeholder = (
    <div className={styles.placeholder}>
      <p>No tasks yet</p>
      <br />
      <FaRegPenToSquare />
    </div>
  );

  return (
    <div className={styles.list}>
      <div className={styles.details}>
        <p>All: {tasks.length}</p>
        <p>Completed: {completedTasks.length}</p>
      </div>
      {!tasks.length
        ? placeholder
        : filter(search(tasks)).map((task) => <TaskItem key={task.id} {...task} />)}
    </div>
  );
};
