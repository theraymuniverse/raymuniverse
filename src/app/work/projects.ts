export type GalleryLayout = 'one' | 'two' | 'three' | 'four'

// 'mobile'    → 9:19.5  (portrait phone screenshot)
// 'square'    → 1:1     (web app tile, icon, avatar)
// 'landscape' → 4:3     (standard web view)
// 'wide'      → 16:9    (widescreen / browser screenshot)
// 'tall'      → 3:4     (tablet portrait)
export type AspectRatio = 'mobile' | 'square' | 'landscape' | 'wide' | 'tall'

export type ProjectGallerySection = {
  id: string
  layout: GalleryLayout
  aspectRatio?: AspectRatio
  caption?: string
  items: {
    id: string
    label: string
    image?: string
    description?: string
  }[]
}

export type Project = {
  slug: string
  title: string
  badge: string
  shortDescription: string
  tags: string[]
  image: string
  headerImage: string
  imageAccent: string
  role: string
  industry: string
  timeframe: string
  overview: string
  problem: string
  solution: string
  impact: string
  services: string[]
  metrics?: { label: string; value: string }[]
  externalUrl?: string
  gallerySections?: ProjectGallerySection[]
}

export const projects: Project[] = [
  {
    slug: 'acabeta',
    title: 'Acabeta',
    badge: 'EdTech platform',
    shortDescription:
      'A modern AI-powered education platform for learners, tutors, and employers with clear course discovery and career growth flows.',
    tags: ['EdTech', 'Web App'],
    image: '/acabeta-project.png',
    headerImage: '/acabeta-project.png',
    imageAccent: 'rgba(60,130,252,0.16)',
    role: 'UI/UX design, branding, and landing page development',
    industry: 'Education Technology',
    timeframe: 'Designed and launched in 4 weeks',
    overview:
      'Acabeta is a career-focused learning platform built to connect learners with career-ready courses, mentors, and employers through intelligent discovery and polished UX.',
    problem:
      'Learners and tutors often struggle to find a single platform that combines both skills development and real job-ready outcomes in a seamless experience.',
    solution:
      'We built a clean, accessible education experience with strong onboarding, course discovery, and a trusted marketplace for tutors and learners.',
    impact:
      'The platform gives learners faster access to relevant training while enabling educators to showcase their skills and connect with students more effectively.',
    services: [
      'Brand identity and visual direction',
      'Landing page and product design',
      'Responsive web experience with strong conversion flows',
    ],
    externalUrl: 'https://acabeta.vercel.app',
  },
  {
    slug: 'afrostitches',
    title: 'Afrostitches',
    badge: 'E-commerce brand',
    shortDescription:
      'A premium African fashion marketplace that showcases designer products with elegant visual storytelling and simple shopping interactions.',
    tags: ['E-commerce', 'Fashion'],
    image: '/afrostitches-project.png',
    headerImage: '/afrostitches-project.png',
    imageAccent: 'rgba(16,185,129,0.12)',
    role: 'Branding, e-commerce design, storefront experience',
    industry: 'Retail & E-commerce',
    timeframe: 'Identity and storefront launch',
    overview:
      'Afrostitches is a curated fashion destination for African designers, created to help shoppers discover fresh styles and purchase with confidence.',
    problem:
      'Many local fashion brands lack a polished online presence that makes browsing and buying feel premium and trustworthy.',
    solution:
      'We designed a modern marketplace experience with clear product showcases, simplified navigation, and an elevated brand tone.',
    impact:
      'The design helps Afrostitches present its products as premium, increasing trust and driving more shopper engagement.',
    services: [
      'E-commerce visual design and brand positioning',
      'Landing page and featured product layouts',
      'Customer journey mapping and UX refinement',
    ],
    externalUrl: 'https://afrostitches.com',
  },
  {
    slug: 'ahiaoma-marketplace',
    title: 'Ahiaoma Marketplace',
    badge: 'Mobile commerce app',
    shortDescription:
      'A mobile marketplace connecting buyers and sellers of fresh farm produce from browsing and negotiation to payment and doorstep delivery.',
    tags: ['Marketplace', 'Mobile app'],
    image: '/ahiaoma/cover.png',
    headerImage: '/ahiaoma/header.png',
    imageAccent: 'rgba(59,130,246,0.15)',
    role: 'Product design, mobile app architecture, end‑to‑end build',
    industry: 'Agriculture, E‑commerce',
    timeframe: 'Ongoing product partnership',
    overview:
      'Ahiaoma is a cross‑platform mobile marketplace built with Flutter that connects buyers and sellers of fresh farm produce. It covers the full commerce journey from product discovery and in‑app negotiation to secure checkout and real‑time delivery tracking in a clean, mobile‑first experience designed for everyday use.',
    problem:
      'Farm produce trading in the region was fragmented and largely informal. Buyers had no reliable way to find verified sellers, prices were opaque, and there was no structured process for payments or delivery, making the experience frustrating for both sides.',
    solution:
      'We designed and built a two‑sided marketplace that gives buyers a smooth shopping experience and sellers the tools to run their business entirely from their phones. The platform handles onboarding, product discovery, in‑app negotiation, secure payments via Paystack, and dynamic delivery routing based on the buyer\'s location.',
    impact:
      'Sellers can now manage their storefronts, communicate with buyers, and track orders from a single app. Buyers get a trustworthy, structured way to purchase fresh produce with full visibility into delivery. Platform operators get a real‑time dashboard to monitor marketplace health, revenue, and fulfilment.',
    services: [
      'Product strategy and UX design for buyer and seller journeys',
      'Flutter application architecture and development',
      'Payment and delivery integrations',
      'Admin dashboard and analytics console',
    ],
    metrics: [
      { label: 'Platforms', value: 'iOS & Android' },
    ],
    gallerySections: [
      {
        id: 'ahiaoma-overview',
        layout: 'four',
        aspectRatio: 'mobile',
        caption: 'Product overview',
        items: [
          { id: 'ahiaoma-1', label: 'Authentication', image: '/ahiaoma/screen1.png' },
          { id: 'ahiaoma-2', label: 'Home', image: '/ahiaoma/screen2.png' },
          { id: 'ahiaoma-3', label: 'Cart Page', image: '/ahiaoma/screen3.png' },
          { id: 'ahiaoma-4', label: 'Carting', image: '/ahiaoma/screen4.png' },
          { id: 'ahiaoma-5', label: 'Agriculture News Page', image: '/ahiaoma/screen5.png' },
          { id: 'ahiaoma-6', label: 'Orders', image: '/ahiaoma/screen6.png' },
          { id: 'ahiaoma-7', label: 'Settings', image: '/ahiaoma/screen7.png' },
          { id: 'ahiaoma-8', label: 'Profile Settings', image: '/ahiaoma/screen8.png' },
        ],
      },
    ],
  },
  {
    slug: 'dappcast-mobile',
    title: 'Dappcast Mobile',
    badge: 'Watch‑to‑earn streaming',
    shortDescription:
      'A streaming app that rewards users for watching content, earning DPST tokens through a built‑in mining and referral system.',
    tags: ['Streaming', 'Mobile app'],
    image: '/dappcast/cover.png',
    headerImage: '/dappcast/header.png',
    imageAccent: 'rgba(192,132,252,0.18)',
    role: 'Product design, mobile UX, platform architecture',
    industry: 'Media & Entertainment',
    timeframe: '2 months',
    overview:
      'Dappcast is a cross‑platform streaming application built with Flutter that combines a rich content library with a token reward system. Users earn DPST tokens simply by watching content, referring friends, and participating in team activities creating a new kind of engagement loop that traditional streaming platforms cannot offer.',
    problem:
      'Streaming platforms compete heavily on content alone, with little reason for users to stay active beyond the shows they watch. There is no reward for loyalty, no incentive for referrals, and nothing that makes one platform feel meaningfully different from another in terms of user value.',
    solution:
      'We designed a watch‑to‑earn model where user activity directly translates into token earnings. The platform features live token mining, a referral system with team‑based boosts, and an AI‑assisted content finder all wrapped in a familiar, approachable streaming interface with category browsing, cast details, and ratings.',
    impact:
      'Dappcast gives the platform a tangible edge in user acquisition and retention. Users are incentivised to watch more, refer others, and stay active while the mainstream UX ensures the product feels accessible to audiences who are new to token‑based rewards.',
    services: [
      'Product strategy and UX design for watch‑to‑earn mechanics',
      'Flutter architecture using BLoC, Provider, and GoRouter',
      'Authentication, security, and push notification flows',
      'CI/CD pipeline setup and code quality standards',
    ],
    metrics: [
      { label: 'Platforms', value: 'iOS & Android' },
    ],
    gallerySections: [
      {
        id: 'dappcast-screens',
        layout: 'four',
        aspectRatio: 'mobile',
        caption: 'App screens',
        items: [
          { id: 'dappcast-1', label: 'Home',      image: '/dappcast/home.png'      },
          { id: 'dappcast-2', label: 'Search',    image: '/dappcast/search.png'    },
          { id: 'dappcast-3', label: 'Media',     image: '/dappcast/media.png'     },
          { id: 'dappcast-4', label: 'Referrals', image: '/dappcast/referrals.png' },
        ],
      },
    ],
  },
]
