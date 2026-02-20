// src/config/siteConfig.ts
// Centralized configuration for all coach-specific data.
// Update this file to customize the site for a different coach.

export const siteConfig = {
  // ─── Coach Identity ───────────────────────────────────────────────────────
  coach: {
    name: "Mariska Goebel",
    firstName: "Mariska",
    title: "Certified Functional Medicine Coach",
    email: "goebelfunctionalhealth@gmail.com",
    phone: "+12629148904",
    location: "Wisconsin, USA",
  },

  // ─── Site Metadata ────────────────────────────────────────────────────────
  site: {
    name: "Mariska Goebel - Certified Functional Medicine Coach",
    description:
      "Mariska Goebel is a Certified Functional Medicine Coach and Doctorate of Nursing Practice helping women 30-50 optimize thyroid function and restore hormonal balance through root-cause medicine.",
    ogImage: "/images/og-default.jpg",
  },

  // ─── Brand Colors ─────────────────────────────────────────────────────────
  brand: {
    primary: "#8B9E7C",
    accent: "#D4C5A9",
    mint: "#afc09e",
    cream: "#faf7f0",
  },

  // ─── Images ───────────────────────────────────────────────────────────────
  images: {
    portrait: "/images/generated/coach-portrait.jpg",
    hero: "/images/generated/hero-variant-1.jpg",
    ogDefault: "/images/og-default.jpg",
  },

  // ─── Social Media ─────────────────────────────────────────────────────────
  social: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/goebelfunctionalhealth",
      iconPath:
        "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
      iconSvg: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
    },
  ],

  // ─── Stats & Credentials ──────────────────────────────────────────────────
  stats: {
    yearsExperience: "15+",
    certifications: 3,
    processSteps: 4,
  },

  statsBar: [
    {
      number: "15+",
      label: "Years in Clinical Practice",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
    },
    {
      number: "3",
      label: "Advanced Certifications",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>`,
    },
    {
      number: "100%",
      label: "Free Discovery Call — No Commitment",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>`,
    },
  ],

  credentialBadges: [
    { abbr: "FMC", full: "Functional Medicine Coach" },
    { abbr: "DNP", full: "Doctorate of Nursing Practice" },
    { abbr: "FNP-BC", full: "Family Nurse Practitioner Board Certified" },
    { abbr: "AccrediPro", full: "Functional Medicine Coaching Certificate" },
  ],

  // ─── Certifications (used in AboutPreview & about.astro) ─────────────────
  certifications: [
    {
      title: "Functional Medicine Coaching Certificate",
      label: "AccrediPro Certified",
      description: "Accredipro Functional Medicine Coaching certification focused on root-cause healing and personalized wellness protocols",
      variant: "default" as const,
    },
    {
      title: "Doctorate of Nursing Practice",
      label: "DNP",
      description: "Advanced clinical expertise with deep knowledge of pathophysiology, diagnostics, and evidence-based treatment",
      variant: "outline" as const,
    },
    {
      title: "Family Nurse Practitioner Board Certified",
      label: "FNP-BC",
      description: "Board-certified advanced practice nurse with clinical expertise in hormonal and thyroid conditions",
      variant: "accent" as const,
    },
  ],

  // ─── Bio / Story ──────────────────────────────────────────────────────────
  bio: {
    pullquote:
      "Your labs may say 'normal' — but you know your body. Let's find the real answers together.",
    storyPreview:
      "My path to functional medicine wasn't just professional — it was deeply personal. As a woman living with Hashimoto's hypothyroidism, PCOS, and endometriosis, I know firsthand what it feels like to struggle with symptoms your doctors dismiss. That frustration became my calling.",
    storyParagraphs: [
      "I began my career as an ICU nurse, driven by a genuine desire to help people at their most vulnerable. Over the years, I earned my Doctorate of Nursing Practice and became a Family Nurse Practitioner Board Certified — building a clinical foundation I am incredibly proud of.",
      "But it was my own health journey — navigating Hashimoto's hypothyroidism, PCOS, and endometriosis — that led me to functional medicine. Time and again, I sat in exam rooms hearing that my labs were 'normal' while I felt anything but. I understand the frustration, the self-doubt, and the exhaustion of not being heard.",
      "That experience transformed how I practice. I now combine the critical thinking skills of traditional nursing and advanced practice with functional medicine coaching to look beyond the reference range and find the root cause of your symptoms. Because 'normal' is not the same as optimal.",
    ],
    differentiator:
      "I bring the clinical depth of a DNP and Family Nurse Practitioner together with functional medicine coaching — so I understand both your labs AND your lived experience. I don't just manage symptoms. I help you understand why they're happening and create a personalized protocol to address the root cause.",
    holisticAspects: ["Thyroid", "Hormones", "Gut Health", "Nutrition", "Stress", "Sleep"],
    holisticQuote:
      "When we address the root cause — not just the symptoms — real, lasting healing becomes possible.",
  },

  // ─── Services ─────────────────────────────────────────────────────────────
  servicesPreview: [
    {
      title: "Free Discovery Call",
      description:
        "A complimentary 30-minute conversation to discuss your symptoms, your goals, and whether working together is the right fit. No pressure, no commitment — just a real conversation.",
      icon: `<svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" /></svg>`,
      price: "FREE",
      priceNote: "No commitment required",
      popular: false,
      href: "/contact",
    },
    {
      title: "3 Month Thyroid Optimization",
      description:
        "A comprehensive 3-month program designed to address the root causes of thyroid dysfunction. Includes 12 weekly video calls, personalized diet plan, customized protocol, and email messaging support.",
      icon: `<svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
      price: "$1,499",
      priceNote: "Option to extend beyond 3 months",
      popular: true,
      href: "/contact",
    },
    {
      title: "Rebalancing Your Hormones in 3 Months",
      description:
        "A targeted 3-month program for women dealing with hormonal imbalance, PCOS, endometriosis, or perimenopause. Includes 12 weekly video calls, personalized nutrition plan, and customized hormonal protocol.",
      icon: `<svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
      price: "$1,499",
      priceNote: "Option to extend beyond 3 months",
      popular: false,
      href: "/contact",
    },
  ],

  servicesDetail: [
    {
      id: "discovery-call",
      title: "Free Discovery Call",
      subtitle: "Your First Step to Answers",
      price: "FREE",
      duration: "30 minutes",
      description:
        "Not sure if functional medicine coaching is right for you? Start with a free 30-minute discovery call. We'll talk about your symptoms, your history, and your goals. There's no obligation — just an honest conversation about whether we're a good fit and how I can help.",
      features: [
        "Review your top symptoms and health concerns",
        "Discuss your hormone and thyroid history",
        "Understand what functional medicine coaching can offer",
        "Ask any questions you have",
        "No sales pressure — just a real conversation",
      ],
      idealFor:
        "Any woman who has been told her labs are 'normal' but still feels exhausted, symptomatic, and unheard.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>`,
    },
    {
      id: "thyroid-optimization",
      title: "3 Month Thyroid Optimization",
      subtitle: "Root-Cause Thyroid Recovery Program",
      price: "$1,499",
      duration: "12 weekly video calls",
      description:
        "A comprehensive 3-month coaching program designed to address the root causes of thyroid dysfunction — not just manage TSH numbers. Together we identify your triggers, rebuild your foundation, and create a personalized protocol that supports lasting thyroid health.",
      features: [
        "12 weekly one-on-one video calls",
        "Personalized diet plan tailored to thyroid health",
        "Customized thyroid optimization protocol",
        "Email messaging support throughout",
        "Lab interpretation guidance (Hashimoto's, hypothyroid, subclinical)",
        "Option to extend beyond 3 months",
      ],
      idealFor:
        "Women 30-50 with Hashimoto's, hypothyroidism, or subclinical thyroid dysfunction who have been told their labs are 'normal' but continue to experience fatigue, brain fog, weight gain, or hair loss.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
    },
    {
      id: "hormone-rebalancing",
      title: "Rebalancing Your Hormones in 3 Months",
      subtitle: "Hormonal Balance Restoration Program",
      price: "$1,499",
      duration: "12 weekly video calls",
      description:
        "A targeted 3-month program for women navigating hormonal imbalance, PCOS, endometriosis, or the transition into perimenopause. We go beyond symptom management to identify what's driving your hormonal disruption and build a personalized path back to balance.",
      features: [
        "12 weekly one-on-one video calls",
        "Personalized nutrition plan for hormonal health",
        "Customized hormonal rebalancing protocol",
        "Email messaging support throughout",
        "Guidance on cycle tracking and symptom patterns",
        "Option to extend beyond 3 months",
      ],
      idealFor:
        "Women 30-50 struggling with PCOS, endometriosis, irregular cycles, estrogen dominance, or perimenopause symptoms who want real answers — not just birth control as the only solution.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
    },
  ],

  // ─── Testimonials ─────────────────────────────────────────────────────────
  testimonials: [
    {
      name: "Jennifer R.",
      role: "Teacher, 38 years old",
      outcome: "Hashimoto's symptoms resolved, energy restored",
      content:
        "For three years I was told my thyroid levels were 'within range' — but I couldn't lose weight, my hair was falling out, and I was exhausted by noon. Working with Mariska completely changed my life. She looked at the full picture, adjusted my diet and protocol, and within two months I finally felt like myself again. I wish I'd found her sooner.",
    },
    {
      name: "Amanda K.",
      role: "Marketing Manager, 42 years old",
      outcome: "PCOS managed naturally, cycles regulated",
      content:
        "I'd been living with PCOS for over a decade and was told my only options were birth control or Metformin. Mariska took the time to actually understand what was driving my hormonal imbalance. Through her program, my cycles are now regular for the first time in years, my skin has cleared, and I feel genuinely hopeful about my health.",
    },
    {
      name: "Sarah M.",
      role: "Registered Nurse, 35 years old",
      outcome: "Endometriosis pain reduced, energy returned",
      content:
        "As a nurse I thought I knew a lot about my own health — but I was still suffering from endometriosis pain every month and felt completely dismissed by doctors. Mariska understood both the clinical side and the real lived experience. Her personalized approach helped me reduce inflammation, manage my cycle naturally, and actually look forward to getting out of bed again.",
    },
    {
      name: "Michelle T.",
      role: "Stay-at-home mom, 44 years old",
      outcome: "Perimenopause symptoms managed, brain fog gone",
      content:
        "I was in perimenopause and felt like I was losing my mind — brain fog, hot flashes, terrible sleep. My doctor just offered antidepressants. Mariska listened, really listened, and built a plan that addressed my hormones through food, lifestyle, and targeted supplements. Within 6 weeks I was sleeping again. I can't recommend her enough.",
    },
    {
      name: "Laura B.",
      role: "Physical Therapist, 39 years old",
      outcome: "Hypothyroid symptoms resolved after years of struggle",
      content:
        "I had subclinical hypothyroidism and kept being told to 'wait and see' while I gained weight and felt miserable. Mariska's background as both a nurse practitioner and functional medicine coach gave her a perspective I hadn't encountered before. She helped me understand my labs differently and make changes that actually moved the needle. Six months later I feel like a different person.",
    },
    {
      name: "Nicole W.",
      role: "Accountant, 36 years old",
      outcome: "PCOS and thyroid dysfunction addressed together",
      content:
        "I had both Hashimoto's and PCOS and felt like no one was looking at the full picture. Mariska was the first practitioner who understood how they were connected. Her 3-month hormone rebalancing program was thorough, personalized, and compassionate. I finally have answers — and a plan that actually works.",
    },
  ],

  // ─── Who I Work With ──────────────────────────────────────────────────────
  whoIWorkWithTraits: [
    "You're a woman between 30-50 dealing with unexplained fatigue, weight changes, or mood shifts",
    "You've been told your thyroid or hormone labs are 'normal' — but you know something is wrong",
    "You struggle with symptoms of Hashimoto's, hypothyroidism, PCOS, or endometriosis",
    "You're tired of being handed a prescription without being given real answers",
    "You want to understand your body and address the root cause — not just manage symptoms",
    "You're ready to invest in a personalized, evidence-informed approach to your health",
  ],

  // ─── Process Steps ────────────────────────────────────────────────────────
  processSteps: [
    {
      number: "01",
      title: "Discover Your Root Cause",
      description:
        "We start by reviewing your full health history, symptoms, and labs — looking beyond 'normal' to uncover what's actually driving your condition.",
      icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`,
    },
    {
      number: "02",
      title: "Build Your Protocol",
      description:
        "I create a personalized diet plan and customized protocol based on your specific thyroid or hormonal picture — no generic templates.",
      icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" /></svg>`,
    },
    {
      number: "03",
      title: "Implement and Adjust",
      description:
        "Through 12 weekly video calls, we implement your protocol, track your progress, and adjust in real time based on how your body responds.",
      icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg>`,
    },
    {
      number: "04",
      title: "Sustain Your Health",
      description:
        "Leave with the knowledge, tools, and habits to maintain your thyroid and hormonal health for life — with the option to extend if you need more time.",
      icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>`,
    },
  ],

  // Approach items used on about.astro
  approachItems: [
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>`,
      title: "Discover Your Root Cause",
      description: "Look beyond 'normal' lab ranges to understand what's actually driving your symptoms.",
    },
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>`,
      title: "Build Your Protocol",
      description: "Receive a personalized plan tailored to your unique thyroid and hormonal picture.",
    },
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
      title: "Implement and Adjust",
      description: "Weekly calls keep you accountable while we refine your protocol based on real results.",
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
      question: "My doctor says my thyroid labs are normal. Can you still help me?",
      answer:
        "Yes — this is exactly who I work with. Conventional lab 'normal' ranges are based on population averages, not optimal function. As someone with my own thyroid history and advanced clinical training, I know how to look at the full thyroid panel (not just TSH) and identify patterns that get missed in a standard office visit. If you still feel symptomatic despite 'normal' labs, there's likely more to uncover.",
    },
    {
      question: "What's the difference between functional medicine coaching and seeing my doctor?",
      answer:
        "Your doctor manages diagnoses and prescribes treatment. Functional medicine coaching focuses on the root causes of symptoms — diet, gut health, stress, sleep, nutrient deficiencies, and lifestyle factors — that standard medicine often doesn't have time to address. I work alongside your medical team, not instead of it. My background as a DNP and Family Nurse Practitioner means I understand your medical history and labs in depth.",
    },
    {
      question: "I've tried everything. What makes your approach different?",
      answer:
        "Most programs take a one-size-fits-all approach. Mine doesn't. Because of my clinical training combined with functional medicine coaching, I can interpret your labs through a much more nuanced lens and build a protocol that is genuinely tailored to you — your thyroid pattern, your hormonal picture, your history, your life. I also have personal experience with Hashimoto's, PCOS, and endometriosis, so I understand what you're going through from the inside.",
    },
    {
      question: "What does the program actually include?",
      answer:
        "Both programs include 12 weekly one-on-one video calls, email messaging support throughout, a personalized diet plan, and a customized protocol (diet, lifestyle, and supplement recommendations tailored to your specific condition). There's also the option to extend beyond the 3 months if you need more time. Every aspect of the program is built around your individual health picture.",
    },
    {
      question: "How do I know which program is right for me — Thyroid Optimization or Hormone Rebalancing?",
      answer:
        "If your primary struggle is thyroid-related (Hashimoto's, hypothyroidism, fatigue, weight, brain fog), the 3 Month Thyroid Optimization is the right fit. If your main concerns are hormonal (PCOS, endometriosis, irregular cycles, PMS, perimenopause), Rebalancing Your Hormones is the better starting point. Many women have both — we'll figure out the best approach together on your free discovery call.",
    },
    {
      question: "Is the discovery call really free?",
      answer:
        "Absolutely. The free discovery call is a genuine 30-minute conversation — no sales pressure, no hidden agenda. We talk about your symptoms, your history, and your goals. If we both feel it's a good fit, we can discuss next steps. If not, you'll still leave with clarity and perspective on your health situation.",
    },
    {
      question: "How quickly will you respond to messages?",
      answer:
        "I respond to all email inquiries within 24-48 hours. For active clients, email messaging support is included throughout the program to ensure you have continuity of support between our weekly calls.",
    },
    {
      question: "Do I need to live in a specific location to work with you?",
      answer:
        "No — all coaching sessions are conducted via video call, so we can work together regardless of where you live.",
    },
  ],

  // ─── SchemaOrg defaults ───────────────────────────────────────────────────
  schema: {
    name: "Mariska Goebel - Certified Functional Medicine Coach",
    description:
      "Certified Functional Medicine Coach and Doctorate of Nursing Practice helping women 30-50 optimize thyroid function and restore hormonal balance through root-cause medicine.",
    jobTitle: "Certified Functional Medicine Coach",
    priceRange: "$$",
    fallbackUrl: "https://goebelfunctionalhealth.com",
    knowsAbout: [
      "Functional Medicine Coaching",
      "Thyroid Health",
      "Hashimoto's Thyroiditis",
      "Hormonal Imbalance",
      "PCOS",
      "Endometriosis",
      "Women's Health",
      "Root Cause Medicine",
      "Nutrition and Diet",
      "Perimenopause",
    ],
  },
} as const;
