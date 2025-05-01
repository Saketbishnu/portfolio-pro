'use client'; // For potential future client-side interactions or hooks

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="w-full bg-secondary/50">
      <div className="container grid grid-cols-1 gap-12 py-24 md:grid-cols-2 md:py-32 lg:gap-20 items-center">
        <div className="space-y-4 text-center md:text-left fade-in">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Saket Bishnu {/* Placeholder */}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Software Engineer {/* Placeholder - e.g., Full Stack Developer | UI/UX Designer */}
          </p>
          <p className="max-w-[600px] text-foreground/80 md:text-lg">
            A short and engaging bio about yourself, highlighting key skills or passions. Keep it concise and impactful. {/* Placeholder */}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center md:justify-start">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">
                View Projects <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto md:max-w-none fade-in delay-100">
          {/* Placeholder for a professional photo or illustration */}
          <Image
            src="https://picsum.photos/600/600"
            alt="Your Name - Professional Photo"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            data-ai-hint="professional photo person"
          />
           {/* You can replace the picsum placeholder with your actual image */}
        </div>
      </div>
    </section>
  );
}
