'use client';

import { Badge } from "@/components/ui/badge";
// Import icons for skills if desired, e.g., from lucide-react or use SVGs
// import { Code, Database, Wind, Palette } from 'lucide-react';

// Placeholder skills - replace with your actual skills
const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'HTML', 'CSS',
  'Tailwind CSS', 'Firebase', 'Git', 'Figma', 'SQL', 'NoSQL', 'REST APIs'
  // Add more skills
];

// Optional: More detailed skills with icons
// const detailedSkills = [
//   { name: 'React', icon: Code },
//   { name: 'Firebase', icon: Database },
//   { name: 'Tailwind CSS', icon: Wind },
//   { name: 'Figma', icon: Palette },
// ]

export function SkillsSection() {
  return (
    <section id="skills" className="container bg-secondary/50 fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Skills & Tools
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Technologies and tools I work with.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="px-4 py-2 text-sm font-medium fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
            {/* Optional: Add icon here if using detailedSkills */}
            {/* skill.icon && <skill.icon className="mr-2 h-4 w-4" /> */}
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
