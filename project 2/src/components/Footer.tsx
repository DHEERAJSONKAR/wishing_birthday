import React from 'react';
import { Heart, Calendar, Sparkles, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-pink-800 to-indigo-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          {/* Logo/Title */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-yellow-300 mr-2 animate-pulse" />
            <h3 className="text-3xl font-bold">Birthday Wishes</h3>
            <Sparkles className="w-8 h-8 text-yellow-300 ml-2 animate-pulse" />
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl font-light italic mb-8 max-w-3xl mx-auto text-purple-100">
            "Code is poetry written in logic. Happy Birthday to our favorite poet!" ✨
          </blockquote>

          {/* Creator Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed">
              Made with{' '}
              <Heart className="w-5 h-5 inline text-red-400 animate-pulse mx-1" />
              by{' '}
              <span className="font-semibold text-yellow-300">Dheeraj Sonkar</span>
              {' '}for{' '}
              <span className="font-semibold text-pink-300">Pragyesh Kumar Seth</span>
            </p>
            <div className="flex items-center justify-center mt-4 space-x-4 text-purple-200">
              <Calendar className="w-4 h-4" />
              <span>{currentYear}</span>
              <span>•</span>
              <span className="flex items-center">
                <Sparkles className="w-4 h-4 mr-1" />
                Full Stack Developer
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/pragyesh7753"
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/SethPragyesh"
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/pragyesh77/"
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Birthday Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-2xl font-bold text-yellow-300 mb-1">365</div>
            <div className="text-purple-200 text-sm">Days of Excellence</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-2xl font-bold text-pink-300 mb-1">∞</div>
            <div className="text-purple-200 text-sm">Lines of Code</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-2xl font-bold text-orange-300 mb-1">💻</div>
            <div className="text-purple-200 text-sm">Developer Spirit</div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-purple-200 text-sm">
              © {currentYear} Birthday Wishes Website. 
            </div>
            <div className="flex items-center space-x-4 text-purple-200 text-sm">
              <span>Designed for mobile & desktop</span>
              <span>•</span>
              <span>Optimized for joy 😊</span>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center mt-8 pt-6 border-t border-white/10">
            <p className="text-purple-100 font-medium">
              🎂 Thank you for being an amazing developer and friend! 🎂
            </p>
            <div className="flex justify-center space-x-2 mt-2 text-2xl">
              <span className="animate-bounce">💻</span>
              <span className="animate-bounce animation-delay-200">🚀</span>
              <span className="animate-bounce animation-delay-400">⚡</span>
              <span className="animate-bounce animation-delay-600">🎯</span>
              <span className="animate-bounce animation-delay-800">🌟</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;