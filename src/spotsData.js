// 東近江市撮影スポットデータ
export const spots = [
  {
    id: 1,
    name: '太郎坊・阿賀神社（太郎坊宮）',
    category: 'performance',
    description: '740段余りの石段チャレンジ！勝運のパワースポット',
    image: '/api/placeholder/400/250',
    tags: ['チャレンジ', 'パワースポット', '石段'],
    shootingIdeas: [
      'プリティーボーイダンス（石段背景）',
      '740段チャレンジ企画',
      'パワースポット体験動画',
      '夫婦岩通り抜け挑戦'
    ],
    practicalInfo: {
      access: '八日市ICから車で15分',
      parking: '無料駐車場あり',
      time: 'お守り作り体験 9:00-16:00',
      permission: '撮影許可要相談',
      phone: '0748-23-1341',
      address: '〒527-0091 滋賀県東近江市小脇町2247'
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
      '滋賀県グルメ紹介企画',
      '近江牛の調理過程撮影'
    ],
    practicalInfo: {
      access: '太郎坊宮前駅から徒歩15分（1.2km）',
      parking: '店舗駐車場あり',
      time: '11:30-14:00, 17:00-20:30（〜21:30）',
      permission: '事前連絡で撮影協力可能',
      phone: '要電話予約（前日まで）',
      address: '〒527-0013 滋賀県東近江市東中野町2-22'
    },
    featured: true
  },
  {
    id: 3,
    name: 'ほんまち商店街',
    category: 'history',
    description: '昭和初期から続く御代参街道の商店街',
    image: '/api/placeholder/400/250',
    tags: ['昭和レトロ', 'アーケード', '商店街'],
    shootingIdeas: [
      '昭和レトロダンス動画',
      '商店街散策・地元交流企画',
      'タイムスリップ風コンテンツ',
      'アーケード街での撮影'
    ],
    practicalInfo: {
      access: '近江鉄道八日市駅から徒歩4分',
      parking: '周辺有料駐車場利用',
      time: '店舗により異なる',
      permission: '商店街組合に要相談',
      phone: '0748-23-4528',
      website: 'https://www.honmachistreet.com/'
    }
  },
  {
    id: 4,
    name: 'たねやクラブハリエ八日市の杜',
    category: 'gourmet',
    description: '鎮守の杜に囲まれた洋菓子店、バームクーヘンが名物',
    image: '/api/placeholder/400/250',
    tags: ['バームクーヘン', 'スイーツ', '鎮守の杜'],
    shootingIdeas: [
      'バームクーヘン体験・見学',
      'カフェでのまったり時間',
      '滋賀スイーツ文化紹介',
      '森に囲まれた癒し空間'
    ],
    practicalInfo: {
      access: '東近江警察署から約200m',
      parking: '店舗駐車場あり',
      time: '店舗 9:00-18:00、カフェ 10:00-18:00（L.O.17:00）',
      permission: '店舗に要相談',
      address: '〒527-0014 滋賀県東近江市八日市緑町38-15',
      phone: '0748-22-7777'
    },
    featured: true
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
      '地域の人々との交流',
      'レトロな建物での撮影'
    ],
    practicalInfo: {
      access: '八日市駅から徒歩圏内',
      parking: '要確認',
      time: '17:00-22:30（最終23:00）',
      permission: '事前連絡必須',
      phone: '0748-22-1002',
      address: '〒527-0012 滋賀県東近江市八日市本町11-9',
      closed: '毎月3,8,13,18,23,28日'
    }
  },
  {
    id: 6,
    name: 'FORTY NINERS',
    category: 'history',
    description: 'デニム・アメカジ・ヴィンテージ専門店',
    image: '/api/placeholder/400/250',
    tags: ['ファッション', 'アメカジ', 'ヴィンテージ'],
    shootingIdeas: [
      'ファッション・スタイリング企画',
      'アメカジコーディネート動画',
      '地元ショップ紹介',
      'ヴィンテージ文化紹介'
    ],
    practicalInfo: {
      access: '近江鉄道八日市駅より徒歩5分',
      parking: '要確認',
      time: '11:00-20:00（水曜定休）',
      permission: '店舗に要相談',
      phone: '0748-23-4762',
      address: '東近江市八日市本町14-25',
      website: 'https://www.fortyniners.cc/'
    }
  },
  {
    id: 7,
    name: '萬善食堂',
    category: 'gourmet',
    description: '昭和の雰囲気漂う街食堂、リーズナブルな価格',
    image: '/api/placeholder/400/250',
    tags: ['定食', '昭和レトロ', '庶民的'],
    shootingIdeas: [
      '昭和グルメ体験',
      '地元食堂での食事風景',
      '庶民的な食文化紹介',
      'レトロな食堂の雰囲気'
    ],
    practicalInfo: {
      access: '八日市駅出口から徒歩約5分',
      parking: '要確認',
      time: '11:30-15:00, 17:00-19:00（日曜定休）',
      permission: '店舗に要相談',
      phone: '0748-22-0197',
      address: '東近江市八日市金屋1丁目3-21'
    }
  },
  {
    id: 8,
    name: '世界凧博物館東近江大凧会館',
    category: 'history',
    description: '日本一の100畳サイズ大凧展示、凧作り体験可能',
    image: '/api/placeholder/400/250',
    tags: ['凧', '博物館', '体験'],
    shootingIdeas: [
      '凧作り体験動画',
      '日本一の大凧との記念撮影',
      '伝統文化体験企画',
      '世界の凧紹介'
    ],
    practicalInfo: {
      access: '八日市駅から徒歩圏内',
      parking: '駐車場あり',
      time: '9:00-17:00（入館16:30まで）',
      permission: '館内撮影は要相談',
      phone: '0748-23-0081',
      address: '〒527-0025 滋賀県東近江市八日市東本町3番5号',
      website: 'https://oodako.net/',
      closed: '水曜日、第4火曜日、祝日の翌日',
      admission: '大人300円、学生150円'
    }
  },
  {
    id: 9,
    name: 'Vineria Ueno',
    category: 'gourmet',
    description: '洗練されたイタリアワインバー、白を基調とした空間',
    image: '/api/placeholder/400/250',
    tags: ['ワイン', 'イタリアン', '大人の空間'],
    shootingIdeas: [
      '大人の夜カフェ体験（成人メンバーのみ）',
      'イタリアワイン文化紹介',
      '洗練された空間でのトーク企画',
      '地域のナイトライフ紹介'
    ],
    practicalInfo: {
      access: '近江鉄道八日市駅から徒歩4分',
      parking: '要確認',
      time: '月-木17:00-24:00、金土15:00-24:00（日曜定休）',
      permission: '事前連絡推奨',
      phone: '050-5801-0858',
      address: '東近江市八日市本町9番19号'
    }
  },
  {
    id: 10,
    name: 'リオ',
    category: 'gourmet',
    description: '創業60年の老舗居酒屋、焼き鳥とおでんが名物',
    image: '/api/placeholder/400/250',
    tags: ['居酒屋', '焼き鳥', '老舗'],
    shootingIdeas: [
      '老舗居酒屋体験（成人メンバーのみ）',
      '地元の夜の食文化紹介',
      '60年続く味の秘密探求',
      '地域住民との交流企画'
    ],
    practicalInfo: {
      access: '八日市駅から徒歩圏内',
      parking: '要確認',
      time: '17:00-24:00（月-土、日曜定休）',
      permission: '事前連絡推奨',
      phone: '0748-23-2025',
      address: '東近江市八日市本町10-7'
    }
  },
  {
    id: 11,
    name: '永源寺温泉 八風の湯',
    category: 'nature',
    description: '愛知川を一望する露天風呂、美肌の湯として有名',
    image: '/api/placeholder/400/250',
    tags: ['温泉', '露天風呂', '美肌の湯'],
    shootingIdeas: [
      '温泉リラックス企画（外観・足湯のみ）',
      '自然に囲まれた癒し動画',
      '地域の温泉文化紹介',
      '永源寺の自然美'
    ],
    practicalInfo: {
      access: '八日市ICから車で約25分',
      parking: '駐車場完備',
      time: '10:00-22:00（最終入館21:00）',
      permission: '施設に要相談',
      phone: '0748-27-1126',
      address: '〒527-0212 滋賀県東近江市永源寺高野町352',
      website: 'https://www.happuno-yu.com/eigenji/',
      admission: '平日：大人1,300円、小人700円　土日祝：大人1,500円、小人800円'
    }
  },
  {
    id: 12,
    name: 'ヒトミワイナリー',
    category: 'gourmet',
    description: '日本唯一のにごりワイン専門ワイナリー（1991年創業）',
    image: '/api/placeholder/400/250',
    tags: ['ワイン', 'にごりワイン', '地産地消'],
    shootingIdeas: [
      'ワイン製造見学（成人メンバーのみ試飲）',
      'ぶどう畑での撮影',
      '地域の特産品紹介',
      'ワイン文化の紹介'
    ],
    practicalInfo: {
      access: '東近江市山上町',
      parking: 'あり',
      time: '10:00-18:00（年末年始のみ休業）',
      permission: '事前連絡必須',
      website: 'http://www.nigoriwine.jp/'
    }
  },
  {
    id: 13,
    name: '道の駅 奥永源寺渓流の里',
    category: 'nature',
    description: '政所茶と木地師のふるさと、鈴鹿の自然',
    image: '/api/placeholder/400/250',
    tags: ['政所茶', '木地師', '道の駅'],
    shootingIdeas: [
      '政所茶体験・茶摘み',
      '木地師の伝統工芸見学',
      '道の駅グルメ紹介',
      '鈴鹿の自然美'
    ],
    practicalInfo: {
      access: '八日市ICから国道421号を東に約25分',
      parking: '駐車場完備',
      time: '9:00-17:30（12-3月は16:30まで）',
      permission: '施設に要相談',
      phone: '0748-29-0428',
      address: '〒527-0207 滋賀県東近江市蓼畑町510',
      website: 'https://okueigenji-keiryunosato.com/',
      closed: '火曜日（祝日の場合は翌日）、12/29-1/3'
    }
  }
];

