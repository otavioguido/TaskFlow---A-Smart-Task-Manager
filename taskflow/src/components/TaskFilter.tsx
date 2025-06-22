interface TaskFilterProps {
    currentFilter: 'All' | 'Completed' | 'Pending';
    onFilterChange: (filter: 'All' | 'Completed' | 'Pending') => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ currentFilter, onFilterChange }) => {
    return (
        <div className="task-filter">
            {['All', 'Completed', 'Pending'].map((filter) => (
                <button
                    key={filter}
                    onClick={() => onFilterChange(filter as 'All' | 'Completed' | 'Pending')}
                    className={`px-4 py-2 font-medium rounded-lg mr-2 mb-4 ${
                        currentFilter === filter
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default TaskFilter;
