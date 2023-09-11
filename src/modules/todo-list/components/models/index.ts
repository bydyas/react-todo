export type TaskPriority = 'high' | 'medium' | 'low';

export type TaskStatus = 'completed' | 'uncompleted';

export type Task = {
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
};
