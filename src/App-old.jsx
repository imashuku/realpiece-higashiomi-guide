import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { MapPin, Camera, Clock, Users, Star, Mountain, Building, Utensils, TreePine, Building2, Briefcase, Bed, Phone, Car } from 'lucide-react'
import heroBg from './assets/hero-bg.jpg'
import './App.css'
import { spots, categories, hotels, hotelCategories } from './spotsData'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedHotelCategory, setSelectedHotelCategory] = useState('all')

  // categoriesとhotelCategoriesはspotsData.jsからインポート

  const iconMap = {
    Star,
    Users,
    Utensils,
    Building,
    TreePine,
    Building2,
    Briefcase
  }

  const hotels = [
    {
      id: 1,
      name: '八日市ロイヤルホテル',
      area: '東近江市',
      category: 'city_hotel',
      rating: 3,
      recommended: true,
      description: '八日市ICから車で約1分の好立地シティホテル',
      image: '/api/placeholder/400/250',
      features: ['駐車場150台', '朝食バイキング', '会議室', 'レストラン'],
      practicalInfo: {
        address: '滋賀県東近江市妙法寺町690番地',
        phone: '0748-24-0111',
        access: '名神高速道路八日市ICより車で1分',
        rooms: '80室',
        parking: '150台（無料）'
      },
      advantages: [
        '太郎坊宮まで車で15分の好立地',
        '大型駐車場でスタッフ車両も安心',
        '朝食バイキングで撮影前の栄養補給'
      ]
    },
    {
      id: 2,
      name: 'ABホテル近江八幡',
      area: '近江八幡市',
      category: 'business_hotel',
      rating: 4,
      recommended: true,
      description: 'JR近江八幡駅から徒歩2分、大浴場完備',
      image: '/api/placeholder/400/250',
      features: ['大浴場', '駅徒歩2分', '無料朝食', 'コインランドリー'],
      practicalInfo: {
        address: '滋賀県近江八幡市鷹飼町',
        access: 'JR琵琶湖線「近江八幡駅」より徒歩2分',
        rooms: '126室'
      },
      advantages: [
        '駅直結でアクセス抜群',
        '大浴場で撮影後のリラックス',
        '近江八幡観光スポットに近い'
      ]
    },
    {
      id: 3,
      name: 'ほんまちホテル',
      area: '東近江市',
      category: 'boutique_hotel',
      rating: 4,
      recommended: true,
      description: '本町商店街の歴史を引き継ぐブティックホテル',
      image: '/api/placeholder/400/250',
      features: ['ブティックホテル', '商店街立地', '歴史文化体験', '昭和レトロ'],
      practicalInfo: {
        address: '滋賀県東近江市八日市本町13-6',
        access: '近江鉄道八日市駅前、名神八日市ICより車で約15分',
        checkin: '15:00-20:00',
        checkout: '11:00'
      },
      advantages: [
        '本町商店街での撮影に最適立地',
        '昭和レトロな雰囲気でコンテンツ撮影',
        '太郎坊宮まで徒歩圏内',
        '商店街での地元交流企画に最適'
      ]
    },
    {
      id: 4,
      name: 'NIPPONIA 五個荘 近江商人の町',
      area: '東近江市',
      category: 'luxury_heritage',
      rating: 5,
      recommended: true,
      description: '近江商人屋敷を現代に甦らせた一棟貸し古民家ホテル',
      image: '/api/placeholder/400/250',
      features: ['一棟貸し', '登録有形文化財', '日本庭園', '最大10名'],
      practicalInfo: {
        address: '滋賀県東近江市五個荘金堂町645番地',
        phone: '080-7000-7068',
        access: '八日市ICから車で約20分',
        rooms: '2室（一棟貸し）',
        parking: '3台（無料）'
      },
      advantages: [
        '5名グループで一棟貸し切り可能',
        '160年の歴史ある建造物での特別体験',
        '日本庭園での美しい撮影',
        'デイユース・撮影利用も可能'
      ]
    },
    {
      id: 5,
      name: 'コンフォートイン八日市',
      area: '東近江市',
      category: 'business_hotel',
      rating: 3,
      recommended: false,
      description: '八日市ICから車で約1分、ビジネスホテルチェーン',
      image: '/api/placeholder/400/250',
      features: ['焼き立てパン朝食', 'オリジナル寝具', '全室禁煙'],
      practicalInfo: {
        address: '滋賀県東近江市中小路町495-1',
        access: '八日市ICから車で約1分'
      },
      advantages: [
        '安定したサービス品質',
        '無料朝食で撮影前の準備'
      ]
    }
  ]

  const spots = [
    {
      id: 1,
      name: '太郎坊宮（阿賀神社）',
      category: 'performance',
      description: '379段の石段チャレンジ！勝運のパワースポット',
      image: '/api/placeholder/400/250',
      tags: ['チャレンジ', 'パワースポット', '石段'],
      shootingIdeas: [
        'プリティーボーイダンス（石段背景）',
        '379段チャレンジ企画',
        'パワースポット体験動画',
        '夫婦岩通り抜け挑戦'
      ],
      practicalInfo: {
        access: '八日市ICから車で15分',
        parking: '無料駐車場あり',
        time: '24時間参拝可能',
        permission: '撮影許可要相談'
      },
      featured: true
    },
    {
      id: 2,
      name: 'すき焼き にしむら',
      category: 'gourmet',
      description: '昭和37年創業の老舗！本場近江牛すき焼き',
      image: '/api/placeholder/400/250',
      tags: ['近江牛', 'すき焼き', '老舗'],
      shootingIdeas: [
        '近江牛すき焼き体験（ASMR要素）',
        '老舗店主との交流動画',
        '滋賀県グルメ紹介企画'
      ],
      practicalInfo: {
        access: '太郎坊宮から徒歩5分',
        parking: '店舗駐車場あり',
        time: '11:30-14:00, 17:00-21:00',
        permission: '事前連絡で撮影協力可能'
      },
      featured: true
    },
    {
      id: 3,
      name: 'たねやクラブハリエ八日市の杜',
      category: 'gourmet',
      description: '鎮守の杜に囲まれた洋菓子店、バームクーヘンが名物',
      image: '/api/placeholder/400/250',
      tags: ['バームクーヘン', 'スイーツ', '鎮守の杜'],
      shootingIdeas: [
        'バームクーヘン体験・見学',
        'カフェでのまったり時間',
        '滋賀スイーツ文化紹介'
      ],
      practicalInfo: {
        access: '東近江警察署から約200m',
        parking: '店舗駐車場あり',
        time: '店舗・カフェ営業時間要確認',
        permission: '店舗に要相談'
      },
      featured: true
    },
    {
      id: 4,
      name: 'ほんまち商店街',
      category: 'history',
      description: '昭和初期から続く御代参街道の商店街',
      image: '/api/placeholder/400/250',
      tags: ['昭和レトロ', 'アーケード', '商店街'],
      shootingIdeas: [
        '昭和レトロダンス動画',
        '商店街散策・地元交流企画',
        'タイムスリップ風コンテンツ'
      ],
      practicalInfo: {
        access: '近江鉄道八日市駅から徒歩4分',
        parking: '周辺有料駐車場利用',
        time: '店舗により異なる',
        permission: '商店街組合に要相談'
      }
    },
    {
      id: 5,
      name: '延命湯',
      category: 'history',
      description: '昭和7年創業、市内唯一の銭湯、薪で沸かしたお湯',
      image: '/api/placeholder/400/250',
      tags: ['銭湯', '昭和レトロ', '薪風呂'],
      shootingIdeas: [
        '銭湯体験動画（外観・足湯のみ）',
        '昭和文化体験企画',
        '地域の人々との交流'
      ],
      practicalInfo: {
        access: '八日市駅から徒歩圏内',
        parking: '要確認',
        time: '17:00-22:30（最終23:00）',
        permission: '事前連絡必須'
      }
    }
  ]

  const filteredSpots = selectedCategory === 'all' 
    ? spots 
    : spots.filter(spot => spot.category === selectedCategory)

  const filteredHotels = selectedHotelCategory === 'all' 
    ? hotels 
    : selectedHotelCategory === 'recommended'
    ? hotels.filter(hotel => hotel.recommended)
    : hotels.filter(hotel => hotel.category === selectedHotelCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              REAL PIECE
              <span className="block text-3xl md:text-4xl text-yellow-400 mt-2">
                × 東近江市
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              リアルピース専用撮影ガイド<br />
              太郎坊チャレンジを最高のコンテンツに
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg">
                <Camera className="mr-2 h-5 w-5" />
                撮影スポットを見る
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
                <Mountain className="mr-2 h-5 w-5" />
                企画提案を見る
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const Icon = iconMap[category.icon]
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Spots Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            撮影スポット一覧
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            リアルピースのコンテンツ特性に合わせて厳選した東近江市の撮影スポット。
            それぞれに具体的な企画提案付き。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpots.map((spot) => (
            <Card key={spot.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-1">
                    {spot.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-white/90 text-black">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{spot.name}</CardTitle>
                <CardDescription className="text-base">
                  {spot.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center">
                      <Camera className="h-4 w-4 mr-1" />
                      撮影企画案
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {spot.shootingIdeas.map((idea, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          {idea}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {spot.practicalInfo.access}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {spot.practicalInfo.time}
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    詳細を見る
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Hotels Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              宿泊施設情報
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              リアルピースの皆さんに最適な宿泊施設をご提案。
              撮影スケジュールに合わせた立地とサービスを重視して選定。
            </p>
          </div>

          {/* Hotel Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {hotelCategories.map((category) => {
              const Icon = iconMap[category.icon]
              return (
                <Button
                  key={category.id}
                  variant={selectedHotelCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedHotelCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </Button>
              )
            })}
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <Badge variant="secondary" className="bg-blue-600 text-white">
                      {hotel.area}
                    </Badge>
                    {hotel.recommended && (
                      <Badge variant="secondary" className="bg-yellow-500 text-black">
                        <Star className="h-3 w-3 mr-1" />
                        推奨
                      </Badge>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-1">
                      {hotel.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="bg-white/90 text-black text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl flex items-center justify-between">
                    {hotel.name}
                    <div className="flex">
                      {[...Array(hotel.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {hotel.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        リアルピース向けメリット
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {hotel.advantages.map((advantage, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {advantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2 text-xs text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {hotel.practicalInfo.access}
                      </div>
                      {hotel.practicalInfo.phone && (
                        <div className="flex items-center">
                          <Phone className="h-3 w-3 mr-1" />
                          {hotel.practicalInfo.phone}
                        </div>
                      )}
                      {hotel.practicalInfo.parking && (
                        <div className="flex items-center">
                          <Car className="h-3 w-3 mr-1" />
                          駐車場: {hotel.practicalInfo.parking}
                        </div>
                      )}
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      予約・詳細確認
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Accommodation Plans */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              宿泊プラン提案
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">東近江市中心プラン</CardTitle>
                  <CardDescription>八日市ロイヤルホテル / 1泊2日</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 mb-4">
                    <li>• 1日目: 八日市到着 → すき焼きにしむら</li>
                    <li>• 2日目: 太郎坊宮チャレンジ → 市内観光</li>
                  </ul>
                  <div className="text-xs text-green-600">
                    ✓ 太郎坊宮に最も近い ✓ 移動時間短縮
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-700">歴史文化体験プラン</CardTitle>
                  <CardDescription>ほんまちホテル / 1泊2日</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 mb-4">
                    <li>• 1日目: 本町商店街散策・撮影</li>
                    <li>• 2日目: 太郎坊宮 → 商店街地元交流</li>
                  </ul>
                  <div className="text-xs text-green-600">
                    ✓ 昭和レトロ雰囲気 ✓ 地域密着コンテンツ
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-700">特別体験・高級プラン</CardTitle>
                  <CardDescription>NIPPONIA 五個荘 / 1泊2日</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 mb-4">
                    <li>• 1日目: 古民家チェックイン → 近江商人文化体験</li>
                    <li>• 2日目: 太郎坊宮 → 五個荘金堂散策</li>
                  </ul>
                  <div className="text-xs text-green-600">
                    ✓ 一棟貸し切り ✓ 160年の歴史体験
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">近江八幡拠点プラン</CardTitle>
                  <CardDescription>ABホテル近江八幡 / 1泊2日</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 mb-4">
                    <li>• 1日目: ラコリーナ → 大浴場でリラックス</li>
                    <li>• 2日目: 太郎坊宮 → 近江八幡観光</li>
                  </ul>
                  <div className="text-xs text-green-600">
                    ✓ 大浴場で疲労回復 ✓ 観光スポット充実
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="text-lg text-red-700">2泊3日プレミアムプラン</CardTitle>
                  <CardDescription>NIPPONIA + ほんまちホテル / 2泊3日</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 mb-4">
                    <li>• 1日目: 五個荘古民家体験</li>
                    <li>• 2日目: 太郎坊宮 → 本町商店街</li>
                    <li>• 3日目: 商店街散策 → 帰路</li>
                  </ul>
                  <div className="text-xs text-green-600">
                    ✓ 最も多様なコンテンツ ✓ 歴史の流れを体験
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            太郎坊チャレンジを最高のコンテンツに
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            リアルピースの皆さんの初の滋賀県挑戦を、東近江市が全力でサポートします。
            地域の魅力とリアルピースの魅力を掛け合わせた、最高のコンテンツを一緒に作りましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4">
              企画提案書をダウンロード
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4">
              お問い合わせ
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 東近江市観光協会 × REAL PIECE 撮影ガイド
          </p>
          <p className="text-sm text-gray-500 mt-2">
            太郎坊チャレンジ2025 特別企画
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

