import {Project} from "../src/types/project.ts";

export const projects: Project[] = [
    {
        id: 1,
        title: 'Quote Generator',
        coverImage: '/img/projects/01Big.png',
        tags: ['Vanilla JS', 'HTML', 'CSS'],
        githubUrl: 'https://github.com/IlyaBurlak/Quotes',
        deployUrl: 'https://ilyaburlak.github.io/Quotes/',
        description: 'Quote generator was created to get basic skills in JS, CSS, HTML. Generates a quote based on a random selection from a list in JS',
        difficulty: 'lite'
    },
    {
        id: 2,
        title: 'Flashcards',
        coverImage: '/img/projects/02Big.png',
        tags: ['Vanilla JS', 'HTML', 'CSS'],
        githubUrl: 'https://github.com/IlyaBurlak/Fleshcards',
        deployUrl: 'https://ilyaburlak.github.io/Fleshcards/',
        description: 'Using basic JS implemented Fleshcard. 1. Create a new card. 2. Delete a certain card. 3. Get the correct answer. 4. Delete all cards',
        difficulty: 'lite'
    },
    {
        id: 3,
        title: 'Calculator',
        coverImage: '/img/projects/03Big.png',
        tags: ['Vanilla JS', 'HTML', 'CSS'],
        githubUrl: 'https://github.com/IlyaBurlak/Calculator',
        deployUrl: 'https://ilyaburlak.github.io/Calculator/',
        description: 'Classic Calculator',
        difficulty: 'lite'
    },
    {
        id: 4,
        title: 'Animated Portfolio',
        coverImage: '/img/projects/04Big.png',
        tags: ['Vanilla JS', 'HTML', 'CSS'],
        githubUrl: 'https://github.com/IlyaBurlak/AOS',
        deployUrl: 'https://ilyaburlak.github.io/AOS/',
        description: 'Layout based on a Figma template using the library for animation',
        difficulty: 'lite'
    },
    {
        id: 5,
        title: 'Base Bootstrap and JS',
        coverImage: '/img/projects/05Big.png',
        tags: ['Vanilla JS', 'Bootstrap', 'HTML', 'CSS'],
        githubUrl: 'https://github.com/IlyaBurlak/JS-Bootsrap',
        deployUrl: 'https://ilyaburlak.github.io/JS-Bootsrap/',
        description: 'Some work with Bootstrap and JS',
        difficulty: 'lite'
    },
    {
        id: 6,
        title: 'Weather App',
        coverImage: '/img/projects/06Big.png',
        tags: ['Vanilla JS', 'HTML', 'CSS', 'API'],
        githubUrl: 'https://github.com/IlyaBurlak/Weather',
        deployUrl: 'https://ilyaburlak.github.io/Weather/',
        description: 'In this project I worked with Api (OpenWeather) and also all the HTML was done using basic JS manipulations.',
        difficulty: 'medium'
    },
    {
        id: 7,
        title: 'Hangman',
        coverImage: '/img/projects/07Big.png',
        tags: ['TypeScript', 'Vite', 'HTML', 'CSS', 'React'],
        githubUrl: 'https://github.com/IlyaBurlak/Hangman',
        deployUrl: '',
        description: 'A game called Hangman was made to introduce the basics of TypeScript, as well as Vite',
        difficulty: 'medium'
    },
    {
        id: 8,
        title: 'Admin Soft',
        coverImage: '/img/projects/08Big.png',
        tags: ['HTML', 'CSS', 'React', 'Vite'],
        githubUrl: 'https://github.com/IlyaBurlak/Altair-Admin',
        deployUrl: 'https://altair-admin-c34idca1g-ilyas-projects-d95573b2.vercel.app',
        description: 'This project involves software for administrators of online sites. Implemented DashBoard calendar and monitoring for all indicators at once',
        difficulty: 'hard'
    },

];