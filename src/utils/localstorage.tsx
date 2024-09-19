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
}

interface Component {
  visible: boolean;
  content: ComponentContent;
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