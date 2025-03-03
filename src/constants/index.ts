import { TNavLink, TService, THeroSection } from '../types';

export const navLinks: TNavLink[] = [
  {
    id: 'home',
    title: 'Home',
    path: '/',
  },
  {
    id: 'about',
    title: 'About',
    path: '/about',
  },
  {
    id: 'contact',
    title: 'Contact',
    path: '/contact',
  },
  {
    id: 'events',
    title: 'Events',
    path: '/events',
  },
];

export const services: TService[] = [
  {
    title: 'Wine Tasting Events',
    icon: '/wine-tasting',
    link: '/events/wine-tasting',
  },
  {     
    title: 'Art & Wine Workshops',
    icon: '/art-workshop',
    link: '/events/art-workshop',
  },
  {
    title: 'Book Club & Wine',
    icon: '/book-club',
    link: '/events/book-club',
  },
  {
    title: 'Private Events',
    icon: '/private-events',
    link: '/events/private',
  },
];

export const heroSection: THeroSection[] = [
  {
    title: 'Wine & Something for Women',
    description: 'Join our community of wine enthusiasts and discover new experiences through our curated events and activities.',
    buttonText: 'Join an Event',
    buttonLink: '/events',
    imageUrl: '/images/hero-image.jpg',
  },
];

// You might also want to add some sample events
export const upcomingEvents = [
  {
    id: '1',
    title: 'Summer Wine Tasting',
    description: 'Discover amazing summer wines',
    imageUrl: '/images/summer-wine.jpg',
    date: new Date('2024-06-15'),
    startTime: '18:00',
    endTime: '21:00',
    location: 'Downtown Wine Bar',
    capacity: 20,
    price: 45.00,
    currentAttendees: 0,
    wineSelection: [],
    activities: [],
    isPrivate: false,
  },
  // Add more events as needed
];