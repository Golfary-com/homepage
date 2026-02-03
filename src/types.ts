export interface Dictionary {
  common: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    services: string;
    company: string;
    contact: string;
    news: string;
  };
  hero: {
    slogan: string;
    subSlogan: string;
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
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    submit: string;
  };
}
