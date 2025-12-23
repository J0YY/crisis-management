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

export type ChatReceipt = {
  title: string;
  summary: string;
  messages: string[];
  tag?: string;
};

export type Mission = {
  title: string;
  time: string;
  detail: string;
  highlight: string;
  tag?: string;
};

export type HotlineMoment = {
  headline: string;
  reply: string;
  tag?: string;
};

export type Lesson = {
  title: string;
  detail: string;
  emphasis?: string;
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
    title: "2:59 AM Ping",
    stat: "Late-night alert",
    quote: "He is in ga So this is 2:59 AM his time",
    tag: "chaos"
  },
  {
    title: "Plot Twist Alert",
    stat: "We did NOT get this update",
    quote: "WE DID NOT GET THIS UPDATE",
    tag: "plot"
  },
  {
    title: "Bystander Vibe Check",
    stat: "Live observations",
    quote: "that way we could observe and you get a bystander opinion of the vibe",
    tag: "ops"
  },
  {
    title: "Mission Whiplash",
    stat: "Rapid status flip",
    quote: "ANJALI YOU TOLD ME IT WAS GOING BADLY WHEN WE HOT TO THE THEATER",
    tag: "whiplash"
  },
  {
    title: "Dignity Meter",
    stat: "On double texts",
    quote: "if he really was playing games then this is the moment where all his dignity goes down the drain",
    tag: "callout"
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

export const chatReceipts: ChatReceipt[] = [
  {
    title: "The What Ifs",
    summary: "Anjali second guessing her love life.",
    messages: [
      "What if he doesnt think its a date",
      "kill me now",
      "I lowk wanna skip",
      "What if i dont go",
      "i dont wanna go 😭😭😭",
      "	What if hes playing more games",
      "And tects me later like",
      "Oh i missed this"
    ],
    tag: "whatifs"
  },
  {
    title: "MOVIE DATE FAIL",
    summary: "We thought",
    messages: [
      "Can u guys draft the message and j tect me",
      "If the date does not go well pls make sure someone sits bw me and him 🙏🙏",
      "bro we r foills Im telling u",
      "COME NOWWW",
      "first mission completed 🤝🤝🤝 (-soc)",
      "ANJALI YOU TOLD ME IT WAS GOING BADLY WHEN WE HOT TO THE THEATER (-joy)",
      "there was NO NEED for us to divide you and this poor man (-joy)",
      "it was A BIT AKWARD being with ameya during the kiss scenes 😂😂 (-soc)",
      "👀👀👀👀👀??? (-soc)",
      "so second date????? (-soc)",
      "no more scheming?? 😔😔 (-soc)",
      "No more scheming about my love life seriously"
    ],
    tag: "ameyaarc"
  },
  {
    title: "Ameya Arc ++",
    summary: "We thought we were done with the Ameya arc",
    messages: [
      "if you need a place to sleep lmk :) (-ameya)",
      "OMG YOU ALR GOT HIM (-soc)",
      "team we need a crisis managed",
      "I CANT FIND HIM",
      "Oh jk",
      "He has another girl in his room",
      "y si es lesbiana? (-soc)"
    ],
    tag: "ops"
  },
  {
    title: "Hotline Highlights",
    summary: "Crisis management at its finest",
    messages: [
      "hi team, got some news 👀👀👀👀 (-soc)",
      "GUYS PLS COME SAVE ME",
      "idk if we’re gonna be able to rally after all 😭😭😭 (-joy)",
      "FUEGO",
      "Se ha reaccionado con ☺️ a “TE AMO”",
      "in case u guys wanted to know the current state of events 💀",
      "omg?? need a storytime (-joy)",
      "the last convo was him just being down bad and me shutting it down 😭😭😭"
    ],
    tag: "debrief"
  },
  
];

export const missions: Mission[] = [
  {
    title: "Operation Check-In",
    time: "Night of",
    detail:
      "Everyone texts when home; mutual accountability plus light teasing about early alarms and slow replies.",
    highlight: "“Both of you text me when ur home!!!”",
    tag: "safety"
  },
  {
    title: "Boundary Drill at 2:59 AM",
    time: "Late night",
    detail:
      "A rogue notification reopens the case. Solution: no schedule send, respond only when it truly feels right.",
    highlight: "“either call him rn or leave him on read until monday”",
    tag: "care"
  },
  {
    title: "Operation Materialists",
    time: "10:28 PM show",
    detail:
      "Dinner + movie plan with friends as buffer; ETA managed with ad math; bystander observations queued.",
    highlight: "“COME NOWWW they wont let u in otherwise”",
    tag: "ops"
  },
  {
    title: "Lobby Rally",
    time: "10:25 PM",
    detail:
      "Arrivals staggered, nerves high, friends en route. Group thread keeps the hype up and the plan moving.",
    highlight: "“on our way though!!! 2 mins”",
    tag: "support"
  },
  {
    title: "Post-Movie Debrief",
    time: "Call after",
    detail:
      "Full retrospective with laughter, awkward-kiss-scene commentary, and vows to retire the scheming (for now).",
    highlight: "“no more scheming about my love life seriously”",
    tag: "debrief"
  },
  {
    title: "Canon Charger Airlift",
    time: "House cooling",
    detail:
      "Locate charger on the right side of the desk, deliver to the event, keep the camera rolling and the night documented.",
    highlight: "“i gotchu 🫡🫡”",
    tag: "logistics"
  }
];

export const hotlineMoments: HotlineMoment[] = [
  {
    headline: "Boundary-Setting Script",
    reply: "“no more schedule send!! respond to him when it actually occurs to you to do so”",
    tag: "care"
  },
  {
    headline: "Decision Tree at 5 AM",
    reply: "“either call him rn or leave him on read until monday”",
    tag: "tough love"
  },
  {
    headline: "Calming the Spiral",
    reply: "“treat it as not even a date. just a hangout bw old friends”",
    tag: "calm"
  },
  {
    headline: "Logistics + Safety",
    reply: "“once again text me when y’all are home!!!”",
    tag: "safety"
  },
  {
    headline: "Respect for Peace",
    reply: "“leave him on read cuz your mental peace is worth way more”",
    tag: "priority"
  }
];

export const lessons: Lesson[] = [
  {
    title: "Friendship > Schemes",
    detail: "We can orchestrate plots, but the heartbeats are the check-ins, late calls, and mutual care.",
    emphasis: "Every mission started and ended with making sure you were okay."
  },
  {
    title: "Chaos is Cozy Here",
    detail: "Missed ads, lobby scrambles, and late ETAs still feel safe because we’re in it together.",
    emphasis: "The crisis line is staffed 24/7 with love."
  },
  {
    title: "You Call, We Answer",
    detail: "From chargers to late-night calls, we show up. The lore gets funnier; the loyalty stays loud.",
    emphasis: "“Team we need a crisis managed” is our bat signal."
  }
];

