export type FilterType = 'All' | 'Completed' | 'Pending';

interface TaskFilterProps {
    currentFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ currentFilter, onFilterChange }) => {
    return (
        <div className="task-filter">
            {(['All', 'Completed', 'Pending'] as FilterType[]).map((filter) => (
                <button
                    key={filter}
                    onClick={() => onFilterChange(filter)}
                    className={`px-4 py-2 font-medium rounded-lg mr-2 mb-4 ${currentFilter === filter
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