export const categories = [
  { id: 'all', name: '全て', icon: 'Star' },
  { id: 'performance', name: 'ダンス・パフォーマンス', icon: 'Users' },
  { id: 'gourmet', name: 'グルメ・体験', icon: 'Utensils' },
  { id: 'history', name: '歴史・文化', icon: 'Building' },
  { id: 'nature', name: '自然・風景', icon: 'TreePine' }
];

export const videoPlans = [
  {
    id: 1,
    title: '動画1: 前泊編「初の滋賀県！近江牛すき焼きと宿泊体験」',
    duration: '15-20分',
    spots: [
      '新八日市駅到着',
      'ほんまち商店街散策',
      'たねやクラブハリエ八日市の杜',
      'すき焼きにしむら',
      '延命湯（外観のみ）'
    ],
    highlights: [
      '初の滋賀県上陸の感動',
      '昭和レトロな商店街探索',
      '本場近江牛すき焼き体験',
      '地域の人々との交流'
    ]
  },
  {
    id: 2,
    title: '動画2: チャレンジ編「太郎坊宮740段石段ダッシュに挑戦！」',
    duration: '20-25分',
    spots: [
      '太郎坊宮（メイン）',
      '大凧会館',
      '永源寺方面 or 近江八幡方面'
    ],
    highlights: [
      '740段石段チャレンジ',
      'パワースポット体験',
      '伝統文化との触れ合い',
      '東近江市の自然美'
    ]
  }
];



