import {
  Swords,
  ShoppingBag,
  Map,
  Code,
  Package,
  Store,
  Headphones,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Full-Stack Mobile & Web Engineer",
  title: "Kaung Khant Hein",
  subtitle:
    "I architect and ship high-concurrency systems—from Go backends and multi-tenant database schemas to fluid React Native and web clients. Focused on scalability, resilient state management, and production performance.",
  primaryCta: { label: "View projects", href: "#portfolio" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};

export const aboutIntro = {
  stats: [
    { value: "5+", label: "Projects shipped" },
    { value: "35+", label: "Technologies" },
    { value: "2+", label: "Years of experience" },
    { value: "100%", label: "Responsive" },
  ],
  paragraphs: [
    "I build production-ready web and mobile applications with a focus on performance, localization, and maintainable architecture.",
    "My experience spans React, React Native CLI and Expo, TypeScript, Tailwind CSS, Go backends, and Medusa.js e-commerce platforms.",
    "I deliver end-to-end features across ERD-backed API design, atomic UI, multi-tenant backend patterns, offline-first local storage, push notifications, and multilingual experiences.",
  ],
};

export const capabilityCards = [
  "React Native (CLI & Expo)",
  "React 18 + Next.js",
  "Go + REST APIs",
  "Medusa.js Commerce",
  "Localization / i18n",
  "AI-assisted workflows",
];

export const projects = [
  {
    title: "Ear Trainer",
    role: "Web Audio ear training studio",
    description:
      "An end-to-end ear training studio built with Web Audio synthesis for interval, note, and chord recognition. Features real-time waveform visualization, interactive theory lessons, multi-instrument toggling, and instant performance metrics.",
    image: "/projects/EarTrainerBanner.png",
    lightImage: "/projects/EarTrainerBannerWhite.png",
    tags: ["React", "TypeScript", "Web Audio API", "Tone.js", "TailwindCSS"],
    categories: [
      { label: "React", color: "gray" },
      { label: "Web Audio API", color: "blue" },
    ],
    icon: <Headphones size={24} />,
    href: "https://playful-maamoul-5dc8f3.netlify.app/",
    ctaLabel: "Explore live project →",
    ctaUrl: "https://playful-maamoul-5dc8f3.netlify.app/",
  },
  {
    title: "Veteran Tour Guide App",
    role: "Tourist experience platform",
    description:
      "A multilingual Southeast Asia tourists web app with token-based authentication, global state via Zustand, dynamic language switching, and reusable custom components.",
    image: "/projects/VeteranBanner.png",
    lightImage: "/projects/VeteranBannerWhite.jpg",
    tags: ["React", "Redux Toolkit", "TailwindCSS", "i18next"],
    categories: [
      { label: "React", color: "gray" },
      { label: "Redux Toolkit", color: "gray" },
    ],
    icon: <Map size={24} />,
    href: "https://veteran-driver.netlify.app/",
    ctaLabel: "Explore live project →",
    ctaUrl: "https://veteran-driver.netlify.app/",
  },
  {
    title: "Mingalar Menu",
    role: "On-demand food ordering app",
    description:
      "An on-demand food ordering app built for scalability across multiple restaurant brands. It combines a multi-tenant Go API, brand-specific theming, and a React Native Expo app for cross-brand ordering.",
    image: "/projects/NextBiteBanner.png",
    lightImage: "/projects/NextBiteBannerWhite.png",
    tags: ["Go", "React Native", "Expo", "TypeScript"],
    categories: [
      { label: "Go", color: "gray" },
      { label: "React Native", color: "blue" },
    ],
    icon: <ShoppingBag size={24} />,
    href: "https://mingalar-menu.netlify.app/",
    ctaLabel: "Explore live project →",
    ctaUrl: "https://mingalar-menu.netlify.app/",
  },
  {
    title: "AppleThings",
    role: "Full-stack e-commerce app",
    description:
      "An end-to-end mobile commerce platform built with an AI-powered SDLC. It includes push notifications, persistent wishlists with MMKV, Myanmar and English i18n, and dark/light theming powered by Medusa.js.",
    image: "/projects/AppleThingsBanner.jpg",
    lightImage: "/projects/AppleThingsBannerWhite.jpg",
    tags: ["React Native", "Medusa.js", "PostgreSQL", "Docker"],
    categories: [
      { label: "React Native", color: "blue" },
      { label: "Medusa.js", color: "blue" },
    ],
    icon: <Code size={24} />,
    href: "https://ap-things-12321.netlify.app/",
    ctaLabel: "Explore live project →",
    ctaUrl: "https://ap-things-12321.netlify.app/",
  },
  {
    title: "react-native-liquid-pill-tabbar",
    role: "React Native glass UI kit",
    description:
      "A React Native component kit with an Apple Liquid Glass-inspired feel — translucent surfaces, animated pill motion, zero native modules. Works on iOS, Android, and web.",
    video: "/projects/package_demo.mp4",
    tags: ["React Native", "TypeScript", "npm", "Expo"],
    categories: [
      { label: "React Native", color: "blue" },
      { label: "npm", color: "gray" },
    ],
    icon: <Package size={24} />,
    href: "https://www.npmjs.com/package/react-native-liquid-pill-tabbar",
    ctaLabel: "View npm package →",
    ctaUrl: "https://www.npmjs.com/package/react-native-liquid-pill-tabbar",
  },
  {
    title: "Daisy Doll Storefront",
    role: "E-commerce catalog with chat ordering",
    description:
      "A mobile-first clothing catalog web app designed for Myanmar's TikTok and Facebook shopping culture. Users browse a product gallery without signing in or downloading an app, then order instantly via TikTok, Viber, or Telegram chat. Built with React, Vite, Tailwind CSS, and powered by Medusa.js.",
    image: "/projects/DaisyDollBanner.png",
    lightImage: "/projects/DaisyDollBannerWhite.png",
    tags: ["React", "Vite", "TailwindCSS", "Medusa.js"],
    categories: [
      { label: "React", color: "gray" },
      { label: "Medusa.js", color: "blue" },
    ],
    icon: <Store size={24} />,
    href: "https://daisy-doll-storefront.vercel.app/",
    ctaLabel: "Explore live project →",
    ctaUrl: "https://daisy-doll-storefront.vercel.app/",
  },
  {
    title: "Zawgyi Mythic Run",
    role: "Multiplayer browser game",
    description:
      "A 2D and 3D side-scrolling multiplayer game featuring a Myanmar alchemist, 5 game modes, smartphone gamepads via QR, and real-time gameplay input relayed through Socket.IO.",
    image: "/projects/ZawgyiBanner.png",
    lightImage: "/projects/ZawgyiBannerWhite.jpg",
    tags: ["Phaser 3", "Babylon.js", "Socket.IO", "Node.js"],
    categories: [
      { label: "Phaser 3", color: "gray" },
      { label: "Babylon.js", color: "gray" },
    ],
    icon: <Swords size={24} />,
    href: "https://zawgyigame.onrender.com/",
    ctaLabel: "Explore live project →",
    ctaUrl: "https://zawgyigame.onrender.com/",
  },
];

export const utilityBlocks = [
  {
    title: "Mobile",
    description: "React Native CLI, Expo, MMKV, Notifee, Firebase Cloud Messaging.",
  },
  {
    title: "Frontend",
    description: "React, Next.js, Tailwind CSS, TypeScript, responsive UI systems.",
  },
  {
    title: "Backend",
    description: "Go, Node.js, REST APIs, PostgreSQL, Medusa.js, Docker.",
  },
  {
    title: "Systems",
    description: "ERD design, atomic design, state management, AI-assisted delivery.",
  },
];

export const surpriseBlocks = [
  {
    title: "What I optimize for",
    body:
      "High performance, offline-first reliability, and seamless localization. I build clean component architectures, predictable state management, and responsive UI systems that feel effortless on mobile and web.",
  },
  {
    title: "How I ship",
    body:
      "End-to-end execution with spec-driven precision. I turn ideas into code through ERD-backed API design, clean frontend implementation, push notification setups, and rigorous testing on real devices.",
  },
  {
    title: "What I can take on",
    body:
      "Multi-tenant web platforms, cross-platform mobile apps (React Native/Expo), e-commerce engines, Node.js backend services, and admin dashboards with multilingual support.",
  },
  {
    title: "Working style",
    body:
      "Pragmatic and delivery-focused. I utilize structured component patterns, efficient state management (MMKV, local caching), and AI-assisted tooling to speed up shipping without compromising quality.",
  },
];

export const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/kaungkhanthein1" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kaung-khant-536521297/" },
  { label: "Facebook", href: "https://www.facebook.com/share/19Z9kCiL44/" },
];
