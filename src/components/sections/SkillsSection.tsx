"use client";

import { Code2, Database, Server, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionWrapper } from './SectionWrapper';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillsData = [
	{
		category: 'Frontend',
		icon: Code2,
		skills: [
			'React',
			'Next.js',
			'Vue.js',
			'TypeScript',
			'Tailwind CSS',
			'HTML5',
			'CSS3',
			'JavaScript (ES6+)',
		],
	},
	{
		category: 'Backend',
		icon: Server,
		skills: [
			'Node.js',
			'Express.js',
			'Python (Django/Flask)',
			'Java (Spring Boot)',
			'RESTful APIs',
			'GraphQL',
		],
	},
	{
		category: 'Databases',
		icon: Database,
		skills: [
			'PostgreSQL',
			'MongoDB',
			'MySQL',
			'Firebase Firestore',
			'Redis',
		],
	},
	{
		category: 'DevOps & Tools',
		icon: Zap,
		skills: [
			'Docker',
			'Git & GitHub',
			'CI/CD (Jenkins, GitHub Actions)',
			'AWS',
			'Vercel',
			'Firebase',
		],
	},
];

export const SkillsSection = () => {
	return (
		<SectionWrapper
			id="skills"
			title="My Expertise"
			icon={Code2}
			className="bg-secondary/30"
		>
			<div
				className="jos grid md:grid-cols-2 gap-8"
				data-jos_animation="fade-up"
				data-jos_duration="0.7"
			>
				{skillsData.map((categoryItem, index) => (
					<div
						className="jos"
						data-jos_animation="zoom-in"
						data-jos_duration="0.7"
						data-jos_delay={`${index * 0.2}`}
						key={categoryItem.category}
					>
						<SkillCard
							categoryItem={categoryItem}
							index={index}
						/>
					</div>
				))}
			</div>
		</SectionWrapper>
	);
};

const SkillCard = ({
	categoryItem,
	index,
}: {
	categoryItem: typeof skillsData[0];
	index: number;
}) => {
	const animProps = useScrollAnimation<HTMLDivElement>({
		delay: `${index * 100}ms`,
	});
	const Icon = categoryItem.icon;
	return (
		<div
			{...animProps}
			className={animProps.className}
			style={animProps.style}
		>
			<Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-transparent hover:border-primary/30">
				<CardHeader className="flex flex-row items-center space-x-4 pb-4">
					<Icon className="w-10 h-10 text-primary" />
					<CardTitle className="text-2xl font-headline">
						{categoryItem.category}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-wrap gap-2">
						{categoryItem.skills.map((skill) => (
							<Badge
								key={skill}
								variant="secondary"
								className="text-sm px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20"
							>
								{skill}
							</Badge>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
