import React, { useState, useCallback } from 'react';
import Confetti from 'react-confetti';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import PhotoGallery from './components/PhotoGallery';
import MessageSection from './components/MessageSection';
import VideoSection from './components/VideoSection';
import CountdownTimer from './components/CountdownTimer';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [confetti, setConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showLoading, setShowLoading] = useState(true);

  // Update window dimensions for confetti
  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth scroll to next section
  const scrollToGallery = useCallback(() => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  // Trigger confetti effect
  const triggerConfetti = useCallback(() => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 5000); // Stop after 5 seconds
  }, []);

  // Global scroll behavior
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Auto-start music after user interaction
  const handleFirstUserInteraction = useCallback(() => {
    // This will help with auto-play permissions
    document.removeEventListener('click', handleFirstUserInteraction);
    document.removeEventListener('keydown', handleFirstUserInteraction);
  }, []);

  React.useEffect(() => {
    // Add listeners for first user interaction
    document.addEventListener('click', handleFirstUserInteraction);
    document.addEventListener('keydown', handleFirstUserInteraction);
    
    return () => {
      document.removeEventListener('click', handleFirstUserInteraction);
      document.removeEventListener('keydown', handleFirstUserInteraction);
    };
  }, [handleFirstUserInteraction]);

  const handleLoadingComplete = useCallback(() => {
    setShowLoading(false);
    // Trigger confetti when loading completes
    setConfetti(true);
    setTimeout(() => setConfetti(false), 5000);
  }, []);

  // Show loading screen first
  if (showLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Confetti Effect */}
      {confetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.1}
          colors={['#8B5CF6', '#EC4899', '#F97316', '#EAB308', '#06B6D4', '#10B981']}
        />
      )}

      {/* Music Player */}
      <MusicPlayer />

      {/* Main Content */}
      <main>
        <HeroSection 
          onStartCelebration={scrollToGallery}
          triggerConfetti={triggerConfetti}
        />
        <PhotoGallery />
        <MessageSection />
        <VideoSection />
        <CountdownTimer />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #8B5CF6, #EC4899);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #7C3AED, #DB2777);
        }

        /* Focus styles for accessibility */
        *:focus {
          outline: 2px solid #8B5CF6;
          outline-offset: 2px;
        }

        button:focus,
        input:focus,
        textarea:focus {
          outline: 2px solid #8B5CF6;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}

export default App;