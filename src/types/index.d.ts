// Base common properties
export type TCommonProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

// Event type
export type TEvent = {
  id: string;
  date: Date;
  startTime: string;
  endTime: string;
  location: string;
  capacity: number;
  price: number;
  currentAttendees: number;
  wineSelection: TWine[];
  activities: TActivity[];
  isPrivate: boolean;
} & Required<TCommonProps>;

// Wine type
export type TWine = {
  id: string;
  name: string;
  variety: string;
  year: number;
  region: string;
  price: number;
  description: string;
  imageUrl: string;
};

// Activity type
export type TActivity = {
  id: string;
  duration: number;
  maxParticipants: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  materials: string[];
} & Required<TCommonProps>;

// Booking type
export type TBooking = {
  id: string;
  eventId: string;
  userId: string;
  bookingDate: Date;
  numberOfGuests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  specialRequests?: string;
};

// User type
export type TUser = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  dateJoined: Date;
  preferences?: {
    favoriteWines: string[];
    dietaryRestrictions: string[];
    activityPreferences: string[];
  };
};

// Review type
export type TReview = {
  id: string;
  eventId: string;
  userId: string;
  rating: number;
  comment: string;
  date: Date;
  images?: string[];
};

// Time slot type for booking system
export type TTimeSlot = {
  id: string;
  eventId: string;
  startTime: Date;
  endTime: Date;
  isAvailable: boolean;
  maxCapacity: number;
  currentBookings: number;
};

export type TService = {
  id: string;
  link: string;
} & Required<Pick<TCommonProps, 'title' | 'icon'>>

export type THeroSection = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
};

export type TNavLink = {
    id: string;
} & Required<Pick<TCommonProps, 'title' | 'path'>>