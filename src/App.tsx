import { TaskItem } from './modules/todo-list/components/TaskItem';

function App() {
  return (
    <div className="container">
      <TaskItem title="Shopping" description="Buy new shoes" priority="high" status="uncompleted" />
    </div>
  );
}

export default App;
