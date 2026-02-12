// Reusable type definitions for components
export interface ServiceItem {
  image: string;
  alt: string;
  title: string;
  desc: string;
}

export interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  image?: string;
  bio?: string;
  education?: string;
  experience?: string;
  linkedin?: string;
}

export interface NewsItem {
  date: string;
  title: string;
  category: string;
  image?: string;
  url?: string;
}

export interface Dictionary {
  common: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    services: string;
    team: string;
    company: string;
    contact: string;
    news: string;
  };
  hero: {
    slogan: string;
    subSlogan: string;
  };
  video: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    course: { title: string; desc: string };
    travel: { title: string; desc: string };
    schedule: { title: string; desc: string };
  };
  news: {
    title: string;
    showMore: string;
    showLess: string;
    items: NewsItem[];
  };
  company: {
    mission: string;
    missionDesc: string;
    vision: string;
    visionDesc: string;
    nihonKiko: {
      name: string;
      introduction: string;
      address: string;
      establishment: string;
      capital: string;
      representative: string;
      business: string[];
    };
  };
  team: {
    title: string;
    subtitle: string;
    viewDetails: string;
    bioTitle: string;
    educationTitle: string;
    experienceTitle: string;
    linkedinTitle: string;
    members: TeamMember[];
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    submit: string;
  };
}
