function HotelCard({ hotel }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-48 bg-gray-200">
        <img
          src={`/images/hotels/${hotel.id}/${hotel.images[0]}`}
          alt={hotel.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = '/images/placeholder.jpg';
          }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
        <p className="text-gray-600 mb-4">{hotel.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold mb-2">特徴</h4>
          <div className="flex flex-wrap gap-2">
            {hotel.features.map((feature, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-2xl font-bold text-blue-600">
          {hotel.price}
        </div>
      </div>
    </div>
  );
}

export default HotelCard;