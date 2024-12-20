// import { Route, Routes } from 'react-router-dom';
// import { HomePage } from './modules/todo-list/pages/HomePage';
// import { TaskPage } from './modules/todo-list/pages/TaskPage';
import { useTWAEvent } from '@tonsolutions/telemetree-react';

function App() {
  const eventBuilder = useTWAEvent();

  const handleButtonClick = () => {
    eventBuilder.track('Button Clicked', {
      label: 'Test Button', // Additional info about the button
      category: 'User Engagement', // Categorize the event
    });
  };

  return (
    <div className="app">
      <button style={{ marginTop: 30 }} onClick={handleButtonClick}>Test Click</button>
      {/* <h1 className="heading">Task Manager</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:taskId" element={<TaskPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
