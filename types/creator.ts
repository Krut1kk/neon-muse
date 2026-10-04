export type CreatorPrompt = {
  label: string;
  response: string;
};

export type CreatorDrop = {
  title: string;
  meta: string;
  image: string;
};

export type CreatorTheme = {
  accent: string;
  gradient: string;
};

export type Creator = {
  id: number;
  slug: string;
  name: string;
  handle: string;
  category: string;
  bio: string;
  followers: string;
  theme: CreatorTheme;
  image: string;
  tags: string[];
  latestDrops: CreatorDrop[];
  prompts: CreatorPrompt[];
};
