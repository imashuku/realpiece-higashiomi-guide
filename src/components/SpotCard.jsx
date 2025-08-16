import { useState } from 'react';

function SpotCard({ spot }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % spot.images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + spot.images.length) % spot.images.length);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64 bg-gray-200">
        <img
          src={`/images/spots/${spot.id}/${spot.images[currentImageIndex]}`}
          alt={spot.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = '/images/placeholder.jpg';
          }}
        />
        
        {spot.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              →
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {spot.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{spot.name}</h3>
        <p className="text-gray-600 mb-4">{spot.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold mb-2">撮影ポイント</h4>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {spot.highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-between text-sm">
          <div>
            <span className="font-semibold">ベストタイム:</span> {spot.bestTime}
          </div>
          <div>
            <span className="font-semibold">アクセス:</span> {spot.access}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpotCard;