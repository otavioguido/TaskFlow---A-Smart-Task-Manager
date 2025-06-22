import React from 'react';

interface TaskListProps {
    tasks: { id: number; text: string; completed: boolean }[];
    onToggleTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => {
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id}>
                    <button
                        onClick={() => onToggleTask(task.id)}
                        className={`p-2 rounded-lg cursor-pointer border border-gray-300 mb-2 ${
                            task.completed
                              ? 'line-through bg-gray-100 text-gray-500'
                              : 'bg-white hover:bg-gray-100'
                          }`}
                    >
                        {task.text}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
