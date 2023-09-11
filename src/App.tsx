import { AddTaskForm } from './modules/todo-list/components/AddTaskForm';
import { SearchTaskBar } from './modules/todo-list/components/SearchTaskBar';
import { TaskList } from './modules/todo-list/components/TaskList';

function App() {
  return (
    <div className="app">
      <AddTaskForm />
      <SearchTaskBar />
      <TaskList />
    </div>
  );
}

export default App;
