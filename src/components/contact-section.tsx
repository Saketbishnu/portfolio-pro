'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

// Note: A functional contact form requires backend setup (e.g., Firebase Functions, Next.js API route).
// This component currently provides contact links.

export function ContactSection() {
  return (
    <section id="contact" className="container fade-in">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</CardTitle>
            <CardDescription className="mt-2 text-lg text-muted-foreground">
              Have a question or want to collaborate? Feel free to reach out!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6 pt-4">
             <div className="flex items-center gap-2 text-foreground/80">
                 <Mail className="h-5 w-5 text-accent"/>
                 <a href="mailto:your.email@example.com" className="hover:text-accent transition-colors">
                    your.email@example.com {/* Placeholder */}
                 </a>
             </div>

            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"> {/* Placeholder */}
                  <Github className="mr-2 h-5 w-5" /> GitHub
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"> {/* Placeholder */}
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </Link>
              </Button>
            </div>

            {/* Optional Contact Form Placeholder - Requires backend logic */}
            {/*
            <form className="w-full max-w-md space-y-4 mt-8">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Textarea placeholder="Your Message" required rows={5}/>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Send Message
              </Button>
            </form>
            */}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
