// Support page data for NPCN

export const supportHero = {
  title: "How Can We Help You?",
  subtitle: "Find answers to your questions or get in touch with our support team",
  searchPlaceholder: "Search for help topics, FAQs, or services..."
};

export const contactMethods = [
  {
    id: "phone",
    title: "Phone Support",
    description: "Speak directly with a support representative",
    icon: "FiPhone",
    value: "0300-0999050",
    availabilityText: "Available 9AM - 9PM",
    action: "tel:0300-0999050",
    actionText: "Call Now"
  },
  {
    id: "email",
    title: "Email Support",
    description: "Send us an email and we'll respond promptly",
    icon: "FiMail",
    value: "npcn.org.pk@gmail.com",
    availabilityText: "Response within 24 hours",
    action: "mailto:npcn.org.pk@gmail.com",
    actionText: "Email Us"
  },
  {
    id: "chat",
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    icon: "FiMessageCircle",
    value: "Live Chat",
    availabilityText: "Available 9AM - 9PM",
    action: "#",
    actionText: "Coming Soon"
  },
  {
    id: "location",
    title: "Visit Us",
    description: "Meet with our team in person",
    icon: "FiMapPin",
    value: "P-442, Shop No. 2, F-Block, Allama Iqbal Colony, Faisalabad",
    availabilityText: "Monday - Sunday: 9AM - 9PM",
    action: "https://maps.google.com/?q=P-442+Shop+No.+2+F-Block+Allama+Iqbal+Colony+Faisalabad",
    actionText: "Get Directions"
  }
];

export const supportResources = [
  {
    id: "setup-guide",
    title: "Setup Guides",
    description: "Step-by-step instructions for setting up your internet connection",
    icon: "📖",
    link: "/support/guides/setup"
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Common issues and how to resolve them quickly",
    icon: "🔧",
    link: "/support/troubleshooting"
  },
  {
    id: "bill-payment",
    title: "Billing & Payment",
    description: "Information about your bill, payment options, and history",
    icon: "💳",
    link: "/support/billing"
  },
  {
    id: "account-management",
    title: "Account Management",
    description: "Manage your account settings and preferences",
    icon: "⚙️",
    link: "/support/account"
  }
];

export const supportCategories = [
  {
    id: "internet",
    title: "Internet",
    description: "Support for internet connectivity issues",
    items: [
      "Connection troubleshooting",
      "Speed optimization",
      "Wi-Fi setup and configuration",
      "Router and modem support",
      "Network security"
    ]
  },
  {
    id: "billing",
    title: "Billing & Account",
    description: "Help with billing questions and account management",
    items: [
      "Understanding your bill",
      "Payment methods",
      "Updating account information",
      "Service plan changes",
      "AutoPay setup"
    ]
  },
  {
    id: "installation",
    title: "Installation & Equipment",
    description: "Support for new installations and equipment",
    items: [
      "Installation scheduling",
      "Equipment setup guides",
      "Hardware troubleshooting",
      "Upgrading equipment",
      "Self-installation support"
    ]
  }
];

export const faqs = [
  {
    id: 'getting-started',
    question: 'How do I get started with NPCN services?',
    answer: 'Getting started is easy! Simply contact our office at 0300-0999050 or visit us at Allama Iqbal Colony, Faisalabad to schedule an installation appointment. Our technical team will guide you through the entire setup process.',
    category: 'general'
  },
  {
    id: 'payment-methods',
    question: 'What payment methods do you accept?',
    answer: 'We accept cash payments at our office location. You can also arrange for our collection agent to visit your location for convenient monthly payment collection. We are working on adding online payment options soon.',
    category: 'billing'
  },
  {
    id: 'plan-upgrade',
    question: 'Can I upgrade or downgrade my plan later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Simply contact our customer service team and we will arrange the changes. Upgrades are usually processed within 24-48 hours.',
    category: 'plans'
  },
  {
    id: 'free-trial',
    question: 'Do you offer any promotional rates or discounts?',
    answer: 'Yes, we regularly offer promotional rates for new customers and seasonal discounts. Contact our sales team at 0300-0999050 to learn about current offers and special packages.',
    category: 'promotions'
  },
  {
    id: 'customer-support',
    question: 'How can I contact customer support?',
    answer: 'You can reach our customer support team via phone at 0300-0999050, email at npcn.org.pk@gmail.com, or visit our office at P-442, Shop No. 2, F-Block, Allama Iqbal Colony, Faisalabad. We provide 24/7 support for technical issues.',
    category: 'support'
  },
  {
    id: 'installation-time',
    question: 'How long does installation take?',
    answer: 'Standard installation usually takes 2-4 hours depending on your location and setup requirements. Our technical team will schedule a convenient time and complete the installation with minimal disruption.',
    category: 'technical'
  },
  {
    id: 'coverage-area',
    question: 'Do you provide services in my area?',
    answer: 'We primarily serve Faisalabad city and surrounding areas. Check our Coverage page to see if your specific location is covered, or contact us to inquire about service availability in your area.',
    category: 'coverage'
  },
  {
    id: 'equipment-maintenance',
    question: 'What about equipment maintenance and repairs?',
    answer: 'All our packages include basic maintenance. For technical issues, our support team provides free troubleshooting and repairs for equipment-related problems. We also offer equipment replacement when necessary.',
    category: 'technical'
  }
];
