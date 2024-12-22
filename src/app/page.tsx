import React from 'react';
import { Destinations } from '@/components/Destinations';
import { Hero } from '@/components/Hero';
import { ReservationSection } from '@/components/ReservationSection';
import { Testimonials } from '@/components/Testimonials';
import { Map } from '@/components/Map';
import { TravelTipsSection } from '@/components/TravelTipsSection';
import { Section } from '@/components/Section';
import { Question } from '@/components/Question';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Destinations />
      <ReservationSection />
      <Map />
      <TravelTipsSection />
      <Testimonials />
      <Section />
      <Question />
    </div>
  );
}
