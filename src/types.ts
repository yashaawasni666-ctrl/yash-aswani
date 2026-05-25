export interface Project {
  id: string;
  name: string;
  industry: string;
  description: string;
  accent: string;
  theme: 'dark' | 'light' | 'gilded';
  screens: {
    title: string;
    tagline: string;
    elements: Array<{
      type: 'header' | 'hero' | 'grid' | 'booking' | 'menu' | 'gallery';
      title: string;
      subtitle?: string;
      items?: string[];
    }>;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  badge?: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  avatarLetter: string;
}