// 宿泊施設データ
export const hotels = [
  {
    id: 1,
    name: '八日市ロイヤルホテル',
    area: '東近江市',
    category: 'city_hotel',
    rating: 3,
    recommended: true,
    description: '八日市ICから車で約1分の好立地シティホテル（公式サイト: https://www.y-royal.co.jp/）',
    image: '/api/placeholder/400/250',
    features: ['駐車場150台', '朝食バイキング', '会議室', 'レストラン'],
    practicalInfo: {
      address: '滋賀県東近江市妙法寺町690番地',
      phone: '0748-24-0111',
      website: 'https://www.y-royal.co.jp/',
      access: '名神高速道路八日市ICより車で1分',
      rooms: '80室',
      parking: '150台（無料）',
      breakfast: '和洋朝食バイキング',
      website: 'https://www.y-royal.co.jp/'
    },
    advantages: [
      '太郎坊宮まで車で15分の好立地',
      '大型駐車場でスタッフ車両も安心',
      '朝食バイキングで撮影前の栄養補給',
      '会議室で打ち合わせ可能'
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
      website: 'https://www.ab-hotel.jp/ohmi/',
      rooms: '126室',
      parking: '有料駐車場',
      breakfast: '無料朝食'
    },
    advantages: [
      '駅直結でアクセス抜群',
      '大浴場で撮影後のリラックス',
      '近江八幡観光スポットに近い',
      'ラコリーナまで車で約15分'
    ]
  },
  {
    id: 3,
    name: 'コンフォートイン八日市',
    area: '東近江市',
    category: 'business_hotel',
    rating: 3,
    recommended: false,
    description: '八日市ICから車で約1分、全室禁煙のビジネスホテルチェーン',
    image: '/api/placeholder/400/250',
    features: ['焼き立てパン朝食', 'オリジナル寝具', '全室禁煙'],
    practicalInfo: {
      address: '滋賀県東近江市中小路町495-1',
      access: '八日市ICから車で約1分',
      breakfast: '焼き立てパンの無料朝食',
      parking: '40台（無料）',
      checkin: '15:00-24:00',
      checkout: '10:00',
      website: 'https://www.choice-hotels.jp/inn/yokaichi/'
    },
    advantages: [
      '安定したサービス品質',
      '無料朝食で撮影前の準備',
      'ICからのアクセス良好'
    ]
  },
  {
    id: 4,
    name: 'コンフォートイン近江八幡',
    area: '近江八幡市',
    category: 'business_hotel',
    rating: 3,
    recommended: false,
    description: 'JR近江八幡駅北口から徒歩約2分',
    image: '/api/placeholder/400/250',
    features: ['駅徒歩2分', '焼き立てパン朝食', '駐車場44台'],
    practicalInfo: {
      address: '滋賀県近江八幡市鷹飼町514-1',
      phone: '0748-36-0001',
      access: 'JR近江八幡駅北口より徒歩約2分',
      parking: '無料駐車場あり',
      rooms: '116室（全室禁煙）',
      website: 'https://www.choice-hotels.jp/inn/omihachiman/'
    },
    advantages: [
      '駅至近でアクセス便利',
      '安定したチェーンホテル品質',
      '近江八幡観光に最適立地'
    ]
  },
  {
    id: 5,
    name: 'ホテルはちまん',
    area: '近江八幡市',
    category: 'business_hotel',
    rating: 3,
    recommended: false,
    description: '全室バス・トイレセパレート、6タイプの客室',
    image: '/api/placeholder/400/250',
    features: ['バス・トイレ別', '6タイプ客室', '静かな環境'],
    practicalInfo: {
      address: '滋賀県近江八幡市桜宮町285',
      phone: '0748-33-1771',
      access: 'JR近江八幡駅北口から徒歩5分',
      price: '1名様素泊まり7,500円～',
      website: 'https://www.hotel-hachiman.com/',
      parking: '45台（無料）',
      checkin: '16:00',
      checkout: '10:00'
    },
    advantages: [
      'バス・トイレ別でリラックス',
      '多様な客室タイプ',
      '近江八幡の町並みに調和した環境'
    ]
  },
  {
    id: 6,
    name: 'ビジネスホテルシェル',
    area: '近江八幡市',
    category: 'business_hotel',
    rating: 2,
    recommended: false,
    description: '国道8号線沿い、大型車駐車可能',
    image: '/api/placeholder/400/250',
    features: ['大型車対応', '無料駐車場', 'リーズナブル'],
    practicalInfo: {
      address: '滋賀県近江八幡市友定町494-1',
      phone: '0748-37-8451',
      access: '国道421号て8号の交差点、竜王ICから約15分',
      rooms: '22室',
      parking: '22台（10t車まで対応）'
    },
    advantages: [
      '大型車両対応（機材車両など）',
      '三井アウトレットパーク竜王まで車で約15分',
      'リーズナブルな料金'
    ]
  }
];

