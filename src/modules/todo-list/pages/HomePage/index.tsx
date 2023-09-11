import React from 'react';
import { AddTaskForm } from '../../components/AddTaskForm';
import { SearchTaskBar } from '../../components/SearchTaskBar';
import { TaskList } from '../../components/TaskList';
import { Filters } from '../../components/Filters';

export const HomePage: React.FC = () => {
  return (
    <>
      <AddTaskForm />
      <SearchTaskBar />
      <Filters />
      <TaskList />
    </>
  );
};
