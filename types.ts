import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: 'shop' | 'repair' | 'team';
}

export interface Review {
  name: string;
  image: string;
  stars: number;
  text: string;
}