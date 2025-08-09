import React, { useState } from 'react';
import { ChevronDown, Play, Code } from 'lucide-react';

interface HeroSectionProps {
  onStartCelebration: () => void;
  triggerConfetti: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartCelebration, triggerConfetti }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStartClick = () => {
    setIsAnimating(true);
    triggerConfetti();
    setTimeout(() => {
      onStartCelebration();
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements with Developer Theme */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-8 h-8 bg-yellow-300 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-pink-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-10 h-10 bg-purple-300 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute bottom-40 right-10 w-4 h-4 bg-orange-300 rounded-full animate-ping opacity-70"></div>
        {/* Developer-themed floating elements */}
        <div className="absolute top-20 right-32 text-white/20 animate-pulse">
          <Code className="w-12 h-12" />
        </div>
        <div className="absolute bottom-32 left-32 text-white/20 text-2xl animate-bounce">{'</>'}</div>
      </div>

      {/* Main Content */}
      <div className="text-center text-white z-10 px-4 max-w-4xl mx-auto">
        {/* Birthday Cake Animation */}
        <div className="mb-8 animate-bounce">
          <div className="text-8xl md:text-9xl mb-4">🎂</div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          Happy Birthday{' '}
          <span className="text-yellow-300 animate-pulse">Pragyesh!</span>
        </h1>

        {/* Developer Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
            <Code className="w-5 h-5 text-yellow-300" />
            <span className="text-lg font-semibold">Full Stack Developer</span>
            <span className="text-2xl">💻</span>
          </div>
        </div>

        {/* Subheading */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 opacity-90 animate-fade-in-up animation-delay-300">
          Wishing the most talented developer a fantastic year ahead! 🚀
        </p>

        {/* Celebration Button */}
        <button
          onClick={handleStartClick}
          disabled={isAnimating}
          className={`
            group relative inline-flex items-center justify-center
            px-8 py-4 text-lg font-semibold text-purple-600 
            bg-white rounded-full shadow-2xl
            hover:bg-yellow-50 hover:scale-105 hover:shadow-3xl
            active:scale-95 transition-all duration-300 ease-out
            ${isAnimating ? 'animate-pulse' : ''}
            focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50
          `}
        >
          <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
          {isAnimating ? 'console.log("Starting...")' : 'Execute Celebration()'}
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white opacity-70" />
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;