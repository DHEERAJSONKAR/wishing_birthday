import React, { useState } from 'react';
import { Heart, Camera, X, ZoomIn } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [modalPhoto, setModalPhoto] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      url: '/photo1.jpeg',
      caption: 'Happy Birthday Pragyesh! 🎉 Another year of coding excellence and amazing achievements! 💻',
      title: 'Birthday Celebration'
    },
    {
      id: 2,
      url: '/photo2.jpeg',
      caption: 'Memories of friendship, laughter, and shared moments! ⭐ Here\'s to many more years of joy! 🎂',
      title: 'Friendship Moments'
    },
    {
      id: 3,
      url: '/photo3.jpeg',
      caption: 'Professional growth and personal milestones! 🚀 Wishing you continued success and happiness! 🌟',
      title: 'Success Journey'
    }
  ];

  const openModal = (photoId: number) => {
    setModalPhoto(photoId);
  };

  const closeModal = () => {
    setModalPhoto(null);
  };

  const currentModalPhoto = photos.find(photo => photo.id === modalPhoto);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-8 h-8 text-pink-500 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Professional Journey & Memories
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every project, every milestone, every moment of growth 🌟
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`
                group relative overflow-hidden rounded-2xl shadow-lg
                hover:shadow-2xl transform hover:scale-105 transition-all duration-500
                cursor-pointer animate-fade-in-up
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                setSelectedPhoto(selectedPhoto === photo.id ? null : photo.id);
                openModal(photo.id);
              }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/80 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn className="w-4 h-4 text-gray-700" />
                  </div>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    <Heart className="w-5 h-5 text-red-400 mr-2 animate-pulse" />
                    <span className="text-white font-medium">{photo.title}</span>
                  </div>
                  <p className="text-white text-sm leading-relaxed">{photo.caption}</p>
                </div>
              </div>

              {/* Selected State */}
              {selectedPhoto === photo.id && (
                <div className="absolute inset-0 border-4 border-pink-400 rounded-2xl animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-pink-500 mb-2">{photos.length}</div>
            <div className="text-gray-600">Professional Moments</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-500 mb-2">∞</div>
            <div className="text-gray-600">Lines of Code</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">💻</div>
            <div className="text-gray-600">Developer Excellence</div>
          </div>
        </div>
      </div>

      {/* Photo Modal */}
      {modalPhoto && currentModalPhoto && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors z-10"
              aria-label="Close photo"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Modal Content */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Image */}
              <div className="relative">
                <img
                  src={currentModalPhoto.url}
                  alt={currentModalPhoto.caption}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              {/* Caption */}
              <div className="p-6 bg-gradient-to-r from-pink-50 to-purple-50">
                <div className="flex items-center mb-3">
                  <Heart className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">{currentModalPhoto.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{currentModalPhoto.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default PhotoGallery;