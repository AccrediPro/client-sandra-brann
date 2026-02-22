// src/config/siteConfig.ts
// Centralized configuration for all coach-specific data.
// Update this file to customize the site for a different coach.
//
// TEMPLATE INSTRUCTIONS:
// Replace Sandra and Brann with the client's actual first and last name.
// That's the ONLY change needed for a basic deployment.
// Optionally update: email, phone, location, brand colors, scheduling link.

export const siteConfig = {
  // ─── Coach Identity ───────────────────────────────────────────────────────
  coach: {
    name: "Sandra Brann",
    firstName: "Sandra",
    title: "Certified Health & Wellness Coach",
    email: "",
    phone: "",
    location: "USA",
  },

  // ─── Site Metadata ────────────────────────────────────────────────────────
  site: {
    name: "Sandra Brann — Health & Wellness",
    description:
      "Sandra Brann is a Certified Health & Wellness Coach helping clients achieve optimal health through personalized, root-cause coaching and sustainable lifestyle changes.",
    ogImage: "/images/og-default.jpg",
  },

  // ─── Brand Colors ─────────────────────────────────────────────────────────
  brand: {
    primary: "#7C9A8E",
    accent: "#C9B99A",
    mint: "#9BB5A8",
    cream: "#FAF8F5",
  },

  // ─── Images ───────────────────────────────────────────────────────────────
  images: {
    portrait: "/images/generated/section-bg-wellness.jpg",
    hero: "/images/generated/hero-variant-1.jpg",
    ogDefault: "/images/og-default.jpg",
  },

  // ─── Social Media ─────────────────────────────────────────────────────────
  social: [] as Array<{ name: string; url: string; iconPath: string; iconSvg: string }>,

  // ─── Stats & Credentials ──────────────────────────────────────────────────
  stats: {
    yearsExperience: "",
    certifications: 1,
    processSteps: 4,
  },

  statsBar: [
    {
      number: "1",
      label: "Health Coach Certification",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>`,
    },
    {
      number: "3",
      label: "Personalized Coaching Programs",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
    },
    {
      number: "100%",
      label: "Free Discovery Call — No Commitment",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>`,
    },
  ],

  credentialBadges: [
    { abbr: "HC", full: "Certified Health Coach" },
    { abbr: "AccrediPro", full: "Functional Medicine Coaching Certificate" },
  ],

  // ─── Certifications (used in AboutPreview & about.astro) ─────────────────
  certifications: [
    {
      title: "Functional Medicine Coaching Certificate",
      label: "AccrediPro Certified",
      description: "AccrediPro Functional Medicine Coaching certification focused on root-cause healing and personalized wellness protocols",
      variant: "default" as const,
    },
    {
      title: "Certified Health Coach",
      label: "Health Coach",
      description: "Professional health coaching certification with expertise in lifestyle medicine, nutrition, and behavioral change",
      variant: "outline" as const,
    },
  ],

  // ─── Bio / Story ──────────────────────────────────────────────────────────
  bio: {
    pullquote:
      "Empowering you to take control of your health, one step at a time.",
    storyPreview:
      "With a deep passion for health and wellness, I help clients uncover the root causes of their health challenges and build sustainable paths to feeling their best. My approach is personal, evidence-informed, and tailored to each individual.",
    storyParagraphs: [
      "I became a health and wellness coach because I believe everyone deserves to feel heard, understood, and supported on their health journey. Too often, people are told their concerns are 'normal' or dismissed without real answers. That experience drives everything I do.",
      "My approach combines functional medicine principles with personalized coaching to look at the whole picture — not just individual symptoms. I work with clients to understand what's really going on in their bodies and create a plan that fits their unique needs and lifestyle.",
      "Whether you're dealing with fatigue, digestive issues, hormonal changes, or simply want to feel more energized and balanced, I'm here to guide you every step of the way. My goal is to empower you with the knowledge and tools to take lasting control of your health.",
    ],
    differentiator:
      "I combine personalized functional medicine coaching with genuine care and attention. Every client receives a plan built specifically for them — not a generic template. I take the time to listen, understand your unique situation, and create a path forward that works for your life.",
    holisticAspects: ["Nutrition", "Hormones", "Gut Health", "Energy", "Stress", "Sleep"],
    holisticQuote:
      "When we address the root cause — not just the symptoms — real, lasting healing becomes possible.",
  },

  // ─── Services ─────────────────────────────────────────────────────────────
  servicesPreview: [
    {
      title: "Free Discovery Call",
      description:
        "A complimentary 30-minute conversation to discuss your health concerns, your goals, and whether working together is the right fit. No pressure, no commitment — just a real conversation.",
      icon: `<svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" /></svg>`,
      price: "FREE",
      priceNote: "No commitment required",
      popular: false,
      href: "/contact",
    },
    {
      title: "Personalized Wellness Program",
      description:
        "A comprehensive coaching program designed to address the root causes of your health challenges. Includes regular one-on-one coaching sessions, a personalized nutrition and lifestyle plan, and ongoing support.",
      icon: `<svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
      price: "Contact for Pricing",
      priceNote: "Payment plans available",
      popular: true,
      href: "/contact",
    },
    {
      title: "Ongoing Support & Accountability",
      description:
        "Continued coaching and accountability for clients who want extended support beyond their initial program. Regular check-ins, plan adjustments, and messaging support to keep you on track.",
      icon: `<svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
      price: "Contact for Pricing",
      priceNote: "Flexible scheduling",
      popular: false,
      href: "/contact",
    },
  ],

  servicesDetail: [
    {
      id: "discovery-call",
      title: "Free Discovery Call",
      subtitle: "Your First Step to Better Health",
      price: "FREE",
      duration: "30 minutes",
      description:
        "Not sure if health coaching is right for you? Start with a free 30-minute discovery call. We'll talk about your health concerns, your history, and your goals. There's no obligation — just an honest conversation about whether we're a good fit and how I can help.",
      features: [
        "Review your top health concerns and symptoms",
        "Discuss your health history and goals",
        "Understand what personalized coaching can offer",
        "Ask any questions you have",
        "No sales pressure — just a real conversation",
      ],
      idealFor:
        "Anyone who wants to explore whether personalized health coaching is the right next step for their wellness journey.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>`,
    },
    {
      id: "wellness-program",
      title: "Personalized Wellness Program",
      subtitle: "A Complete Health Transformation Plan",
      price: "Contact for Pricing",
      duration: "12 weekly coaching sessions",
      description:
        "A comprehensive coaching program designed to address the root causes of your health challenges — not just manage symptoms. Together we'll identify your triggers, build a personalized plan, and create sustainable habits that support lasting wellness.",
      features: [
        "12 weekly one-on-one coaching sessions",
        "Personalized nutrition and lifestyle plan",
        "Customized wellness protocol",
        "Messaging support between sessions",
        "Progress tracking and plan adjustments",
        "Payment plans available",
      ],
      idealFor:
        "Anyone experiencing fatigue, digestive issues, hormonal changes, stress, or weight challenges who wants a personalized, root-cause approach to feeling better.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
    },
    {
      id: "ongoing-support",
      title: "Ongoing Support & Accountability",
      subtitle: "Continued Guidance for Lasting Results",
      price: "Contact for Pricing",
      duration: "Flexible — monthly check-ins",
      description:
        "For clients who have completed the Personalized Wellness Program and want continued support. This flexible program includes regular check-ins, plan adjustments as your health evolves, and ongoing messaging support to keep you accountable and on track.",
      features: [
        "Regular one-on-one check-in sessions",
        "Ongoing plan adjustments based on progress",
        "Messaging support between sessions",
        "Accountability and motivation",
        "Flexible scheduling to fit your life",
        "Continue as long as you need",
      ],
      idealFor:
        "Clients who have completed an initial program and want continued support, accountability, and guidance as they maintain their health improvements.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
    },
  ],

  // ─── Testimonials ─────────────────────────────────────────────────────────
  testimonials: [
    {
      name: "Happy Client",
      role: "Wellness Coaching Client",
      outcome: "Renewed energy and clarity",
      content:
        "Working with my coach completely changed my perspective on health. For the first time, someone took the time to really listen and understand what I was going through. The personalized approach made all the difference — I finally have energy, clarity, and a plan that actually works for my life.",
    },
    {
      name: "Grateful Client",
      role: "Wellness Coaching Client",
      outcome: "Found real answers after years of searching",
      content:
        "After years of being told everything was 'normal' despite not feeling well, I finally found answers through personalized coaching. The root-cause approach helped me understand what was really going on, and the step-by-step plan made the changes feel manageable. I wish I had started sooner.",
    },
    {
      name: "Relieved Client",
      role: "Stress & Wellness Coaching Client",
      outcome: "Transformed stress into calm, focused energy",
      content:
        "I came in completely overwhelmed — between work, family, and my own health taking a backseat, I didn't know where to start. My coach helped me see how stress was affecting everything from my sleep to my digestion. With a clear, step-by-step plan, I went from running on fumes to actually feeling like myself again. The accountability and support made all the difference.",
    },
  ],

  // ─── Who I Work With ──────────────────────────────────────────────────────
  whoIWorkWithTraits: [
    "You're dealing with fatigue, brain fog, or low energy that isn't explained by conventional tests",
    "You've been told your labs are 'normal' but you know something isn't right",
    "You're experiencing digestive issues, hormonal changes, or unexplained weight shifts",
    "You're tired of managing symptoms and want to understand the root cause",
    "You want a personalized approach — not a one-size-fits-all plan",
    "You're ready to invest in your health and make lasting changes",
  ],

  // ─── Process Steps ────────────────────────────────────────────────────────
  processSteps: [
    {
      number: "01",
      title: "Discover the Root Cause",
      description:
        "We start by reviewing your full health history, symptoms, and goals — looking beyond surface-level answers to understand what's really going on.",
      icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`,
    },
    {
      number: "02",
      title: "Build Your Plan",
      description:
        "I create a personalized nutrition and lifestyle plan based on your unique health picture — no generic templates, no one-size-fits-all advice.",
      icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" /></svg>`,
    },
    {
      number: "03",
      title: "Implement & Adjust",
      description:
        "Through regular coaching sessions, we put your plan into action, track your progress, and adjust in real time based on how your body responds.",
      icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg>`,
    },
    {
      number: "04",
      title: "Sustain Your Health",
      description:
        "Leave with the knowledge, tools, and habits to maintain your health for life — with the option to continue with ongoing support if you need it.",
      icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>`,
    },
  ],

  // Approach items used on about.astro
  approachItems: [
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>`,
      title: "Discover the Root Cause",
      description: "Look beyond surface-level answers to understand what's really driving your health challenges.",
    },
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>`,
      title: "Build Your Plan",
      description: "Receive a personalized nutrition and lifestyle plan tailored to your unique health picture.",
    },
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
      title: "Implement & Adjust",
      description: "Regular coaching sessions keep you supported while we refine your plan based on real results.",
    },
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>`,
      title: "Sustain Your Health",
      description: "Leave with the knowledge and habits to maintain your health long after coaching ends.",
    },
  ],

  // ─── FAQ ──────────────────────────────────────────────────────────────────
  faq: [
    {
      question: "What is health and wellness coaching?",
      answer:
        "Health and wellness coaching is a personalized approach to helping you achieve your health goals. Rather than treating symptoms in isolation, I look at the whole picture — nutrition, lifestyle, stress, sleep, and more — to identify the root causes of your health challenges and create a sustainable plan for improvement.",
    },
    {
      question: "How is this different from seeing my doctor?",
      answer:
        "Your doctor manages diagnoses and prescribes treatment — that's essential work. Health coaching focuses on the lifestyle factors that standard medicine often doesn't have time to address: diet quality, stress management, sleep habits, gut health, and behavioral change. I work alongside your medical team, not instead of it.",
    },
    {
      question: "What can I expect from the discovery call?",
      answer:
        "The free discovery call is a genuine 30-minute conversation — no sales pressure, no hidden agenda. We'll talk about your health concerns, your goals, and whether working together is the right fit. If it's not, you'll still leave with clarity and useful perspective on your situation.",
    },
    {
      question: "How long before I see results?",
      answer:
        "Every person is different, but most clients notice meaningful improvements within the first 4-6 weeks. Some changes — like increased energy and better sleep — can happen quickly, while others — like hormonal balance or gut healing — take more time. We track your progress together and adjust as needed.",
    },
    {
      question: "Do I need to live nearby?",
      answer:
        "No — all coaching sessions are conducted via video call, so we can work together regardless of where you live.",
    },
    {
      question: "What if I've already tried everything?",
      answer:
        "Many of my clients come to me after years of searching for answers. The difference with personalized coaching is that we look at the whole system — not just individual symptoms. By connecting the dots between your nutrition, stress, sleep, gut health, and lifestyle, we often find patterns and root causes that were missed before.",
    },
    {
      question: "Is the discovery call really free?",
      answer:
        "Absolutely. It's a genuine conversation about your health — no pressure, no obligation. If we're a good fit, we'll discuss next steps. If not, no hard feelings.",
    },
    {
      question: "How do sessions work?",
      answer:
        "Sessions are conducted via video call at a time that works for your schedule. Between sessions, you'll have messaging support so you can ask questions and stay on track. Every session builds on the last, so your plan evolves as you progress.",
    },
  ],

  // ─── SchemaOrg defaults ───────────────────────────────────────────────────
  schema: {
    name: "Sandra Brann — Health & Wellness Coach",
    description:
      "Certified Health & Wellness Coach helping clients achieve optimal health through personalized, root-cause coaching and sustainable lifestyle changes.",
    jobTitle: "Certified Health & Wellness Coach",
    priceRange: "$$",
    fallbackUrl: "",
    knowsAbout: [
      "Health Coaching",
      "Wellness Coaching",
      "Functional Medicine",
      "Nutrition",
      "Gut Health",
      "Hormonal Health",
      "Stress Management",
      "Sleep Optimization",
      "Root Cause Medicine",
      "Women's Health",
    ],
  },
} as const;
