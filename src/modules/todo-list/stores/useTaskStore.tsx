import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Task } from '../models';

interface TaskState {
  tasks: Task[];
  query: string;
  addNewTask: (newTask: Task) => void;
  removeTaskById: (id: string) => void;
  editTask: (editedTask: Task) => void;
  completeTaskById: (id: string) => void;
  setQuery: (q: string) => void;
}

export const useTaskStore = create<TaskState>()(
  devtools(
    persist(
      (set, get) => ({
        tasks: [],
        query: '',
        addNewTask: (newTask: Task) => set((state) => ({ tasks: [...state.tasks, newTask] })),
        removeTaskById: (id: string) =>
          set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
        editTask: (editedTask) => {
          useTaskStore.getState().removeTaskById(editedTask.id);
          useTaskStore.getState().addNewTask(editedTask);
        },
        completeTaskById: (id: string) => {
          const task = get().tasks.filter((task) => task.id === id)[0];
          const editedTask = {
            ...task,
            status: 'completed',
          } as Task;
          useTaskStore.getState().removeTaskById(task.id);
          useTaskStore.getState().addNewTask(editedTask);
        },
        setQuery: (q: string) => set({ query: q }),
      }),
      { name: 'taskStore' },
    ),
  ),
);