export const hotelCategories = [
  { id: 'all', name: '全て', icon: 'Building' },
  { id: 'recommended', name: '推奨ホテル', icon: 'Star' },
  { id: 'city_hotel', name: 'シティホテル', icon: 'Building2' },
  { id: 'business_hotel', name: 'ビジネスホテル', icon: 'Briefcase' }
];

export const accommodationPlans = [
  {
    id: 1,
    title: '東近江市中心プラン',
    hotel: '八日市ロイヤルホテル',
    duration: '1泊2日',
    schedule: [
      '1日目: 八日市到着 → ホテルチェックイン → すき焼きにしむら',
      '2日目: 太郎坊宮チャレンジ → 東近江市内観光'
    ],
    merits: [
      '太郎坊宮に最も近い',
      '東近江市の魅力を最大限活用',
      '移動時間の短縮'
    ]
  },
  {
    id: 2,
    title: '近江八幡拠点プラン',
    hotel: 'ABホテル近江八幡',
    duration: '1泊2日',
    schedule: [
      '1日目: 近江八幡到着 → ラコリーナ → ホテル（大浴場でリラックス）',
      '2日目: 太郎坊宮チャレンジ → 近江八幡観光'
    ],
    merits: [
      '大浴場で疲労回復',
      '近江八幡の観光スポット充実',
      '駅からのアクセス抜群'
    ]
  },
  {
    id: 3,
    title: '2泊3日満喫プラン',
    hotel: '近江八幡 + 東近江市',
    duration: '2泊3日',
    schedule: [
      '1日目: 近江八幡観光・グルメ（ABホテル近江八幡泊）',
      '2日目: 太郎坊宮チャレンジ → 東近江市観光（八日市ロイヤルホテル泊）',
      '3日目: 永源寺方面 → 帰路'
    ],
    merits: [
      '両市の魅力を最大限体験',
      '移動負担軽減',
      'より多くのコンテンツ撮影可能'
    ]
  }
];

