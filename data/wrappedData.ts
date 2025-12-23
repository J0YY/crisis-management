// Placeholder data for Crisis Management Wrapped 2025.
// Replace these objects with real chat exports, photos, and memories later.

export type VibeStat = {
  label: string;
  value: number; // 0-100
  description: string;
};

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  accent?: string;
  rotate?: string;
};

export type Moment = {
  title: string;
  stat: string;
  quote: string;
  tag?: string;
};

export type Superlative = {
  title: string;
  detail: string;
  icon?: string;
};

export type TimeEnergy = {
  label: string;
  value: number;
  note: string;
};

export const vibeStats: VibeStat[] = [
  {
    label: "Overall Mood of the Group Chat",
    value: 92,
    description: "Warm, supportive, and occasionally unhinged in the best way."
  },
  {
    label: "Chaos Level",
    value: 78,
    description: "Spreadsheets for feelings. Midnight brainstorms. Mild chaos."
  },
  {
    label: "Wholesomeness Index",
    value: 96,
    description: "Affirmations on speed-dial. Everyone watered and fed."
  },
  {
    label: "Laughing Until Crying Rate",
    value: 88,
    description: "High frequency of feral cackling and all caps reactions."
  }
];

export const photos: Photo[] = [
  {
    src: "/photos/photo-1.svg",
    alt: "Trio laughing with blurry lights",
    caption: "We laughed so hard the photo gave up.",
    accent: "❤️",
    rotate: "-rotate-2"
  },
  {
    src: "/photos/photo-2.svg",
    alt: "Late night takeout",
    caption: "“We should sleep.” — also us: ordering fries.",
    accent: "✨",
    rotate: "rotate-1"
  },
  {
    src: "/photos/photo-3.svg",
    alt: "Sunset selfie",
    caption: "Golden hour, golden humans.",
    accent: "🌅",
    rotate: "-rotate-1"
  },
  {
    src: "/photos/photo-4.svg",
    alt: "Dance floor chaos",
    caption: "Evidence of rhythm (allegedly).",
    accent: "🪩",
    rotate: "rotate-2"
  },
  {
    src: "/photos/photo-5.svg",
    alt: "Cozy couch hang",
    caption: "Friendship = blanket burritos + tea.",
    accent: "☕️",
    rotate: "-rotate-3"
  },
  {
    src: "/photos/photo-6.svg",
    alt: "Victory pose",
    caption: "We did it. Not sure what, but we did it.",
    accent: "🏆",
    rotate: "rotate-1"
  }
];

export const iconicMoments: Moment[] = [
  {
    title: "The Crisis Hotline Hours",
    stat: "Open 24/7, staffed by love",
    quote: "“Okay, rapid-fire feelings dump. Go.”",
    tag: "urgent"
  },
  {
    title: "The “Wait…” Messages",
    stat: "18 voice notes that started with “so… wait”",
    quote: "“Hear me out — what if we just… moved to a farm?”",
    tag: "plot-twist"
  },
  {
    title: "Group Chat Therapy Sessions",
    stat: "Certified by zero professionals, trusted by all",
    quote: "“We can cry and also order dumplings.”",
    tag: "soft"
  },
  {
    title: "Absolutely Unnecessary Overthinking",
    stat: "14 spreadsheets, 0 regrets",
    quote: "“Do we need a rubric for this? Absolutely.”",
    tag: "chaos"
  },
  {
    title: "Moments We Knew Were Iconic",
    stat: "Documented in all caps within 0.3 seconds",
    quote: "“This is going in the highlight reel.”",
    tag: "legendary"
  }
];

export const superlatives: Superlative[] = [
  {
    title: "Most Emotionally Supportive",
    detail: "Always knows when to send the exact right sentence.",
    icon: "💌"
  },
  {
    title: "Best Listener",
    detail: "Hears the words *and* the silence between them.",
    icon: "👂"
  },
  {
    title: "Most Likely to Make Everything Feel Okay",
    detail: "Turns crisis into cozy within three minutes.",
    icon: "🧸"
  },
  {
    title: "Human Sunshine Award",
    detail: "Walks into a room and the lights get warmer.",
    icon: "☀️"
  },
  {
    title: "Glue of the Group",
    detail: "Keeps the trio laughing, honest, and together.",
    icon: "✨"
  }
];

export const timeEnergy: TimeEnergy[] = [
  {
    label: "11 PM – 1 AM",
    value: 90,
    note: "Peak chaos and deep talks."
  },
  {
    label: "7 AM – 9 AM",
    value: 35,
    note: "Sleepy check-ins, coffee emojis only."
  },
  {
    label: "12 PM – 2 PM",
    value: 60,
    note: "Spontaneous memes during “lunch breaks”."
  },
  {
    label: "5 PM – 7 PM",
    value: 70,
    note: "Recaps, plans, and hype voice notes."
  },
  {
    label: "Whenever Someone Types “Crisis”",
    value: 100,
    note: "Bat signal activated immediately."
  }
];

