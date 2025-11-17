import { Phone, Clock, Users, Mic, Settings } from 'lucide-react';
import { Invoice, UsageMetric, Plan, CurrentPlan, BillBreakdown } from './types';

export const currentPlan: CurrentPlan = {
  name: 'Basic Plan',
  price: 100,
  billing: 'monthly',
  features: [
    'Up to 3 lines',
    '1 working hours setting',
    'Only 2 IVR voices'
  ]
};

export const usageData: UsageMetric[] = [
  {
    name: 'Phone Lines',
    used: 2,
    limit: 3,
    unit: 'lines',
    icon: <Phone className="h-4 w-4" />
  },
  {
    name: 'Working Hours Settings',
    used: 1,
    limit: 1,
    unit: 'settings',
    icon: <Clock className="h-4 w-4" />
  },
  {
    name: 'IVR Voices',
    used: 2,
    limit: 2,
    unit: 'voices',
    icon: <Mic className="h-4 w-4" />
  }
];

export const billBreakdown: BillBreakdown = {
  serviceCosts: 100.00,
  usageCosts: {
    phoneUsage: 45.50,
    numberUsage: 15.00,
    lineTime: 25.75
  },
  total: 186.25
};

export const invoiceHistory: Invoice[] = [
  {
    id: '1',
    invoiceNumber: 'INV-2025-001',
    date: '2025-01-01',
    dueDate: '2025-01-15',
    amount: 186.25,
    status: 'paid',
    period: 'January 2025'
  },
  {
    id: '2',
    invoiceNumber: 'INV-2024-012',
    date: '2024-12-01',
    dueDate: '2024-12-15',
    amount: 174.80,
    status: 'paid',
    period: 'December 2024'
  },
  {
    id: '3',
    invoiceNumber: 'INV-2024-011',
    date: '2024-11-01',
    dueDate: '2024-11-15',
    amount: 189.45,
    status: 'paid',
    period: 'November 2024'
  },
  {
    id: '4',
    invoiceNumber: 'INV-2024-010',
    date: '2024-10-01',
    dueDate: '2024-10-15',
    amount: 165.90,
    status: 'paid',
    period: 'October 2024'
  },
  {
    id: '5',
    invoiceNumber: 'INV-2024-009',
    date: '2024-09-01',
    dueDate: '2024-09-15',
    amount: 198.75,
    status: 'paid',
    period: 'September 2024'
  }
];

export const availablePlans: Plan[] = [
  {
    name: 'Basic Plan',
    price: 100,
    lines: '3',
    features: [
      'Up to 3 lines',
      '1 working hours setting',
      'Only 2 IVR voices'
    ],
    recommended: false
  },
  {
    name: 'Pro Plan',
    price: 200,
    lines: '3-20',
    features: [
      'Unlimited IVR voices',
      'Unlimited working hours settings',
      '3 to 20 lines'
    ],
    recommended: true
  }
];