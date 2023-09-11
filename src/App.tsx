import { Route, Routes } from 'react-router-dom';
import { HomePage } from './modules/todo-list/pages/HomePage';
import { TaskPage } from './modules/todo-list/pages/TaskPage';

function App() {
  return (
    <div className="app">
      <h1 className="heading">Task Manager</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:taskId" element={<TaskPage />} />
      </Routes>
    </div>
  );
}

export default App;
