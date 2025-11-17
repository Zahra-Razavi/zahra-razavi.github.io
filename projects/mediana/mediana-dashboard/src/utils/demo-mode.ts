/**
 * Demo Mode Utility
 * Provides sample data for all form fields across the application
 */

// Demo data for authentication
export const demoAuthData = {
  login: {
    email: 'sarah.johnson@example.com',
    password: 'DemoPassword123!',
  },
  signup: {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    password: 'DemoPassword123!',
    confirmPassword: 'DemoPassword123!',
  },
};

// Demo data for personal info (onboarding step 1)
export const demoPersonalInfo = {
  firstName: 'Sarah',
  lastName: 'Johnson',
  email: 'sarah.johnson@mediana.com',
  phone: '+1 (555) 123-4567',
  position: 'Customer Success Manager',
  idNumber: '123456789',
};

// Demo data for business info (onboarding step 2)
export const demoBusinessInfo = {
  companyName: 'TechFlow Solutions Inc.',
  industry: 'Technology',
  companySize: '50-100',
  website: 'www.techflowsolutions.com',
  address: '123 Innovation Drive',
  city: 'San Francisco',
  state: 'California',
  zipCode: '94102',
  country: 'United States',
  taxId: '12-3456789',
  companyPhone: '+1 (555) 800-9000',
};

// Demo data for lines setup (onboarding step 3)
export const demoLinesInfo = {
  numberOfLines: '5',
  primaryNumber: '+1 (555) 800-1234',
  departmentLines: [
    { department: 'Sales', number: '+1 (555) 800-1235' },
    { department: 'Support', number: '+1 (555) 800-1236' },
    { department: 'Billing', number: '+1 (555) 800-1237' },
  ],
};

// Demo data for IVR voice setup (onboarding step 4)
export const demoIVRInfo = {
  greeting: 'Welcome to TechFlow Solutions. Your call is important to us.',
  voiceType: 'female',
  language: 'en-US',
  pressOne: 'Sales Department',
  pressTwo: 'Customer Support',
  pressThree: 'Billing Inquiries',
  pressZero: 'Operator',
};

// Demo data for Users page
export function getDemoUsers() {
  return [
    {
      id: '1',
      name: 'Sarah Johnson',
      dialingNumber: '+1 (555) 123-4567',
      extension: '1001',
      callerId: 'Sarah J. - Sales',
      callTime: '2h 34m',
      isOnline: true,
      accessLevel: 'Admin' as const,
      lastOnline: 'Now',
    },
    {
      id: '2',
      name: 'Michael Chen',
      dialingNumber: '+1 (555) 234-5678',
      extension: '1002',
      callerId: 'Michael C. - Support',
      callTime: '1h 12m',
      isOnline: true,
      accessLevel: 'Manager' as const,
      lastOnline: 'Now',
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      dialingNumber: '+1 (555) 345-6789',
      extension: '1003',
      callerId: 'Emily R. - Sales',
      callTime: '3h 45m',
      isOnline: false,
      accessLevel: 'Operators' as const,
      lastOnline: '15 min ago',
    },
    {
      id: '4',
      name: 'David Kim',
      dialingNumber: '+1 (555) 456-7890',
      extension: '1004',
      callerId: 'David K. - Support',
      callTime: '4h 21m',
      isOnline: true,
      accessLevel: 'Operators' as const,
      lastOnline: 'Now',
    },
    {
      id: '5',
      name: 'Jessica Martinez',
      dialingNumber: '+1 (555) 567-8901',
      extension: '1005',
      callerId: 'Jessica M. - Billing',
      callTime: '1h 56m',
      isOnline: false,
      accessLevel: 'Operators' as const,
      lastOnline: '2 hours ago',
    },
    {
      id: '6',
      name: 'Robert Taylor',
      dialingNumber: '+1 (555) 678-9012',
      extension: '1006',
      callerId: 'Robert T. - Sales',
      callTime: '2h 08m',
      isOnline: true,
      accessLevel: 'Manager' as const,
      lastOnline: 'Now',
    },
    {
      id: '7',
      name: 'Amanda White',
      dialingNumber: '+1 (555) 789-0123',
      extension: '1007',
      callerId: 'Amanda W. - Support',
      callTime: '5h 33m',
      isOnline: true,
      accessLevel: 'Operators' as const,
      lastOnline: 'Now',
    },
    {
      id: '8',
      name: 'James Anderson',
      dialingNumber: '+1 (555) 890-1234',
      extension: '1008',
      callerId: 'James A. - Tech',
      callTime: '0h 47m',
      isOnline: false,
      accessLevel: 'Operators' as const,
      lastOnline: '1 day ago',
    },
    {
      id: '9',
      name: 'Lisa Thompson',
      dialingNumber: '+1 (555) 901-2345',
      extension: '1009',
      callerId: 'Lisa T. - Sales',
      callTime: '3h 12m',
      isOnline: true,
      accessLevel: 'Operators' as const,
      lastOnline: 'Now',
    },
    {
      id: '10',
      name: 'Christopher Lee',
      dialingNumber: '+1 (555) 012-3456',
      extension: '1010',
      callerId: 'Chris L. - Admin',
      callTime: '1h 29m',
      isOnline: false,
      accessLevel: 'Admin' as const,
      lastOnline: '30 min ago',
    },
  ];
}

// Check if demo mode is enabled
export function isDemoMode(): boolean {
  // Demo mode is now always enabled by default
  return true;
}

// Enable demo mode
export function enableDemoMode(): void {
  localStorage.setItem('demoMode', 'true');
}

// Disable demo mode
export function disableDemoMode(): void {
  localStorage.setItem('demoMode', 'false');
}

// Toggle demo mode
export function toggleDemoMode(): boolean {
  const currentMode = isDemoMode();
  if (currentMode) {
    disableDemoMode();
  } else {
    enableDemoMode();
  }
  return !currentMode;
}

// Get demo data by field type
export function getDemoDataByField(section: string, field: string): string {
  const demoData: Record<string, Record<string, string>> = {
    auth_login: demoAuthData.login,
    auth_signup: demoAuthData.signup,
    personal: demoPersonalInfo,
    business: demoBusinessInfo,
    lines: {
      numberOfLines: demoLinesInfo.numberOfLines,
      primaryNumber: demoLinesInfo.primaryNumber,
    },
    ivr: demoIVRInfo,
  };

  return demoData[section]?.[field] || '';
}