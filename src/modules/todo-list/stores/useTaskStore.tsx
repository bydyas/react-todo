import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Task } from '../models';

interface TaskState {
  tasks: Task[];
  searchedTasks: Task[];
  addNewTask: (newTask: Task) => void;
  removeTaskById: (id: string) => void;
  searchTaskByTitle: (title: string) => void;
}

export const useTaskStore = create<TaskState>()(
  devtools(
    persist(
      (set) => ({
        tasks: [],
        searchedTasks: [],
        addNewTask: (newTask: Task) =>
          set((state) => ({
            tasks: [...state.tasks, newTask],
            searchedTasks: [...state.tasks, newTask],
          })),
        removeTaskById: (id: string) =>
          set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
            searchedTasks: state.tasks.filter((task) => task.id !== id),
          })),
        searchTaskByTitle: (title: string) =>
          set((state) => {
            if (!title) {
              return { searchedTasks: state.tasks };
            } else {
              return {
                searchedTasks: state.tasks.filter((task) =>
                  task.title.toLowerCase().includes(title.toLowerCase()),
                ),
              };
            }
          }),
      }),
      { name: 'taskStore' },
    ),
  ),
);
