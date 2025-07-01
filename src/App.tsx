import React from 'react';
import { Header } from './components/Header';
import { StatsBar } from './components/StatsBar';
import { MicSection } from './components/MicSection';
import { TabNavigation } from './components/TabNavigation';
import { MarketEventsSection } from './components/MarketEventsSection';
import { SentimentSection } from './components/SentimentSection';
import { MicPromo } from './components/MicPromo';
import { MindshareTable } from './components/MindshareTable';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
export function App() {
  return <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6">
          <StatsBar />
          <MicSection />
          <TabNavigation />
          <MarketEventsSection />
          <SentimentSection />
          <MicPromo />
          <MindshareTable />
        </main>
        <Footer />
      </div>
    </ThemeProvider>;
}