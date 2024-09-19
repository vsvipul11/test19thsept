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
    return <div>Loading...</div>; // Or any loading component
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
      {components.SearchBar?.visible && <SearchBar {...components.SearchBar.content} />}

      <Link href="/admin">
        <button>Admin Panel</button>
      </Link>
    </main>
  );
}