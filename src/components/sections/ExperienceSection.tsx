"use client";

import { Briefcase, CalendarDays } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from './SectionWrapper';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2021 - Present",
    description: "Led development of key features for a SaaS platform, mentored junior developers, and improved application performance by 20%. Technologies: React, Node.js, AWS.",
    tasks: [
      "Architected and implemented scalable microservices.",
      "Developed responsive user interfaces with React and Next.js.",
      "Optimized database queries and improved API response times.",
      "Collaborated with cross-functional teams in an Agile environment."
    ]
  },
  {
    role: "Software Engineer",
    company: "Web Wizards LLC",
    period: "Jun 2018 - Dec 2020",
    description: "Contributed to various client projects, focusing on front-end development and API integration. Worked with Vue.js, Express, and MongoDB.",
     tasks: [
      "Built and maintained client websites and web applications.",
      "Integrated third-party APIs for payment processing and social media.",
      "Participated in code reviews and contributed to internal tooling."
    ]
  },
];

export const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" title="Work Experience" icon={Briefcase}>
      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:to-transparent md:before:mx-auto md:before:ml-0">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} index={index} isLeft={index % 2 === 0} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ExperienceItem = ({ experience, index, isLeft }: { experience: typeof experiences[0], index: number, isLeft: boolean }) => {
  const animProps = useScrollAnimation<HTMLDivElement>({ delay: `${index * 150}ms` });
  return (
    <div 
      {...animProps} 
      className={`relative md:flex md:items-start ${isLeft ? 'md:flex-row-reverse' : ''} ${animProps.className}`} 
      style={animProps.style}
    >
      <div className="relative w-full md:w-1/2">
        <div className={`md:absolute md:w-full ${isLeft ? 'md:text-left' : 'md:text-right'} ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
            {/* Placeholder for decorative element on timeline */}
        </div>
      </div>
      <div className={`relative w-full md:w-1/2 ${isLeft ? 'md:pl-8' : 'md:pr-8'}`}>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-headline text-primary">{experience.role}</CardTitle>
                <p className="text-lg font-semibold text-foreground/90">{experience.company}</p>
              </div>
              <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap">
                <CalendarDays className="mr-1.5 h-4 w-4" />
                {experience.period}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4 text-foreground/80">{experience.description}</CardDescription>
            <ul className="list-disc list-inside space-y-1 text-sm text-foreground/70">
              {experience.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="absolute left-5 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md md:left-1/2 md:-translate-x-1/2">
        <Briefcase className="h-5 w-5" />
      </div>
    </div>
  );
}
