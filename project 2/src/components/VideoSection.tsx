import React, { useState } from 'react';
import { Play, Volume2, VolumeX, Video } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Video className="w-8 h-8 text-purple-500 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Birthday Wishes
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A special video message just for you! 🎬
          </p>
        </div>

        {/* Video Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
          <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden">
            {/* Video Placeholder with YouTube Embed */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/5u4xTa3LR2U?si=um10GpMtZwUzKgHM"
              title="Birthday Wish Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            {/* Overlay for custom styling */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Video Description */}
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              A Heartfelt Birthday Message 💕
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This special video captures all the love, joy, and best wishes we have for you 
              on your birthday. Every frame is filled with memories and hopes for your bright future!
            </p>
          </div>
        </div>

        {/* Audio Message Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-2xl p-6 md:p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center">
              <Volume2 className="w-6 h-6 mr-2 text-orange-500" />
              Audio Birthday Wish
            </h3>
            <p className="text-gray-600">
              Close your eyes and listen to this special message 🎵
            </p>
          </div>

          {/* Custom Audio Player */}
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-6">
            {/* HTML5 Audio Element */}
            <audio 
              controls 
              className="w-full mb-4"
              preload="metadata"
            >
              <source src="/song1.mp3" type="audio/mpeg" />
              <source src="/song1.wav" type="audio/wav" />
              Your browser does not support the audio element.
            </audio>

            <div className="text-center text-gray-600">
              <span className="text-sm">🎵 Special Birthday Message Audio</span>
            </div>
          </div>

          {/* Second Audio File */}
          <div className="mt-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6">
            <div className="text-center mb-4">
              <h4 className="text-lg font-semibold text-gray-800">Bonus Birthday Song 🎶</h4>
            </div>
            
            <audio 
              controls 
              className="w-full mb-4"
              preload="metadata"
            >
              <source src="/song2.mp3" type="audio/mpeg" />
              <source src="/song2.wav" type="audio/wav" />
              Your browser does not support the audio element.
            </audio>

            <div className="text-center text-gray-600">
              <span className="text-sm">🎶 Another Special Birthday Tune</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full shadow-lg">
            <Play className="w-5 h-5 mr-2" />
            <span className="font-medium">Made with love just for you! 💖</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;