// data/mock-jobs.ts

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  postedAt: string;
  category: string;
  tags: string[];
  description: string;
  requirements: string[];
  responsibilities?: string[];
}

export interface Category {
  id: string;
  name: string;
  count: string;
  iconName: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  location: string;
  activeJobsCount: number;
  description: string;
  website: string;
}

// 1. KATEGORIYALAR
export const CATEGORIES: Category[] = [
  { id: "1", name: "Dasturlash & IT", count: "1,240 vakansiya", iconName: "Code" },
  { id: "2", name: "Moliya & Buxgalteriya", count: "850 vakansiya", iconName: "BarChart3" },
  { id: "3", name: "Dizayn & Kreativ", count: "420 vakansiya", iconName: "Palette" },
  { id: "4", name: "Sotuv & Marketing", count: "960 vakansiya", iconName: "TrendingUp" },
  { id: "5", name: "Mijozlarni qo'llab-quvvatlash", count: "310 vakansiya", iconName: "Headphones" },
];

// 2. VAKANSIYALAR
export const MOCK_JOBS: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer (Next.js)",
    company: "UzTech Solutions",
    location: "Toshkent shahri",
    type: "Full-time",
    salary: "$1,500 - $2,500",
    postedAt: "2 soat oldin",
    category: "1",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: "UzTech Solutions kompaniyasiga zamonaviy veb-ilovalarni ishlab chiqish tajribasiga ega bo'lgan kuchli Senior Frontend dasturchi kerak.",
    requirements: [
      "Next.js va React bo'yicha kamida 3 yillik tajriba",
      "TypeScript va Tailwind CSS texnologiyalarini mukammal bilish",
      "REST API va GraphQL bilan ishlash ko'nikmasi",
    ],
    responsibilities: [
      "Kompaniya mahsulotlarining Frontend qismini noldan loyihalash",
      "Kodni optimallashtirish va tezlikni oshirish",
    ],
  },
  {
    id: "2",
    title: "Python / Django Backend Engineer",
    company: "FinTech Innovation",
    location: "Masofaviy (Remote)",
    type: "Full-time",
    salary: "$1,800 - $3,000",
    postedAt: "5 soat oldin",
    category: "1",
    tags: ["Python", "Django", "PostgreSQL"],
    description: "FinTech loyihamiz uchun yuqori yuklamalarga chidamli backend tizimlarini qura oladigan Python backend muhandisi qidirilmoqda.",
    requirements: [
      "Python 3.10+ va Django/DRF bo'yicha 2+ yil tajriba",
      "PostgreSQL bilan murakkab so'rovlar yozish tajribasi",
    ],
    responsibilities: [
      "Finansial tranzaksiyalar uchun xavfsiz RESTful APIlar yaratish",
    ],
  },
  {
    id: "3",
    title: "UI/UX Product Designer",
    company: "Creative Studio",
    location: "Toshkent shahri",
    type: "Full-time",
    salary: "$1,000 - $1,800",
    postedAt: "1 kun oldin",
    category: "3",
    tags: ["Figma", "UI/UX", "Mobile Design"],
    description: "Mobil ilovalar va veb-saytlar uchun foydalanuvchiga qulay interfeyslar chizadigan ijodkor UI/UX dizayner taklif etiladi.",
    requirements: [
      "Figma va Prototyping vositalarida erkin ishlash",
      "Kamida 2 yillik tajriba hamda kuchli portfolioda ega bo'lish",
    ],
    responsibilities: [
      "User Flow va Wireframe'lar tayyorlash",
      "Design System yaratish va qo'llab-quvvatlash",
    ],
  },
  {
    id: "4",
    title: "SMM & Content Manager",
    company: "SMM Pro Agency",
    location: "Samarqand",
    type: "Part-time",
    salary: "$500 - $800",
    postedAt: "2 kun oldin",
    category: "4",
    tags: ["SMM", "Copywriting", "Instagram"],
    description: "Ijtimoiy tarmoqlardagi sahifalarni yuritish, kontent-plan tuzish va kreativ matnlar yozish uchun SMM mutaxassisi kerak.",
    requirements: [
      "Instagram, Telegram va TikTok algoritmlarini yaxshi bilish",
      "Savodli o'zbek va rus tillarida matn yozish (Copywriting)",
    ],
    responsibilities: [
      "Haftalik va oylik kontent reja tuzish",
      "Target reklamalarini sozlash va tahlil qilish",
    ],
  },
];

// 3. KOMPANIYALAR
export const MOCK_COMPANIES: Company[] = [
  {
    id: "1",
    name: "UzTech Solutions",
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=150&auto=format&fit=crop&q=80",
    industry: "Axborot texnologiyalari / IT",
    location: "Toshkent shahri",
    activeJobsCount: 12,
    description: "O'zbekistondagi yetakchi IT kompaniyalardan biri bo'lib, murakkab veb va mobil ilovalarni ishlab chiqishga ixtisoslashgan.",
    website: "https://uztech.uz",
  },
  {
    id: "2",
    name: "FinTech Innovation",
    logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&auto=format&fit=crop&q=80",
    industry: "Moliya va Banklar",
    location: "Masofaviy (Remote)",
    activeJobsCount: 8,
    description: "Zamonaviy to'lov tizimlari va raqamli bank xizmatlarini yaratuvchi fintex loyihasi.",
    website: "https://fintech.uz",
  },
  {
    id: "3",
    name: "Creative Studio",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=150&auto=format&fit=crop&q=80",
    industry: "Dizayn va Brending",
    location: "Toshkent shahri",
    activeJobsCount: 5,
    description: "Raqamli mahsulotlar va brendlar uchun zamonaviy dizayn yechimlarini taklif etuvchi studiya.",
    website: "https://creativestudio.uz",
  },
  {
    id: "4",
    name: "SMM Pro Agency",
    logo: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=150&auto=format&fit=crop&q=80",
    industry: "Marketing va Reklama",
    location: "Samarqand",
    activeJobsCount: 3,
    description: "Brendlarni ijtimoiy tarmoqlarda targ'ib qilish bo'yicha to'liq siklli digital agentlik.",
    website: "https://smmpro.uz",
  },
];