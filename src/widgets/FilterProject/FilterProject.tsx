import {DifficultyFilter} from "../../types/DifficultyFilter.ts";

interface FilterProjectProps {
    currentFilter: DifficultyFilter;
    onFilterChange: (filter: DifficultyFilter) => void;
}

function FilterProject({ currentFilter, onFilterChange }: FilterProjectProps) {
    return (
        <nav className="filter-menu">
            <div className="menu-items">
                {(['all', 'lite', 'medium', 'hard'] as DifficultyFilter[]).map((filter) => (
                    <button
                        key={filter}
                        className={`menu-item filter ${filter} ${currentFilter === filter ? 'active' : ''}`}
                        onClick={() => onFilterChange(filter)}
                    >
                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default FilterProject;