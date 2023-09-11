export type TaskPriority = 'high' | 'medium' | 'low';

export type TaskStatus = 'completed' | 'uncompleted';

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
};

export type FilterName = 'status' | 'priority' | 'all';

export type FIlterQuery = (TaskPriority & TaskStatus) | 'all';
