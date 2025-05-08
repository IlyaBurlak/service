import {useState} from "react";
import {DifficultyFilter} from "../types/DifficultyFilter.ts";

export function useFilterControls(initialFilter: DifficultyFilter = 'all') {
    const [currentFilter, setCurrentFilter] = useState<DifficultyFilter>(initialFilter);

    const handleFilterChange = (filter: DifficultyFilter) => {
        setCurrentFilter(filter);
    };

    return {
        currentFilter,
        handleFilterChange,
    };
}