import { TNavLink, TService, THeroSection } from '../types';
import { TEvent } from '../types/index.d';
import wine1 from '../assets/wine.1.jpg';
import wine3 from '../assets/wine.3.jpg';
import wine4 from '../assets/wine.4.jpg';

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
    icon: '/assets/wine-tasting.png',
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
    title: 'Wine & Something',
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
    imageUrl: wine3,
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
    imageUrl: wine1,
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
    imageUrl: wine4,  
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