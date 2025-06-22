import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';
import TaskFilter from './components/TaskFilter';
import type { FilterType } from './components/TaskFilter';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const [filter, setFilter] = useState<FilterType>('All');


  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true; // 'All'
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="p-6 max-w-md w-full bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-black">TaskFlow</h1>
      <TaskInput onAddTask={addTask} />
      <div className="flex flex-col items-center justify-center">
        <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
        <TaskList tasks={filteredTasks} onToggleTask={toggleTask} />
      </div>
      </div>
    </div>
  );
};

export default App;
