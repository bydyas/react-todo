import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Task } from '../models';

interface TaskState {
  tasks: Task[];
  addNewTask: (newTask: Task) => void;
}

export const useTaskStore = create<TaskState>()(
  devtools(
    persist(
      (set) => ({
        tasks: [],
        addNewTask: (newTask: Task) => set((state) => ({ tasks: [...state.tasks, newTask] })),
      }),
      { name: 'taskStore' },
    ),
  ),
);
