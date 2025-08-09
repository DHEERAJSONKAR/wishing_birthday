import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles, Code, Coffee, Zap } from 'lucide-react';

const MessageSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('message-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="message-section" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="w-8 h-8 text-blue-500 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              A Special Developer's Birthday Message
            </h2>
          </div>
          <div className="flex justify-center space-x-2 animate-pulse">
            <Code className="w-6 h-6 text-purple-500" />
            <Coffee className="w-6 h-6 text-orange-500" />
            <Zap className="w-6 h-6 text-yellow-500" />
          </div>
        </div>

        {/* Message Card */}
        <div
          className={`
            relative bg-white rounded-3xl shadow-2xl p-8 md:p-12
            transform transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}
          `}
        >
          {/* Decorative Code Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse flex items-center justify-center">
            <span className="text-white text-xs font-bold">{'<'}</span>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-bounce flex items-center justify-center">
            <span className="text-white text-xs font-bold">{'>'}</span>
          </div>
          <div className="absolute -bottom-3 -left-2 w-5 h-5 bg-purple-500 rounded-full animate-ping flex items-center justify-center">
            <span className="text-white text-xs">{'{'}</span>
          </div>
          <div className="absolute -bottom-4 -right-4 w-7 h-7 bg-orange-500 rounded-full animate-pulse flex items-center justify-center">
            <span className="text-white text-xs">{'}'}</span>
          </div>

          {/* Quote Mark */}
          <div className="text-6xl text-blue-200 font-serif mb-6">"</div>

          {/* Message Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg md:text-xl">
              Dear <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Pragyesh Kumar Seth</span>,
            </p>
            
            <p className="text-base md:text-lg">
              🎂 Another year, another milestone in your incredible journey as a developer! Today we celebrate not just your birthday, 
              but the amazing coder, problem-solver, and friend you are. Your dedication to clean code and innovative solutions 
              continues to inspire everyone around you.
            </p>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl border-l-4 border-blue-500">
              <p className="text-base md:text-lg font-mono text-gray-800">
                <span className="text-purple-600">function</span>{' '}
                <span className="text-blue-600">celebrateBirthday</span>
                <span className="text-gray-600">(</span>
                <span className="text-orange-600">pragyesh</span>
                <span className="text-gray-600">) {'{'}</span>
                <br />
                &nbsp;&nbsp;<span className="text-green-600">return</span>{' '}
                <span className="text-red-600">"Happy Birthday! 🎉"</span>
                <span className="text-gray-600">;</span>
                <br />
                <span className="text-gray-600">{'}'}</span>
              </p>
            </div>

            <p className="text-base md:text-lg">
              💻 Whether you're debugging complex issues, architecting scalable solutions, or mentoring others, 
              you bring passion and excellence to everything you do. Your journey from learning new technologies 
              to mastering full-stack development has been nothing short of remarkable!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-purple-50 p-4 rounded-xl text-center">
                <Code className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-purple-700">Clean Code Master</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-xl text-center">
                <Coffee className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-orange-700">Coffee-Fueled Coder</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-xl text-center">
                <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-yellow-700">Innovation Expert</p>
              </div>
            </div>

            <p className="text-lg md:text-xl font-medium text-purple-700 bg-purple-50 p-4 rounded-xl border border-purple-200">
              🚀 May this new year bring you exciting projects, breakthrough moments, and endless opportunities 
              to create amazing software. Keep coding, keep learning, and keep being the awesome developer you are!
              <br /><br />
              <span className="text-2xl">Happy Birthday, Pragyesh! 🎉🎂💻</span>
            </p>
          </div>

          {/* Signature */}
          <div className="mt-8 text-right">
            <p className="text-gray-600 font-medium">With friendship and best wishes,</p>
            <p className="text-xl font-bold text-blue-600 mt-2">Dheeraj Sonkar 👨‍💻❤️</p>
            <p className="text-sm text-gray-500 mt-1">Full Stack Developer</p>
          </div>

          {/* Bottom Quote Mark */}
          <div className="text-6xl text-blue-200 font-serif text-right mt-6">"</div>
        </div>

        {/* Floating Tech Emojis Animation */}
        <div className="mt-12 flex justify-center space-x-4">
          <div className="text-3xl animate-bounce">💻</div>
          <div className="text-3xl animate-bounce animation-delay-200">🚀</div>
          <div className="text-3xl animate-bounce animation-delay-400">⚡</div>
          <div className="text-3xl animate-bounce animation-delay-600">🎯</div>
          <div className="text-3xl animate-bounce animation-delay-800">🌟</div>
        </div>

        {/* Tech Stack Celebration */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Technologies that celebrate with you today:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Node.js', 'JavaScript', 'TypeScript', 'Python', 'Git'].map((tech, index) => (
              <span 
                key={tech}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {tech}
              </span>
            ))}
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
      `}</style>
    </section>
  );
};

export default MessageSection;