// Site data for the RANA Internet & Cable Company

export const companyInfo = {
  name: 'RANA',
  slogan: 'Connecting You to the World',
  address: '123 Connectivity Street, Digital City, DC 10101',
  phone: '1-800-RANA-CONNECT',
  email: 'support@ranainternet.com',
  socialMedia: {
    facebook: 'https://facebook.com/ranaconnect',
    twitter: 'https://twitter.com/ranaconnect',
    instagram: 'https://instagram.com/ranaconnect',
    linkedin: 'https://linkedin.com/company/ranaconnect'
  }
};

export const internetPackages = [
  {
    id: 'basic-internet',
    name: 'Essential Internet',
    price: 39.99,
    speed: '100 Mbps',
    features: [
      'Download speeds up to 100 Mbps',
      'Upload speeds up to 10 Mbps',
      'Unlimited data usage',
      'Free standard installation',
      'No contract required'
    ],
    isPopular: false
  },
  {
    id: 'standard-internet',
    name: 'Premium Internet',
    price: 59.99,
    speed: '500 Mbps',
    features: [
      'Download speeds up to 500 Mbps',
      'Upload speeds up to 50 Mbps',
      'Unlimited data usage',
      'Free Wi-Fi router included',
      'Free premium installation',
      'No contract required'
    ],
    isPopular: true
  },
  {
    id: 'ultra-internet',
    name: 'Ultra Fiber',
    price: 89.99,
    speed: '1 Gbps',
    features: [
      'Download speeds up to 1 Gbps',
      'Upload speeds up to 100 Mbps',
      'Unlimited data usage',
      'Advanced Wi-Fi system included',
      'Free premium installation',
      'Priority technical support',
      'No contract required'
    ],
    isPopular: false
  }
];

// New plans for the plans page
export const homePlans = [
  {
    id: 'home-basic',
    name: 'Basic Home',
    price: 2500,
    speed: '20 Mbps',
    features: [
      'Download speeds up to 20 Mbps',
      'Upload speeds up to 5 Mbps',
      'Unlimited data usage',
      'Standard Wi-Fi router',
      'Basic technical support',
      'No contract required'
    ],
    isPopular: false
  },
  {
    id: 'home-standard',
    name: 'Standard Home',
    price: 3500,
    speed: '50 Mbps',
    features: [
      'Download speeds up to 50 Mbps',
      'Upload speeds up to 15 Mbps',
      'Unlimited data usage',
      'Advanced Wi-Fi router',
      'Priority customer support',
      'Free installation',
      'No contract required'
    ],
    isPopular: true
  },
  {
    id: 'home-premium',
    name: 'Premium Home',
    price: 5000,
    speed: '100 Mbps',
    features: [
      'Download speeds up to 100 Mbps',
      'Upload speeds up to 25 Mbps',
      'Unlimited data usage',
      'High-performance Wi-Fi router',
      '24/7 Premium support',
      'Free installation',
      'Smart home device setup assistance',
      'No contract required'
    ],
    isPopular: false
  }
];

export const businessPlans = [
  {
    id: 'business-starter',
    name: 'Business Starter',
    price: 6000,
    speed: '100 Mbps',
    features: [
      'Download speeds up to 100 Mbps',
      'Upload speeds up to 50 Mbps',
      'Unlimited data usage',
      'Static IP address',
      'Business-grade router',
      'Standard SLA with 99.5% uptime',
      'Business hours technical support',
      'No contract required'
    ],
    isPopular: false
  },
  {
    id: 'business-professional',
    name: 'Business Pro',
    price: 10000,
    speed: '250 Mbps',
    features: [
      'Download speeds up to 250 Mbps',
      'Upload speeds up to 100 Mbps',
      'Unlimited data usage',
      'Multiple static IP addresses',
      'Advanced business router and firewall',
      'Premium SLA with 99.9% uptime',
      '24/7 Priority support',
      'Free installation and setup',
      'No contract required'
    ],
    isPopular: true
  },
  {
    id: 'business-enterprise',
    name: 'Enterprise Solution',
    price: 15000,
    speed: '500 Mbps',
    features: [
      'Download speeds up to 500 Mbps',
      'Upload speeds up to 250 Mbps',
      'Unlimited data usage',
      'Dedicated IP block',
      'Enterprise-grade networking equipment',
      'Premium SLA with 99.99% uptime',
      '24/7 Dedicated support team',
      'Network monitoring and management',
      'Free professional installation',
      'No contract required'
    ],
    isPopular: false
  }
];

export const cablePackages = [
  {
    id: 'basic-cable',
    name: 'Starter TV',
    price: 49.99,
    channels: 60,
    features: [
      '60+ channels including local',
      'HD channels included',
      'On-demand library access',
      'Free standard installation',
      'No contract required'
    ],
    isPopular: false
  },
  {
    id: 'standard-cable',
    name: 'Select TV',
    price: 69.99,
    channels: 120,
    features: [
      '120+ channels including sports',
      'HD channels included',
      'Extensive on-demand library',
      'DVR service included (up to 100 hours)',
      'Free premium installation',
      'No contract required'
    ],
    isPopular: true
  },
  {
    id: 'premium-cable',
    name: 'Ultimate TV',
    price: 99.99,
    channels: 220,
    features: [
      '220+ channels including premium',
      'All HD & 4K channels included',
      'Full premium channel lineup',
      'Unlimited DVR storage',
      'Free premium installation',
      'Priority technical support',
      'No contract required'
    ],
    isPopular: false
  }
];

