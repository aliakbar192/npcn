// Site data for the RANA project

export const companyInfo = {
  name: 'RANA',
  slogan: 'Providing exceptional services since 2020',
  address: '123 Business Avenue, City, Country',
  phone: '+1 (555) 123-4567',
  email: 'info@ranacompany.com',
  socialMedia: {
    facebook: 'https://facebook.com/ranacompany',
    twitter: 'https://twitter.com/ranacompany',
    instagram: 'https://instagram.com/ranacompany',
    linkedin: 'https://linkedin.com/company/ranacompany'
  }
};

export const plans = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 29.99,
    billingPeriod: 'monthly',
    features: [
      'Core functionality access',
      '24/7 customer support',
      'Up to 5 users',
      '10GB storage',
      'Basic analytics'
    ],
    isPopular: false
  },
  {
    id: 'pro',
    name: 'Professional Plan',
    price: 59.99,
    billingPeriod: 'monthly',
    features: [
      'All Basic Plan features',
      'Advanced functionality access',
      'Priority customer support',
      'Up to 20 users',
      '50GB storage',
      'Advanced analytics with reporting'
    ],
    isPopular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    price: 119.99,
    billingPeriod: 'monthly',
    features: [
      'All Professional Plan features',
      'Full platform access',
      'Dedicated account manager',
      'Unlimited users',
      '200GB storage',
      'Custom analytics and integrations',
      'Custom development options'
    ],
    isPopular: false
  }
];

export const services = [
  {
    id: 'service1',
    title: 'Strategic Consulting',
    description: 'Expert guidance to help your business grow and succeed with customized strategies for your industry.',
    icon: 'award'
  },
  {
    id: 'service2',
    title: 'Technology Solutions',
    description: 'Cutting-edge technology implementations to drive your business forward with innovative approaches.',
    icon: 'server'
  },
  {
    id: 'service3',
    title: 'Data Analytics',
    description: 'Harness the power of your data with advanced analytics and insights for better decision making.',
    icon: 'database'
  },
  {
    id: 'service4',
    title: 'Cloud Infrastructure',
    description: 'Secure, scalable cloud solutions that grow with your business needs and reduce operational costs.',
    icon: 'cloud'
  },
  {
    id: 'service5',
    title: 'Security Services',
    description: 'Comprehensive security solutions to protect your business data and digital assets from threats.',
    icon: 'shield'
  },
  {
    id: 'service6',
    title: 'Mobile Development',
    description: 'Custom mobile applications that connect you with your customers wherever they are.',
    icon: 'smartphone'
  }
];

export const faqs = [
  {
    question: 'How do I get started with RANA?',
    answer: 'Getting started is easy! Simply create an account on our website and choose the plan that best fits your needs. Our onboarding team will guide you through the setup process.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely through our payment partners.'
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes, you can upgrade your plan at any time. The price difference will be prorated for the remainder of your billing cycle.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for all our plans. No credit card required to get started.'
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can reach our customer support team 24/7 via email, live chat, or phone. Premium plans include priority support.'
  }
];

export const coverageAreas = [
  {
    region: 'North America',
    countries: ['United States', 'Canada', 'Mexico']
  },
  {
    region: 'Europe',
    countries: ['United Kingdom', 'Germany', 'France', 'Spain', 'Italy', 'Netherlands']
  },
  {
    region: 'Asia Pacific',
    countries: ['Australia', 'Japan', 'Singapore', 'South Korea', 'India']
  }
];
