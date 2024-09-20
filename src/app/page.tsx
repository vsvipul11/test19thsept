'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CTAButtons from '../components/CTAButtons';
import Features from '../components/Features';
import Header from '../components/Header';
import Hero from '@/components/Hero';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import MostBookedCheckups from '@/components/MostBookedCheckups';
import HealthMonitoring from '@/components/HealthMonitoring';
import BannerCarousel from '@/components/Banner';
import VitalBodyOrgans from '@/components/VitalBodyOrgans';
import TestimonialCarousel from '@/components/TestimonialCarousel ';
import CadabamsInfo from '@/components/CadabamsInfo';
import TestsList from '@/components/TestsList';
import Footer from '@/components/Footer';
import { loadComponentsState } from '../utils/localstorage';


interface ComponentState {
  visible: boolean;
  content: any;
}

interface AppState {
  Navbar: ComponentState;
  Hero: ComponentState;
  Features: ComponentState;
  MostBookedCheckups: ComponentState;
  CTAButtons: ComponentState;
  SearchBar: ComponentState;
  HealthMonitoring: ComponentState;
  BannerCarousel: ComponentState;
  VitalBodyOrgans: ComponentState;
  TestimonialCarousel: ComponentState;
  TestsList: ComponentState;
}

export default function Home() {
  const [components, setComponents] = useState<AppState | null>(null);

  useEffect(() => {
    const savedState = loadComponentsState();
    if (savedState) {
      setComponents(savedState as AppState);
    }
  }, []);

  if (!components) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {components.Navbar?.visible && <Navbar {...components.Navbar.content} />}
      
      {components.Hero?.visible && <Hero {...components.Hero.content} />}
      {components.Features?.visible && <Features {...components.Features.content} />}
      {components.MostBookedCheckups?.visible && (
        <MostBookedCheckups {...components.MostBookedCheckups.content} />
      )}
      
      {components.HealthMonitoring?.visible && components.HealthMonitoring.content && (
        <HealthMonitoring
          title={components.HealthMonitoring.content.title}
          description={components.HealthMonitoring.content.description}
          trustedBy={components.HealthMonitoring.content.trustedBy}
          imageSrc={components.HealthMonitoring.content.imageSrc}
          cards={components.HealthMonitoring.content.cards || []}
        />
      )}
      {components.BannerCarousel?.visible && (
        <BannerCarousel banners={components.BannerCarousel.content.banners || []} />
      )}
      {components.VitalBodyOrgans?.visible && (
        <VitalBodyOrgans {...components.VitalBodyOrgans.content} />
      )}
      {components.TestimonialCarousel?.visible && (
        <TestimonialCarousel {...components.TestimonialCarousel.content} />
      )}
      
      <CadabamsInfo />

      {components.TestsList?.visible && (
        <TestsList
          bloodTests={components.TestsList.content.bloodTests || []}
          popularTests={components.TestsList.content.popularTests || []}
        />
      )}

<Footer />
      
      
    </main>
  );
}