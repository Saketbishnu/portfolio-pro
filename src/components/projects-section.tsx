'use client';

import { ProjectCard } from '@/components/project-card';

// Placeholder project data - replace with your actual projects
const projects = [
  {
    title: 'Project One Title',
    description: 'A brief description of Project One, highlighting key features and technologies used.',
    imageUrl: 'https://picsum.photos/seed/project1/600/337',
    imageHint: 'web application user interface',
    githubUrl: 'https://github.com/yourusername/project-one', // Placeholder
    demoUrl: 'https://project-one-demo.example.com', // Placeholder
  },
  {
    title: 'Project Two Title',
    description: 'Description for Project Two. Explain the problem it solves or its main functionality.',
    imageUrl: 'https://picsum.photos/seed/project2/600/337',
    imageHint: 'mobile app dashboard',
    githubUrl: 'https://github.com/yourusername/project-two', // Placeholder
    // demoUrl: 'https://project-two-demo.example.com', // Optional
  },
  {
    title: 'Project Three Title',
    description: 'Details about Project Three. Maybe focus on a specific technical challenge or achievement.',
    imageUrl: 'https://picsum.photos/seed/project3/600/337',
    imageHint: 'data visualization chart',
    githubUrl: 'https://github.com/yourusername/project-three', // Placeholder
    demoUrl: 'https://project-three-demo.example.com', // Placeholder
  },
  // Add more projects as needed
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          My Projects
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Here are some of the projects I've worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
