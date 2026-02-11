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
  };
  services: {
    title: string;
    course: { title: string; desc: string };
    travel: { title: string; desc: string };
    schedule: { title: string; desc: string };
  };
  news: {
    title: string;
    items: {
      date: string;
      title: string;
      category: string;
      image?: string;
      url?: string;
    }[];
  };
  company: {
    mission: string;
    missionDesc: string;
    vision: string;
    visionDesc: string;
    info: {
      title: string;
      address: string;
      capital: string;
      team: string;
    };
    partnership: {
      title: string;
      description: string;
      learnMore: string;
    };
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
    members: {
      name: string;
      role: string;
      expertise: string;
    }[];
    strengthsTitle: string;
    strengths: {
      icon: string;
      title: string;
      description: string;
    }[];
    partnershipTitle: string;
    partnershipDesc: string;
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
