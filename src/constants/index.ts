import { TNavLink, TService, THeroSection } from '../types';
import { TEvent } from '../types/index.d';
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
    id: 'wine-tasting',
    title: 'Wine Tasting Events',
    icon: '/wine-tasting',
    link: '/events/wine-tasting',
  },
  {     
    id: 'art-workshop',
    title: 'Art & Wine Workshops',
    icon: '/art-workshop',
    link: '/events/art-workshop',
  },
  {
    id: 'book-club',
    title: 'Book Club & Wine',
    icon: '/book-club',
    link: '/events/book-club',
  },
  {
    id: 'private-events',
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
export const upcomingEvents: TEvent[] = [
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
  {
    id: '2',
    title: 'Art & Wine Workshop',
    description: 'Create your own art piece while enjoying wine',
    imageUrl: '/images/art-workshop.jpg',
    date: new Date('2024-07-20'),
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
  {
    id: '3',
    title: 'Book Club & Wine',
    description: 'Join our book club and enjoy wine',
    imageUrl: '/images/book-club.jpg',
    date: new Date('2024-08-15'),
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