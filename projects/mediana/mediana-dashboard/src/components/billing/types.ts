export interface Invoice {
  id: string;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  period: string;
}

export interface UsageMetric {
  name: string;
  used: number;
  limit: number;
  unit: string;
  icon: React.ReactNode;
}

export interface Plan {
  name: string;
  price: number;
  lines: string;
  features: string[];
  recommended: boolean;
}

export interface CurrentPlan {
  name: string;
  price: number;
  billing: string;
  features: string[];
}

export interface BillBreakdown {
  serviceCosts: number;
  usageCosts: {
    phoneUsage: number;
    numberUsage: number;
    lineTime: number;
  };
  total: number;
}