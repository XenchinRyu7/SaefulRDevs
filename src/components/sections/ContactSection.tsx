"use client";

import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionWrapper } from './SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import React from 'react';

export const ContactSection = () => {
  const formRef = useScrollAnimation<HTMLFormElement>({ delay: '0ms' });
  const infoRef = useScrollAnimation<HTMLDivElement>({ delay: '100ms' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted (placeholder)!");
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch" icon={Mail} className="bg-secondary/30">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div {...infoRef} className={infoRef.className} style={infoRef.style}>
          <h3 className="text-2xl font-semibold mb-6 font-headline text-foreground">Contact Information</h3>
          <p className="text-muted-foreground mb-8">
            Feel free to reach out for collaborations, project inquiries, or just to say hello!
          </p>
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <a href="mailto:saeful.rohman@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  saeful.rohman@example.com
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Phone</h4>
                <span className="text-muted-foreground">(+123) 456-7890</span> {/* Placeholder */}
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Location</h4>
                <span className="text-muted-foreground">Jakarta, Indonesia (Remote)</span> {/* Placeholder */}
              </div>
            </div>
          </div>
        </div>

        <div {...formRef} className={formRef.className} style={formRef.style}>
          <Card className="shadow-xl border-transparent">
            <CardContent className="p-6 sm:p-8">
            <h3 className="text-2xl font-semibold mb-6 font-headline text-center text-foreground">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
                  <Input type="text" id="name" name="name" required className="bg-background/70 focus:bg-background" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email Address</label>
                  <Input type="email" id="email" name="email" required className="bg-background/70 focus:bg-background" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">Subject</label>
                  <Input type="text" id="subject" name="subject" required className="bg-background/70 focus:bg-background" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                  <Textarea id="message" name="message" rows={5} required className="bg-background/70 focus:bg-background" />
                </div>
                <Button type="submit" className="w-full text-lg py-3" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};