export const bundlePackages = [
  {
    id: 'basic-bundle',
    name: 'Basic Bundle',
    price: 79.99,
    speed: '100 Mbps',
    channels: 60,
    features: [
      'Internet: 100 Mbps download',
      'TV: 60+ channels with HD',
      'Free Wi-Fi router',
      'Free standard installation',
      'Save $10/month vs. separate services'
    ],
    isPopular: false
  },
  {
    id: 'premium-bundle',
    name: 'Premium Bundle',
    price: 109.99,
    speed: '500 Mbps',
    channels: 120,
    features: [
      'Internet: 500 Mbps download',
      'TV: 120+ channels with HD',
      'Free Wi-Fi router',
      'DVR service included',
      'Free premium installation',
      'Save $20/month vs. separate services'
    ],
    isPopular: true
  },
  {
    id: 'ultimate-bundle',
    name: 'Ultimate Bundle',
    price: 149.99,
    speed: '1 Gbps',
    channels: 220,
    features: [
      'Internet: 1 Gbps download',
      'TV: 220+ channels with HD & 4K',
      'Advanced Wi-Fi system included',
      'Unlimited DVR storage',
      'Premium channel lineup',
      'Priority technical support',
      'Save $40/month vs. separate services'
    ],
    isPopular: false
  }
];

export const services = [
  {
    id: 'internet',
    title: 'High-Speed Internet',
    description: 'Lightning-fast fiber optic internet with unlimited data and speeds up to 1 Gbps.',
    icon: 'internet',
    link: '/services/internet'
  },
  {
    id: 'support',
    title: '24/7 Customer Support',
    description: 'Round-the-clock technical assistance and customer service when you need it most.',
    icon: 'support',
    link: '/support'
  },
  {
    id: 'smart-home',
    title: 'Smart Home Connectivity',
    description: 'Connect and control all your smart home devices with our reliable internet solutions.',
    icon: 'cloud',
    link: '/services/smart-home'
  },
  {
    id: 'business',
    title: 'Business Solutions',
    description: 'Tailored connectivity options for businesses of all sizes with dedicated support.',
    icon: 'business',
    link: '/business'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Premium Internet Customer',
    rating: 5,
    testimonial: "Switching to RANA was the best decision we made. The internet speed is consistently fast and reliable. Their customer support team is always helpful whenever we have questions.",
    image: '/images/testimonials/sarah.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Ultra Fiber Customer',
    rating: 5,
    testimonial: "As someone who works from home and streams a lot, I need reliable internet. RANA's Ultra Fiber package has been flawless. No more buffering or connection drops during important video calls!",
    image: '/images/testimonials/michael.jpg'
  },
  {
    id: 3,
    name: 'Lisa Rodriguez',
    role: 'Business Solutions Client',
    rating: 5,
    testimonial: "Our small business relies heavily on stable internet. RANA's business package provides the reliability and speed we need, with excellent technical support that understands our unique requirements.",
    image: '/images/testimonials/lisa.jpg'
  }
];

export const usp = [
  {
    id: 'reliability',
    title: 'Reliable Service',
    description: '99.9% uptime guarantee with our fiber optic network',
    icon: 'check'
  },
  {
    id: 'speed',
    title: 'Lightning Fast',
    description: 'Blazing speeds up to 1 Gbps for seamless streaming and gaming',
    icon: 'zap'
  },
  {
    id: 'support',
    title: '24/7 Support',
    description: 'Around-the-clock technical assistance whenever you need help',
    icon: 'headphones'
  },
  {
    id: 'nocontracts',
    title: 'No Contracts',
    description: 'Enjoy our services without long-term commitments',
    icon: 'file'
  },
  {
    id: 'price',
    title: 'Competitive Pricing',
    description: 'Best value packages with no hidden fees or surprises',
    icon: 'dollar'
  },
  {
    id: 'installation',
    title: 'Free Installation',
    description: 'Professional setup included with all our packages',
    icon: 'tool'
  }
];

export const coverageAreas = [
  {
    region: 'Northeast',
    cities: ['New York', 'Boston', 'Philadelphia', 'Washington DC']
  },
  {
    region: 'Midwest',
    cities: ['Chicago', 'Detroit', 'Minneapolis', 'Indianapolis']
  },
  {
    region: 'South',
    cities: ['Atlanta', 'Miami', 'Dallas', 'Houston']
  },
  {
    region: 'West',
    cities: ['Los Angeles', 'San Francisco', 'Seattle', 'Denver']
  }
];

export const faqs = [
  {
    question: 'How fast is your internet service?',
    answer: 'We offer various speed tiers ranging from 100 Mbps to 1 Gbps, depending on your location and plan. Our fiber optic network delivers consistent speeds even during peak usage times.'
  },
  {
    question: 'Do you require long-term contracts?',
    answer: 'No, all our services are available without long-term contracts. We believe in earning your business each month through quality service rather than binding agreements.'
  },
  {
    question: 'Is there a data cap on internet usage?',
    answer: 'No, all our internet plans come with truly unlimited data. Stream, download, and browse as much as you want without worrying about overage charges.'
  },
  {
    question: 'How can I check if service is available in my area?',
    answer: 'You can check service availability by entering your address in the availability checker on our website or by calling our customer service team at 1-800-RANA-CONNECT.'
  }
];
