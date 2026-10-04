import type { Creator } from "@/types/creator";

export const creators: Creator[] = [
  {
    id: 1,
    slug: "kai",
    name: "Kai Nakamura",
    handle: "@kai.builds",
    category: "Tech · Business",
    bio: "AI, products and practical ideas for people building what comes next.",
    followers: "142K",
    theme: {
      accent: "#60a5fa",
      gradient: "from-blue-500/45 via-violet-500/15 to-transparent",
    },
    image: "/avatars/kai.png",
    tags: ["AI", "Startups", "Product"],
    latestDrops: [
      { title: "3 AI workflows I actually use", meta: "Reel · 0:58" },
      { title: "How I validate a product idea", meta: "Thread · 9 posts" },
      { title: "My 2027 tech radar", meta: "Guide · 6 min read" },
    ],
    prompts: [
      {
        label: "Explain an AI idea",
        response:
          "Give me the idea in one sentence and I’ll break it down into a simple product concept, target audience and first MVP features.",
      },
      {
        label: "Validate my startup idea",
        response:
          "Tell me the problem you want to solve and who has it. I’ll help you check whether the idea has a clear user, value and realistic first version.",
      },
    ],
  },
  {
    id: 2,
    slug: "malik",
    name: "Malik Brooks",
    handle: "@malik.roams",
    category: "Travel · Adventure",
    bio: "Hidden coastlines, spontaneous routes and travel stories worth keeping.",
    followers: "189K",
    theme: {
      accent: "#fb923c",
      gradient: "from-orange-400/45 via-amber-500/15 to-transparent",
    },
    image: "/avatars/malik.png",
    tags: ["Travel", "Adventure", "Guides"],
    latestDrops: [
      { title: "48 hours on the coast", meta: "Vlog · 12 min" },
      { title: "The route I almost skipped", meta: "Story · 7 slides" },
      { title: "Carry-on essentials", meta: "Checklist · 14 items" },
    ],
    prompts: [
      {
        label: "Plan my weekend trip",
        response:
          "Tell me your starting city, budget and preferred vibe. I’ll suggest a short route, where to stay and what is actually worth seeing.",
      },
      {
        label: "Find a hidden place",
        response:
          "I’d skip the obvious tourist spots and look for a local viewpoint, market or coastal trail with fewer crowds and a better atmosphere.",
      },
    ],
  },
  {
    id: 3,
    slug: "sofia",
    name: "Sofia Laurent",
    handle: "@sofia.edit",
    category: "Fashion · Lifestyle",
    bio: "Refined looks, city rituals and a little confidence for every room you enter.",
    followers: "264K",
    theme: {
      accent: "#f472b6",
      gradient: "from-pink-400/45 via-fuchsia-500/15 to-transparent",
    },
    image: "/avatars/sofia.png",
    tags: ["Fashion", "Beauty", "City Life"],
    latestDrops: [
      { title: "The five-piece city wardrobe", meta: "Lookbook · 5 looks" },
      { title: "Coffee, tailoring, repeat", meta: "Reel · 0:42" },
      { title: "My night-out edit", meta: "Story · 6 slides" },
    ],
    prompts: [
      {
        label: "Style an outfit for me",
        response:
          "Tell me the occasion and one piece you definitely want to wear. I’ll build the rest of the look around it.",
      },
      {
        label: "Build a capsule wardrobe",
        response:
          "Start with 8–10 versatile pieces in a neutral palette. I’d combine structured basics with two statement pieces for variety.",
      },
    ],
  },
  {
    id: 4,
    slug: "maya",
    name: "Maya Rivera",
    handle: "@maya.moves",
    category: "Fitness · Wellness",
    bio: "Simple movement, better energy and routines that fit real life.",
    followers: "173K",
    theme: {
      accent: "#34d399",
      gradient: "from-emerald-400/45 via-teal-500/15 to-transparent",
    },
    image: "/avatars/maya.png",
    tags: ["Fitness", "Wellness", "Habits"],
    latestDrops: [
      { title: "20-minute hotel workout", meta: "Workout · 20 min" },
      { title: "My Sunday reset", meta: "Reel · 1:05" },
      { title: "A better morning in 3 steps", meta: "Guide · 4 min read" },
    ],
    prompts: [
      {
        label: "Build me a quick workout",
        response:
          "Tell me how much time you have and whether you’re training at home or in the gym. I’ll build a simple session around that.",
      },
      {
        label: "Improve my daily routine",
        response:
          "Start with one realistic change for movement, sleep and nutrition. The goal is a routine you can actually repeat every day.",
      },
    ],
  },
];
