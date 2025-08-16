import { spots, hotels } from './data/spots';
import SpotCard from './components/SpotCard';
import HotelCard from './components/HotelCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">リアルピース向け東近江市撮影ガイド</h1>
          <p className="mt-2 text-blue-200">東近江市とその周辺の撮影スポット情報</p>
        </div>
      </header>
      
      {/* ヒーローセクション */}
      <section className="relative h-96 bg-gray-300">
        <img
          src="/images/hero.jpg"
          alt="東近江市の風景"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">東近江市の魅力を撮影で伝える</h2>
            <p className="text-xl">歴史と自然が織りなす撮影スポット</p>
          </div>
        </div>
      </section>
      
      {/* 撮影スポット */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">撮影スポット</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spots.map((spot) => (
            <SpotCard key={spot.id} spot={spot} />
          ))}
        </div>
      </section>
      
      {/* 宿泊情報 */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">おすすめ宿泊施設</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>
      
      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 リアルピース向け東近江市撮影ガイド</p>
        </div>
      </footer>
    </div>
  );
}

export default App;