// mockData/communities.js
export const communities = [
  {
    id: 1,
    name: "Teknoloji",
    description:
      "Teknoloji dünyasındaki en son gelişmeler, haberler ve tartışmalar",
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
    member_count: 125000,
    post_count: 45000,
    category: "Technology",
    is_verified: true,
    is_featured: true,
    growth_rate: "15%",
    rules: "1. Saygılı olun\n2. Spam yapmayın\n3. İlgili içerik paylaşın",
    tags: ["teknoloji", "yazılım", "donanım", "yapay zeka"],
    cover_image_url: "https://picsum.photos/1920/400",
  },
  {
    id: 2,
    name: "Gaming",
    description:
      "Oyun dünyasının en büyük Türk topluluğu. Oyun haberleri, incelemeler ve tartışmalar",
    created_at: "2023-02-15T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
    member_count: 98000,
    post_count: 32000,
    category: "Gaming",
    is_verified: true,
    is_featured: true,
    growth_rate: "12%",
    rules: "1. Spoiler kullanın\n2. Oyuncu dostu olun\n3. Kurallara uyun",
    tags: ["oyun", "gaming", "espor", "playstation", "xbox", "pc"],
    cover_image_url: "https://picsum.photos/1920/401",
  },
  {
    id: 3,
    name: "Sinema",
    description:
      "Film ve dizi dünyasından en son haberler, incelemeler ve öneriler",
    created_at: "2023-03-10T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
    member_count: 85000,
    post_count: 28000,
    category: "Entertainment",
    is_verified: true,
    is_featured: true,
    growth_rate: "10%",
    rules:
      "1. Spoiler kullanın\n2. Saygılı tartışın\n3. Kaliteli içerik paylaşın",
    tags: ["film", "dizi", "sinema", "netflix", "hollywood"],
    cover_image_url: "https://picsum.photos/1920/402",
  },
  {
    id: 4,
    name: "Kitap",
    description:
      "Kitapseverler için öneriler, incelemeler ve edebi tartışmalar",
    created_at: "2023-04-20T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
    member_count: 45000,
    post_count: 15000,
    category: "Arts",
    is_verified: true,
    growth_rate: "8%",
    rules: "1. Spoiler kullanın\n2. Saygılı olun\n3. Kaliteli tartışma yapın",
    tags: ["kitap", "edebiyat", "roman", "şiir"],
    cover_image_url: "https://picsum.photos/1920/403",
  },
  {
    id: 5,
    name: "Spor",
    description: "Spor dünyasından haberler, maç sonuçları ve tartışmalar",
    created_at: "2023-05-05T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
    member_count: 75000,
    post_count: 25000,
    category: "Sports",
    is_verified: true,
    is_featured: true,
    growth_rate: "9%",
    rules: "1. Saygılı olun\n2. Nefret söylemi yapmayın\n3. Fair play",
    tags: ["futbol", "basketbol", "formula1", "tenis"],
    cover_image_url: "https://picsum.photos/1920/404",
  },
  {
    id: 6,
    name: "Müzik",
    description: "Müzik dünyasından haberler, yeni çıkan albümler ve konserler",
    created_at: "2023-06-15T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
    member_count: 65000,
    post_count: 22000,
    category: "Arts",
    is_verified: true,
    growth_rate: "7%",
    rules: "1. Telif haklarına saygı gösterin\n2. Kaliteli paylaşım yapın",
    tags: ["müzik", "konser", "festival", "albüm"],
    cover_image_url: "https://picsum.photos/1920/405",
  },
  {
    id: 7,
    name: "Bilim",
    description: "Bilim dünyasından en son gelişmeler ve keşifler",
    created_at: "2023-07-01T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
    member_count: 55000,
    post_count: 18000,
    category: "Education",
    is_verified: true,
    growth_rate: "11%",
    rules: "1. Bilimsel kaynak gösterin\n2. Saygılı tartışın",
    tags: ["bilim", "uzay", "fizik", "biyoloji"],
    cover_image_url: "https://picsum.photos/1920/406",
  },
  {
    id: 8,
    name: "Yemek",
    description: "Yemek tarifleri, restoran önerileri ve mutfak sırları",
    created_at: "2023-08-10T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
    member_count: 42000,
    post_count: 16000,
    category: "Lifestyle",
    is_verified: true,
    growth_rate: "6%",
    rules: "1. Orijinal içerik paylaşın\n2. Kaynak belirtin",
    tags: ["yemek", "tarif", "mutfak", "gastronomi"],
    cover_image_url: "https://picsum.photos/1920/407",
  },
  {
    id: 9,
    name: "Seyahat",
    description: "Gezi rehberleri, seyahat önerileri ve deneyim paylaşımları",
    created_at: "2023-09-20T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
    member_count: 38000,
    post_count: 14000,
    category: "Lifestyle",
    is_verified: true,
    growth_rate: "8%",
    rules: "1. Yararlı bilgiler paylaşın\n2. Deneyimlerinizi aktarın",
    tags: ["seyahat", "gezi", "tatil", "backpacking"],
    cover_image_url: "https://picsum.photos/1920/408",
  },
  {
    id: 10,
    name: "Fotoğrafçılık",
    description: "Fotoğraf teknikleri, ekipman önerileri ve çekim ipuçları",
    created_at: "2023-10-05T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
    member_count: 32000,
    post_count: 12000,
    category: "Arts",
    is_verified: true,
    growth_rate: "5%",
    rules: "1. Telif haklarına saygı gösterin\n2. EXIF bilgisi paylaşın",
    tags: ["fotoğraf", "kamera", "lens", "editing"],
    cover_image_url: "https://picsum.photos/1920/409",
  },
  {
    id: 11,
    name: "Yazılım",
    description:
      "Programlama dilleri, yazılım geliştirme ve kariyer tavsiyeleri",
    created_at: "2023-11-15T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
    member_count: 48000,
    post_count: 20000,
    category: "Technology",
    is_verified: true,
    growth_rate: "14%",
    rules: "1. Kod paylaşımlarında açıklama yapın\n2. Yardımlaşmaya açık olun",
    tags: ["programlama", "web", "mobil", "backend", "frontend"],
    cover_image_url: "https://picsum.photos/1920/410",
  },
  {
    id: 12,
    name: "Kripto",
    description: "Kripto para ve blockchain teknolojileri hakkında her şey",
    created_at: "2023-12-01T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
    member_count: 35000,
    post_count: 15000,
    category: "Technology",
    is_verified: true,
    growth_rate: "16%",
    rules: "1. DYOR prensibini unutmayın\n2. Spam yapmayın",
    tags: ["kripto", "blockchain", "bitcoin", "ethereum"],
    cover_image_url: "https://picsum.photos/1920/411",
  },
  {
    id: 13,
    name: "E-Spor",
    description: "E-Spor müsabakaları, takımlar ve oyuncu transferleri",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
    member_count: 28000,
    post_count: 10000,
    category: "Gaming",
    is_verified: true,
    growth_rate: "20%",
    rules: "1. Spoiler kullanın\n2. Toksik davranmayın",
    tags: ["esports", "csgo", "valorant", "lol"],
    cover_image_url: "https://picsum.photos/1920/412",
  },
  {
    id: 14,
    name: "Fitness",
    description: "Spor, beslenme ve sağlıklı yaşam tavsiyeleri",
    created_at: "2024-01-10T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
    member_count: 25000,
    post_count: 8000,
    category: "Sports",
    is_verified: true,
    growth_rate: "12%",
    rules: "1. Yanlış bilgi vermeyin\n2. Motivasyon odaklı olun",
    tags: ["fitness", "gym", "beslenme", "workout"],
    cover_image_url: "https://picsum.photos/1920/413",
  },
  {
    id: 15,
    name: "Moda",
    description: "Moda trendleri, stil önerileri ve alışveriş tavsiyeleri",
    created_at: "2024-01-15T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
    member_count: 22000,
    post_count: 7000,
    category: "Lifestyle",
    is_verified: true,
    growth_rate: "9%",
    rules: "1. Yapıcı eleştiri yapın\n2. Reklam kurallarına uyun",
    tags: ["moda", "stil", "trend", "shopping"],
    cover_image_url: "https://picsum.photos/1920/414",
  },
];
