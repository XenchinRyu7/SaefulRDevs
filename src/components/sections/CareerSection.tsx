"use client";

import { Award, TrendingUp, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from './SectionWrapper';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const careerHighlights = [
	{
		icon: Award,
		title: 'Innovator of the Year 2022',
		description:
			'Recognized for developing a groundbreaking feature that increased user engagement by 35% at Tech Solutions Inc.',
		delay: '0ms',
	},
	{
		icon: TrendingUp,
		title: 'Rapid Skill Advancement',
		description:
			'Continuously learning and mastering new technologies, quickly adapting to evolving industry trends and project requirements.',
		delay: '150ms',
	},
	{
		icon: Target,
		title: 'Goal-Oriented Achiever',
		description:
			'Consistently exceeded performance expectations, delivering high-quality projects on time and contributing to team success.',
		delay: '300ms',
	},
];

export const CareerSection = () => {
	return (
		<SectionWrapper
			id="career"
			title="Career Highlights"
			icon={Award}
			className="bg-secondary/30"
		>
			<div className="jos grid md:grid-cols-3 gap-8" data-jos_animation="fade-up" data-jos_duration="0.7">
				{careerHighlights.map((highlight, idx) => (
					<div key={highlight.title} className="jos" data-jos_animation="flip-up" data-jos_duration="0.7" data-jos_delay={`${0.2 + idx * 0.2}`}> {/* Staggered */}
						<HighlightCard highlight={highlight} />
					</div>
				))}
			</div>
			<div className="jos mt-12 text-center" data-jos_animation="fade" data-jos_duration="0.7" data-jos_delay="1.2">
				<p className="text-lg text-foreground/80">
					Driven by a passion for problem-solving and a commitment to excellence, I
					am always seeking new challenges and opportunities for growth. My career
					journey is focused on leveraging technology to create meaningful impact
					and innovative solutions.
				</p>
			</div>
		</SectionWrapper>
	);
};

const HighlightCard = ({ highlight }: { highlight: typeof careerHighlights[0] }) => {
	const animProps = useScrollAnimation<HTMLDivElement>({ delay: highlight.delay });
	const Icon = highlight.icon;
	return (
		<div
			{...animProps}
			className={animProps.className}
			style={animProps.style}
		>
			<Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-transparent hover:border-primary/30">
				<CardHeader className="pb-4">
					<Icon className="h-12 w-12 text-primary mx-auto mb-3" />
					<CardTitle className="text-xl font-headline">
						{highlight.title}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-sm text-muted-foreground">
						{highlight.description}
					</p>
				</CardContent>
			</Card>
		</div>
	);
};
