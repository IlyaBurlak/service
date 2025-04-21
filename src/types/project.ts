export interface Project {
    id: number;
    title: string;
    coverImage: string;
    tags: string[];
    githubUrl: string;
    deployUrl: string;
    description: string;
    difficulty: 'lite' | 'medium' | 'hard';
}