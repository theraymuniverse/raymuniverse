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
  gallerySections?: ProjectGallerySection[]
}

export const projects: Project[] = [
  {
    slug: 'ahiaoma-marketplace',
    title: 'Ahiaoma Marketplace',
    badge: 'Mobile commerce app',
    shortDescription:
      'A mobile marketplace connecting buyers and sellers of fresh farm produce — from browsing and negotiation to payment and doorstep delivery.',
    tags: ['Marketplace', 'Mobile app'],
    image: '/ahiaoma/cover.png',
    headerImage: '/ahiaoma/header.png',
    imageAccent: 'rgba(59,130,246,0.15)',
    role: 'Product design, mobile app architecture, end‑to‑end build',
    industry: 'Agriculture, E‑commerce',
    timeframe: 'Ongoing product partnership',
    overview:
      'Ahiaoma is a cross‑platform mobile marketplace built with Flutter that connects buyers and sellers of fresh farm produce. It covers the full commerce journey — from product discovery and in‑app negotiation to secure checkout and real‑time delivery tracking — in a clean, mobile‑first experience designed for everyday use.',
    problem:
      'Farm produce trading in the region was fragmented and largely informal. Buyers had no reliable way to find verified sellers, prices were opaque, and there was no structured process for payments or delivery — making the experience frustrating for both sides.',
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
          { id: 'ahiaoma-1', label: 'Screen 1', image: '/ahiaoma/screen1.png' },
          { id: 'ahiaoma-2', label: 'Screen 2', image: '/ahiaoma/screen2.png' },
          { id: 'ahiaoma-3', label: 'Screen 3', image: '/ahiaoma/screen3.png' },
          { id: 'ahiaoma-4', label: 'Screen 4', image: '/ahiaoma/screen4.png' },
          { id: 'ahiaoma-5', label: 'Screen 5', image: '/ahiaoma/screen5.png' },
          { id: 'ahiaoma-6', label: 'Screen 6', image: '/ahiaoma/screen6.png' },
          { id: 'ahiaoma-7', label: 'Screen 7', image: '/ahiaoma/screen7.png' },
          { id: 'ahiaoma-8', label: 'Screen 8', image: '/ahiaoma/screen8.png' },
        ],
      },
      {
        id: 'ahiaoma-admin',
        layout: 'two',
        aspectRatio: 'landscape',
        caption: 'Admin & analytics',
        items: [
          { id: 'ahiaoma-9',  label: 'Dashboard',    image: '/ahiaoma/screen-dashboard.png' },
          { id: 'ahiaoma-10', label: 'Delivery map', image: '/ahiaoma/screen-delivery.png' },
        ],
      },
    ],
  },
  {
    slug: 'dappcast-mobile',
    title: 'Dappcast Mobile',
    badge: 'Watch‑to‑earn streaming',
    shortDescription:
      'A streaming app that rewards users for watching content — earning DPST tokens through a built‑in mining and referral system.',
    tags: ['Streaming', 'Mobile app'],
    image: '/dappcast/cover.png',
    headerImage: '/dappcast/header.png',
    imageAccent: 'rgba(192,132,252,0.18)',
    role: 'Product design, mobile UX, platform architecture',
    industry: 'Media & Entertainment',
    timeframe: 'From MVP to production‑ready app',
    overview:
      'Dappcast is a cross‑platform streaming application built with Flutter that combines a rich content library with a token reward system. Users earn DPST tokens simply by watching content, referring friends, and participating in team activities — creating a new kind of engagement loop that traditional streaming platforms cannot offer.',
    problem:
      'Streaming platforms compete heavily on content alone, with little reason for users to stay active beyond the shows they watch. There is no reward for loyalty, no incentive for referrals, and nothing that makes one platform feel meaningfully different from another in terms of user value.',
    solution:
      'We designed a watch‑to‑earn model where user activity directly translates into token earnings. The platform features live token mining, a referral system with team‑based boosts, and an AI‑assisted content finder — all wrapped in a familiar, approachable streaming interface with category browsing, cast details, and ratings.',
    impact:
      'Dappcast gives the platform a tangible edge in user acquisition and retention. Users are incentivised to watch more, refer others, and stay active — while the mainstream UX ensures the product feels accessible to audiences who are new to token‑based rewards.',
    services: [
      'Product strategy and UX design for watch‑to‑earn mechanics',
      'Flutter architecture using BLoC, Provider, and GoRouter',
      'Authentication, security, and push notification flows',
      'CI/CD pipeline setup and code quality standards',
    ],
    metrics: [
      { label: 'Reward model', value: 'DPST token earnings' },
      { label: 'Engagement', value: 'Mining, referrals & AI Finder' },
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