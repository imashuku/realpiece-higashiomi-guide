import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { MapPin, Camera, Clock, Users, Star, Mountain, Building, Utensils, TreePine, Building2, Briefcase, Bed, Phone, Car } from 'lucide-react'
import heroBg from './assets/hero-bg.jpg'
import './App.css'
import { spots, categories, hotels, hotelCategories, videoPlans, accommodationPlans } from './spotsData'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedHotelCategory, setSelectedHotelCategory] = useState('all')

  const iconMap = {
    Star,
    Users,
    Utensils,
    Building,
    TreePine,
    Building2,
    Briefcase
  }

  const filteredSpots = selectedCategory === 'all' 
    ? spots 
    : spots.filter(spot => spot.category === selectedCategory)

  const filteredHotels = selectedHotelCategory === 'all'
    ? hotels
    : selectedHotelCategory === 'recommended'
    ? hotels.filter(hotel => hotel.recommended)
    : hotels.filter(hotel => hotel.category === selectedHotelCategory)

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gray-900">
        <img 
          src={heroBg}
          alt="東近江市の風景" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              東近江市撮影ガイド
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              リアルピースの皆様へ<br />
              太郎坊宮チャレンジを中心とした撮影スポットと宿泊施設のご案内
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('spots')}>
                <Camera className="mr-2 h-5 w-5" />
                撮影スポットを見る
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white" onClick={() => scrollToSection('hotels')}>
                <Bed className="mr-2 h-5 w-5" />
                宿泊施設を見る
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Spots Section */}
      <section id="spots" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">撮影スポット一覧</h2>
            <p className="text-gray-600">各スポットの詳細情報と撮影アイデアをまとめました</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map(category => {
              const Icon = iconMap[category.icon]
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </Button>
              )
            })}
          </div>

          {/* Spots Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpots.map(spot => (
              <Card key={spot.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={spot.image} 
                    alt={spot.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/api/placeholder/400/250'
                    }}
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{spot.name}</CardTitle>
                    {spot.featured && (
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        注目
                      </Badge>
                    )}
                  </div>
                  <CardDescription>{spot.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {spot.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center">
                        <Camera className="w-4 h-4 mr-1" />
                        撮影アイデア
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {spot.shootingIdeas.map((idea, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {idea}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t">
                      <h4 className="font-semibold text-sm mb-2">実務情報</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-start">
                          <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{spot.practicalInfo.access}</span>
                        </div>
                        <div className="flex items-start">
                          <Car className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{spot.practicalInfo.parking}</span>
                        </div>
                        <div className="flex items-start">
                          <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{spot.practicalInfo.time}</span>
                        </div>
                        {spot.practicalInfo.permission && (
                          <div className="flex items-start">
                            <Camera className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-orange-600">{spot.practicalInfo.permission}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Plans Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">動画企画案</h2>
            <p className="text-gray-600">2本の動画構成で東近江市の魅力を発信</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videoPlans.map(plan => (
              <Card key={plan.id} className="overflow-hidden">
                <CardHeader className="bg-primary text-white">
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <CardDescription className="text-gray-100">
                    所要時間: {plan.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">撮影スポット</h4>
                    <ul className="space-y-1">
                      {plan.spots.map((spot, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          {spot}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">見どころ</h4>
                    <ul className="space-y-1">
                      {plan.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <Star className="w-4 h-4 mr-2 text-yellow-500 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section id="hotels" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">宿泊施設</h2>
            <p className="text-gray-600">東近江市・近江八幡市のおすすめホテル</p>
          </div>

          {/* Hotel Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {hotelCategories.map(category => {
              const Icon = iconMap[category.icon]
              return (
                <Button
                  key={category.id}
                  variant={selectedHotelCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedHotelCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </Button>
              )
            })}
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHotels.map(hotel => (
              <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/api/placeholder/400/250'
                    }}
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{hotel.name}</CardTitle>
                      <p className="text-sm text-gray-500">{hotel.area}</p>
                    </div>
                    {hotel.recommended && (
                      <Badge className="bg-green-100 text-green-800">
                        推奨
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center mt-2">
                    {renderStars(hotel.rating)}
                  </div>
                  <CardDescription className="mt-2">{hotel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {hotel.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{hotel.practicalInfo.access}</span>
                    </div>
                    {hotel.practicalInfo.phone && (
                      <div className="flex items-start">
                        <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{hotel.practicalInfo.phone}</span>
                      </div>
                    )}
                    {hotel.practicalInfo.parking && (
                      <div className="flex items-start">
                        <Car className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{hotel.practicalInfo.parking}</span>
                      </div>
                    )}
                  </div>

                  {hotel.advantages && (
                    <div className="mt-4 pt-4 border-t">
                      <h4 className="font-semibold text-sm mb-2">メリット</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {hotel.advantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            {advantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Plans Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">宿泊プラン案</h2>
            <p className="text-gray-600">撮影スケジュールに合わせた最適な宿泊プラン</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {accommodationPlans.map(plan => (
              <Card key={plan.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{plan.title}</CardTitle>
                  <CardDescription>
                    {plan.hotel} / {plan.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">スケジュール</h4>
                    <ul className="space-y-1 text-sm">
                      {plan.schedule.map((item, idx) => (
                        <li key={idx} className="text-gray-600">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">このプランのメリット</h4>
                    <ul className="space-y-1">
                      {plan.merits.map((merit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <span className="text-primary mr-2">•</span>
                          {merit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">東近江市撮影ガイド - リアルピース様専用</p>
          <p className="text-sm text-gray-400">
            このガイドは2024年8月時点の情報をもとに作成されています
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App