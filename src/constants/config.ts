type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    businessName: string;
    email: string;
    phone: string;
  };
  hero: {
    businessName: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
      guests: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    events: TSection;
    testimonials: TSection;
    wineSelection: Required<TSection>;
    activities: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Wine & Women — Social Events and Activities",
    businessName: "Wine & Women",
    email: "hello@wineandwomen.com",
    phone: "+1 (555) 123-4567"
  },
  hero: {
    businessName: "Wine & Women",
    p: [
      "Join our community of wine enthusiasts",
      "Experience unforgettable moments together"
    ],
  },
  contact: {
    p: "Book Your Experience",
    h2: "Join Us.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "How should we call you?",
      },
      email: { 
        span: "Your Email", 
        placeholder: "Where should we send the confirmation?" 
      },
      message: {
        span: "Special Requests",
        placeholder: "Any dietary restrictions or special requirements?",
      },
      guests: {
        span: "Number of Guests",
        placeholder: "How many friends are joining you?",
      },
    },
  },
  sections: {
    about: {
      p: "Our Story",
      h2: "About Us.",
      content: `Wine & Women is a unique social experience that brings together 
      women who share a passion for wine and meaningful connections. We create 
      intimate spaces where you can explore fine wines, engage in creative 
      activities, and build lasting friendships in a welcoming, supportive 
      environment.`,
    },
    events: {
      p: "Join Our Events",
      h2: "Upcoming Experiences.",
    },
    testimonials: {
      p: "Community Voices",
      h2: "What Our Members Say.",
    },
    wineSelection: {
      p: "Our Wines",
      h2: "Curated Selection.",
      content: `We carefully select wines from renowned vineyards and emerging 
      winemakers to provide you with a diverse and exciting tasting experience. 
      From crisp whites to bold reds, our selection caters to both newcomers 
      and experienced wine enthusiasts.`,
    },
    activities: {
      p: "What We Offer",
      h2: "Activities & Workshops.",
      content: `Beyond wine tasting, we offer a variety of engaging activities 
      that complement your experience. From art workshops to book discussions, 
      cooking classes to craft sessions - there's always something exciting 
      happening in our community.`,
    },
  },
}; 