// localstorage.ts

interface Button {
  text: string;
  href: string;
  className: string;
}

interface NavigationLink {
  text: string;
  href: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Checkup {
  title: string;
  color: string;
  icon: string;
}

interface Card {
  title: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  parameters: number;
  reportDate: string;
  cardTitle: string;
  cardDescription: string;
  cardTrustedBy: string;
}

interface Package {
  name: string;
  description: string;
  price: number;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Page {
  title: string;
  route: string;
  description: string;
  testInfo: string;
  alsoKnownAs: string;
  price: number;
  discountedPrice: number;
  discount: string;
  peopleBooked: number;
  reportsWithin: string;
  parameters: number;
  requisites: string[];
  measures: string;
  identifies: string;
  testPreparation: string;
  whyThisTest: string;
  interpretations: string;
  packages: Package[];
  faqs: FAQ[];
}

interface Organ {
  name: string;
  icon: string;
}

interface VitalBodyOrgansContent {
  title: string;
  description: string;
  organs: Organ[];
  buttonText: string;
}
interface Testimonial {
  id: string;
  content: string;
  author: string;
  location: string;
  avatar: string;
}

interface TestimonialCarouselContent {
  title: string;
  testimonials: Testimonial[];
}

interface Test {
  name: string;
  link: string;
}

interface TestsListContent {
  bloodTests: Test[];
  popularTests: Test[];
}

interface ComponentContent {
  buttons?: Button[];
  title?: string;
  description?: string;
  code?: string;
  features?: Feature[];
  logo?: string;
  navigationLinks?: NavigationLink[];
  subtitle?: string;
  buttonText?: string;
  imageSrc?: string;
  viewAllText?: string;
  checkups?: Checkup[];
  placeholder?: string;
  trustedBy?: string;
  cards?: Card[];
  banners?: BannerItem[];
  vitalBodyOrgans?: VitalBodyOrgansContent;
  testimonialCarousel?: TestimonialCarouselContent;
  testsList?: TestsListContent;

}

interface Component {
  visible: boolean;
  content: ComponentContent;
}

interface BannerItem{
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
}


const defaultState: { [key: string]: Component } = {
  CTAButtons: {
    visible: true,
    content: {
      buttons: [
        { text: "Book Lab Test", href: "/book-test", className: "bookTestButton" },
        { text: "View Packages", href: "/packages", className: "viewPackagesButton" }
      ]
    }
  },
  DiscountOffer: { 
    visible: true, 
    content: {
      title: "Special Offer",
      description: "Get 15% off on all lab tests this month!",
      code: "HEALTH15"
    } 
  },
  HealthMonitoring: {
    visible: true,
    content: {
      title: "Health monitoring",
      description: "Regular testing is essential for sexually active folks. Test discreetly",
      trustedBy: "1M+ customers",
      imageSrc: "/sexual-health-image.jpg",
      cards: [
        {
          title: "STD Test Package - Advanced",
          originalPrice: 10090,
          discountedPrice: 3999,
          discount: "60% Off",
          parameters: 9,
          reportDate: "Sun, 22nd Sep",
          cardTitle: "Sexual Health monitoring",
          cardDescription: "Regular testing is important for sexual health",
          cardTrustedBy: "500K+ customers"
        },
      ]
    }
  },

  VitalBodyOrgans: {
    visible: true,
    content: {
      title: "For Vital Body Organs",
      description: "Explore our comprehensive range of diagnostic tests tailored for vital body organs. Our specialized diagnostic tests focus on evaluating the well-being of essential body organs, ensuring you receive the care you deserve.",
      buttonText: "View All Checkups",
      organs: [
        { name: "Heart", icon: "/icons/heart.svg" },
        { name: "Kidney", icon: "/icons/kidney.svg" },
        { name: "Liver", icon: "/icons/liver.svg" },
        { name: "Bone", icon: "/icons/bone.svg" },
        { name: "Vitamin", icon: "/icons/vitamin.svg" },
        { name: "Hormones", icon: "/icons/hormones.svg" },
        { name: "Gut Health", icon: "/icons/gut.svg" },
        { name: "Blood", icon: "/icons/blood.svg" },
        { name: "Reproductive Organs", icon: "/icons/reproductive.svg" },
      ]
    }
  },

  TestsList: {
    visible: true,
    content: {
      bloodTests: [
        { name: 'Dengue Test near me', link: '/tests/dengue' },
        { name: 'Dengue NS1 Antigen Test near me', link: '/tests/dengue-ns1' },
        { name: 'Lipid Profile Test near me', link: '/tests/lipid-profile' },
        // ... (add more blood tests)
      ],
      popularTests: [
        { name: 'BUN Test', link: '/tests/bun' },
        { name: 'Amh test', link: '/tests/amh' },
        { name: 'CBC test', link: '/tests/cbc' },
        // ... (add more popular tests)
      ]
    }
  },

  TestimonialCarousel: {
    visible: true,
    content: {
      title: "What People Say About Us",
      testimonials: [
        {
          id: "1",
          content: "Superb experience overall. Everything was very well managed right from booking to confirming slots, to pick up and report generation.",
          author: "Mridul Mimansa",
          location: "Mumbai",
          avatar: "/avatars/mridul.jpg"
        },
        {
          id: "2",
          content: "It was as if my job was already done the minute I chose Orange Health for my blood tests. Very professional and smooth!",
          author: "Pragya Raj Gupta",
          location: "Noida",
          avatar: "/avatars/pragya.jpg"
        }
      ]
    }
  },

  BannerCarousel: {
    visible: true,
    content: {
      banners: [
        {
          id: '1',
          title: 'Trust us with their care',
          description: 'Add your parents to unlock ₹3999 Senior Citizen checkup for just ₹1599',
          buttonText: 'Book Now',
          buttonLink: '/book-checkup',
          imageSrc: '/senior-care.jpg'
        },
        {
          id: '2',
          title: 'Comprehensive Health Checkups',
          description: 'Get a complete health assessment at discounted prices',
          buttonText: 'Learn More',
          buttonLink: '/health-checkups',
          imageSrc: '/health-checkup.jpg'
        }
      ]
    }
  },
  Features: {
    visible: true,
    content: {
      features: [
        {
          icon: "/icons/test-tube.svg",
          title: "Accurate Lab Tests",
          description: "State-of-the-art equipment for precise and reliable test results."
        },
        {
          icon: "/icons/clock.svg",
          title: "Quick Turnaround",
          description: "Get your test results within 24 hours for most common tests."
        },
        {
          icon: "/icons/home.svg",
          title: "Home Sample Collection",
          description: "Convenient and safe sample collection at your doorstep."
        }
      ]
    }
  },
  Header: { 
    visible: true, 
    content: {
      logo: "/logo.svg",
      navigationLinks: [
        { text: "Home", href: "/" },
        { text: "Tests", href: "/tests" },
        { text: "About Us", href: "/about" },
        { text: "Contact", href: "/contact" }
      ]
    } 
  },
  Hero: { 
    visible: true, 
    content: {
      title: "Accurate Lab Tests at Your Convenience",
      subtitle: "Book your lab test with Cadabams Health Labs",
      buttonText: "Book Now",
      imageSrc: "/hero-image.jpg"
    } 
  },
  MostBookedCheckups: {
    visible: true,
    content: {
      title: "Most Booked Checkups",
      description: "India's fastest AI powered & temperature-controlled supply chain to collect and test your blood in freshest state.",
      viewAllText: "View All Checkups",
      checkups: [
        { title: "Full Body Checkup", color: "#FFD700", icon: "/icons/full-body.svg" },
        { title: "Sexual Health", color: "#90EE90", icon: "/icons/sexual-health.svg" },
        { title: "Allergy Checkup", color: "#90EE90", icon: "/icons/allergy.svg" },
        { title: "Fever Checkup", color: "#FFD700", icon: "/icons/fever.svg" },
      ]
    }
  },
  Navbar: { 
    visible: true, 
    content: {
      logo: "/logo.svg",
      navigationLinks: [
        { text: "Home", href: "/" },
        { text: "Tests", href: "/tests" },
        { text: "About Us", href: "/about" },
        { text: "Contact", href: "/contact" }
      ]
    } 
  },
  SearchBar: { 
    visible: true, 
    content: {
      placeholder: "Search for lab tests or health packages"
    } 
  },
};

const defaultPages: { [key: string]: Page } = {};

export const saveComponentsState = (components: { [key: string]: Component }) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('componentsState', JSON.stringify(components));
    console.log("Saved state to localStorage:", components);
  }
};

export const loadComponentsState = () => {
  if (typeof window !== 'undefined') {
    const state = localStorage.getItem('componentsState');
    console.log("Retrieved state from localStorage:", state);
    return state ? JSON.parse(state) : defaultState;
  }
  console.log("Returning default state");
  return defaultState;
};

export const savePagesState = (pages: { [key: string]: Page }) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('pagesState', JSON.stringify(pages));
    console.log("Saved pages state to localStorage:", pages);
  }
};

export const loadPagesState = () => {
  if (typeof window !== 'undefined') {
    const state = localStorage.getItem('pagesState');
    console.log("Retrieved pages state from localStorage:", state);
    return state ? JSON.parse(state) : defaultPages;
  }
  console.log("Returning default pages state");
  return defaultPages;
};

export {
  defaultState,
  defaultPages
};