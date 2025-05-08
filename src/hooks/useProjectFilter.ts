import { useState } from 'react';
import { Project } from '../types/project';
import {DifficultyFilter} from "../types/DifficultyFilter.ts";


export function useProjectFilter(projects: Project[]) {
    const [filter, setFilter] = useState<DifficultyFilter>('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.difficulty === filter);

    return {
        filteredProjects,
        currentFilter: filter,
        setFilter,
    };
}