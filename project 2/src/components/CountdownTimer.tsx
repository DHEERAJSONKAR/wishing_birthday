import React, { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set birthday date - you can customize this
  const birthdayDate = new Date('2024-12-25T00:00:00'); // Christmas as example

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = birthdayDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [birthdayDate]);

  const TimeUnit: React.FC<{ value: number; label: string; color: string }> = ({ value, label, color }) => (
    <div className={`bg-white rounded-2xl shadow-lg p-4 md:p-6 text-center transform hover:scale-105 transition-transform duration-200`}>
      <div className={`text-4xl md:text-5xl lg:text-6xl font-bold ${color} mb-2 font-mono`}>
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-gray-600 text-sm md:text-base font-medium uppercase tracking-wide">
        {label}
      </div>
      <div className={`w-full h-1 ${color.replace('text-', 'bg-')} rounded-full mt-3 opacity-50`}></div>
    </div>
  );

  const isCountdownActive = timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0;

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-indigo-500 mr-2 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              {isCountdownActive ? 'Next Birthday Countdown' : 'Happy Birthday! 🎉'}
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {isCountdownActive 
              ? 'Time until your special day arrives! ⏰' 
              : 'Today is your special day! Time to celebrate! 🎊'
            }
          </p>
        </div>

        {isCountdownActive ? (
          <>
            {/* Countdown Display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              <TimeUnit value={timeLeft.days} label="Days" color="text-purple-600" />
              <TimeUnit value={timeLeft.hours} label="Hours" color="text-pink-600" />
              <TimeUnit value={timeLeft.minutes} label="Minutes" color="text-orange-600" />
              <TimeUnit value={timeLeft.seconds} label="Seconds" color="text-indigo-600" />
            </div>

            {/* Event Details */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-purple-500 mr-2" />
                <h3 className="text-2xl font-bold text-gray-800">Birthday Details</h3>
              </div>
              
              <div className="space-y-2 text-gray-600">
                <p className="text-lg">
                  <span className="font-semibold">Date:</span> {birthdayDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Time:</span> {birthdayDate.toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${Math.max(0, Math.min(100, ((365 - timeLeft.days) / 365) * 100))}%` 
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Birthday excitement building up! 📈
                </p>
              </div>
            </div>
          </>
        ) : (
          /* Birthday Celebration Display */
          <div className="text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="text-8xl mb-6 animate-bounce">🎂</div>
              <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">
                It's Your Special Day!
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Wishing you the happiest of birthdays filled with love, joy, and amazing memories! 🌟
              </p>
              
              {/* Celebration Elements */}
              <div className="flex justify-center space-x-4 text-4xl">
                <span className="animate-bounce">🎉</span>
                <span className="animate-bounce animation-delay-200">🎈</span>
                <span className="animate-bounce animation-delay-400">🎊</span>
                <span className="animate-bounce animation-delay-600">🎁</span>
              </div>
            </div>
          </div>
        )}

        {/* Fun Facts */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-3">🌟</div>
            <h4 className="font-bold text-gray-800 mb-2">Another Year Wiser</h4>
            <p className="text-gray-600 text-sm">Every birthday marks a new chapter of amazing experiences!</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-bold text-gray-800 mb-2">Dreams Coming True</h4>
            <p className="text-gray-600 text-sm">May all your wishes and dreams become reality this year!</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-3">💫</div>
            <h4 className="font-bold text-gray-800 mb-2">Magical Moments</h4>
            <p className="text-gray-600 text-sm">Here's to creating unforgettable memories together!</p>
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

export default CountdownTimer;