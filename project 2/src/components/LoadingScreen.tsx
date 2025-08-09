import React, { useState, useEffect } from 'react';
import { Cake, Gift, Heart, Sparkles, Code, Coffee } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [candlesBlown, setCandlesBlown] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isInteractive, setIsInteractive] = useState(true);

  const birthdayMessages = [
    "🎂 Preparing birthday celebration...",
    "🎉 Loading memories and wishes...",
    "💻 Compiling birthday code...",
    "🎁 Unwrapping special surprises...",
    "🌟 Initializing happiness.js...",
    "🚀 Almost ready to celebrate!"
  ];

  const totalCandles = 5;

  // Auto-progress loading
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  // Update messages based on progress
  useEffect(() => {
    const messageIndex = Math.floor((progress / 100) * birthdayMessages.length);
    setCurrentMessage(Math.min(messageIndex, birthdayMessages.length - 1));
  }, [progress, birthdayMessages.length]);

  // Trigger confetti at certain progress points
  useEffect(() => {
    if (progress === 50 || progress === 75 || progress === 100) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  }, [progress]);

  const blowCandle = (candleIndex: number) => {
    if (candlesBlown < totalCandles) {
      setCandlesBlown(prev => prev + 1);
      setProgress(prev => Math.min(prev + 10, 100));
    }
  };

  const handleCakeClick = () => {
    setShowConfetti(true);
    setProgress(prev => Math.min(prev + 5, 100));
    setTimeout(() => setShowConfetti(false), 1500);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Birthday Elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? '🎈' : '🎉'}
          </div>
        ))}
        
        {/* Confetti Effect */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 animate-confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  backgroundColor: ['#8B5CF6', '#EC4899', '#F97316', '#EAB308', '#06B6D4', '#10B981'][Math.floor(Math.random() * 6)],
                  animationDelay: `${Math.random() * 0.5}s`
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Main Loading Content */}
      <div className="text-center text-white z-10 px-6 max-w-lg mx-auto">
        {/* Birthday Cake */}
        <div className="mb-8 relative">
          <div 
            className="text-8xl mb-4 cursor-pointer transform hover:scale-110 transition-transform duration-300 animate-bounce"
            onClick={handleCakeClick}
          >
            🎂
          </div>
          
          {/* Interactive Candles */}
          <div className="flex justify-center space-x-2 mb-4">
            {[...Array(totalCandles)].map((_, i) => (
              <button
                key={i}
                onClick={() => blowCandle(i)}
                className={`text-2xl transform hover:scale-125 transition-all duration-300 ${
                  i < candlesBlown ? 'opacity-30' : 'animate-pulse'
                }`}
                disabled={i < candlesBlown}
              >
                {i < candlesBlown ? '💨' : '🕯️'}
              </button>
            ))}
          </div>
          
          <p className="text-sm text-yellow-200">
            {candlesBlown < totalCandles ? 'Click candles to blow them out!' : 'All candles blown! 🎉'}
          </p>
        </div>

        {/* Happy Birthday Text */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
          Happy Birthday{' '}
          <span className="text-yellow-300 animate-pulse">Pragyesh!</span>
        </h1>

        {/* Developer Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
            <Code className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold">Full Stack Developer</span>
            <Coffee className="w-4 h-4 text-orange-300" />
          </div>
        </div>

        {/* Loading Message */}
        <p className="text-xl mb-8 min-h-[28px] animate-fade-in">
          {birthdayMessages[currentMessage]}
        </p>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="bg-white/20 rounded-full h-4 overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2 text-sm text-yellow-200">
            <span>{progress}% Complete</span>
            <div className="flex items-center space-x-1">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Loading...</span>
            </div>
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <button 
            className="bg-white/20 backdrop-blur-sm rounded-xl p-3 hover:bg-white/30 transition-all duration-300 hover:scale-105"
            onClick={() => setProgress(prev => Math.min(prev + 5, 100))}
          >
            <Gift className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs">Gift</span>
          </button>
          <button 
            className="bg-white/20 backdrop-blur-sm rounded-xl p-3 hover:bg-white/30 transition-all duration-300 hover:scale-105"
            onClick={handleCakeClick}
          >
            <Cake className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs">Cake</span>
          </button>
          <button 
            className="bg-white/20 backdrop-blur-sm rounded-xl p-3 hover:bg-white/30 transition-all duration-300 hover:scale-105"
            onClick={() => {
              setShowConfetti(true);
              setTimeout(() => setShowConfetti(false), 2000);
            }}
          >
            <Heart className="w-6 h-6 mx-auto mb-1 text-red-300" />
            <span className="text-xs">Love</span>
          </button>
        </div>

        {/* Fun Facts */}
        {progress > 50 && (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-fade-in">
            <p className="text-sm text-center">
              🎯 Fun Fact: Another year of coding excellence!
              <br />
              💻 Lines of code written: ∞
              <br />
              ☕ Cups of coffee consumed: Countless
            </p>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        
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
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-confetti {
          animation: confetti 2s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
