import React, { useState, useRef, useEffect } from 'react';
import { Music, Play, Pause, Volume2, VolumeX, SkipForward, SkipBack } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Your audio files from public folder
  const songs = [
    {
      id: 1,
      title: 'Birthday Song 1',
      src: '/song1.mp3', // Adjust extension if needed (.wav, .mp3, etc.)
      emoji: '🎵'
    },
    {
      id: 2,
      title: 'Birthday Song 2', 
      src: '/song2.mp3', // Adjust extension if needed
      emoji: '🎶'
    }
  ];

  const currentSong = songs[currentSongIndex];

  // Auto-play when component mounts
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      // Try to auto-play (some browsers block this)
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log('Auto-play prevented:', error);
            // Auto-play was prevented, user will need to click play
          });
      }
    }
  }, [isLoaded]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.log('Play failed:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onLoadedData={handleLoadedData}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        key={currentSong.src} // Force reload when song changes
      >
        <source src={currentSong.src} type="audio/mpeg" />
        <source src={currentSong.src} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Control Panel */}
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-4 border border-purple-200 animate-bounce-gentle min-w-[280px]">
        {/* Song Info */}
        <div className="text-center mb-2">
          <p className="text-sm font-medium text-gray-800">
            {currentSong.emoji} {currentSong.title}
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2">
          {/* Previous Button */}
          <button
            onClick={prevSong}
            className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            aria-label="Previous song"
          >
            <SkipBack className="w-4 h-4 text-white" />
          </button>

          {/* Music Icon with animation */}
          <div className={`flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ${isPlaying ? 'animate-pulse' : ''}`}>
            <Music className="w-5 h-5 text-white" />
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            aria-label={isPlaying ? 'Pause birthday music' : 'Play birthday music'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white ml-0.5" />
            )}
          </button>

          {/* Next Button */}
          <button
            onClick={nextSong}
            className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            aria-label="Next song"
          >
            <SkipForward className="w-4 h-4 text-white" />
          </button>

          {/* Volume Control */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMute}
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
            
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>

        {/* Now Playing Text */}
        <div className="mt-2 text-center">
          <p className="text-xs text-gray-600">
            {isPlaying ? `🎵 Playing ${currentSong.title}!` : `🎼 Click to Play Birthday Songs`}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Song {currentSongIndex + 1} of {songs.length}
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s infinite;
        }
        
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8B5CF6, #EC4899);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8B5CF6, #EC4899);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-webkit-slider-track {
          background: linear-gradient(45deg, #E5E7EB, #D1D5DB);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;