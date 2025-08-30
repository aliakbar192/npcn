// Plans and pricing data for NPCN

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

// Bundle packages for combo deals
export const bundlePackages = [
  {
    id: 'basic-bundle',
    name: 'Internet + TV Basic',
    price: 4000,
    speed: '50 Mbps',
    channels: 50,
    features: [
      'Internet: 50 Mbps download',
      'TV: 50+ channels with HD',
      'Free Wi-Fi router',
      'Free standard installation',
      'Save ₨500/month vs separate services'
    ],
    isPopular: false
  },
  {
    id: 'premium-bundle',
    name: 'Internet + TV Premium',
    price: 6500,
    speed: '100 Mbps',
    channels: 100,
    features: [
      'Internet: 100 Mbps download',
      'TV: 100+ channels with HD',
      'Advanced Wi-Fi router',
      'Premium channel package',
      'Free premium installation',
      'Save ₨1000/month vs separate services'
    ],
    isPopular: true
  },
  {
    id: 'ultimate-bundle',
    name: 'Internet + TV Ultimate',
    price: 9000,
    speed: '200 Mbps',
    channels: 150,
    features: [
      'Internet: 200 Mbps download',
      'TV: 150+ channels with HD & 4K',
      'High-performance Wi-Fi system',
      'All premium channels included',
      'Priority technical support',
      'Save ₨1500/month vs separate services'
    ],
    isPopular: false
  }
];
