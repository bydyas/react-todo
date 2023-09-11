import { AddTaskForm } from './modules/todo-list/components/AddTaskForm';
import { TaskList } from './modules/todo-list/components/TaskList';

function App() {
  return (
    <div className="app">
      <AddTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
