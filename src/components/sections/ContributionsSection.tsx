"use client";

import { Users, GitFork, Star } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from './SectionWrapper';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const contributions = [
  {
    title: "Open Source UI Library",
    description: "Contributed components and documentation to a popular open-source UI library, improving accessibility and developer experience.",
    image: "https://placehold.co/600x400.png",
    aiHint: "code interface",
    link: "#",
    tags: ["React", "TypeScript", "Accessibility"],
    stats: { forks: 120, stars: 850 }
  },
  {
    title: "Dev Community Helper Bot",
    description: "Developed a Discord bot to assist a developer community with Q&A, resource sharing, and automated moderation.",
    image: "https://placehold.co/600x400.png",
    aiHint: "robot chat",
    link: "#",
    tags: ["Node.js", "Discord.js", "AI"],
    stats: { forks: 45, stars: 210 }
  },
  {
    title: "Tech Blog Author",
    description: "Authored several technical articles on topics like performance optimization and modern JavaScript features, shared on a popular dev blog.",
    image: "https://placehold.co/600x400.png",
    aiHint: "writing code",
    link: "#",
    tags: ["Writing", "JavaScript", "Performance"],
    stats: { views: "10k+", shares: "500+" }
  }
];

export const ContributionsSection = () => {
  return (
    <SectionWrapper id="contributions" title="Contributions & Projects" icon={Users}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contributions.map((contrib, index) => (
          <ContributionCard key={contrib.title} contribution={contrib} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ContributionCard = ({ contribution, index }: { contribution: typeof contributions[0], index: number }) => {
  const animProps = useScrollAnimation<HTMLDivElement>({ delay: `${index * 100}ms` });
  return (
    <div {...animProps} className={animProps.className} style={animProps.style}>
      <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="relative w-full h-48">
          <Image 
            src={contribution.image} 
            alt={contribution.title} 
            layout="fill" 
            objectFit="cover"
            data-ai-hint={contribution.aiHint}
          />
        </div>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-headline">{contribution.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground h-16 overflow-hidden">{contribution.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-3">
            {contribution.tags.map(tag => (
              <span key={tag} className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">{tag}</span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center pt-3 border-t">
           <div className="flex items-center space-x-3 text-sm text-muted-foreground">
            {contribution.stats.forks !== undefined && (
              <div className="flex items-center">
                <GitFork className="h-4 w-4 mr-1" /> {contribution.stats.forks}
              </div>
            )}
             {contribution.stats.stars !== undefined && (
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" /> {contribution.stats.stars}
              </div>
            )}
             {contribution.stats.views && (
              <span className="text-xs">{contribution.stats.views} views</span>
            )}
          </div>
          <Button variant="link" size="sm" asChild className="text-primary p-0 h-auto">
            <a href={contribution.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
