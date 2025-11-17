import { Badge } from '../ui/badge';

export const getStatusBadge = (status: string) => {
  switch (status) {
    case 'paid':
      return <Badge variant="default" className="bg-success text-white">Paid</Badge>;
    case 'pending':
      return <Badge variant="secondary" className="bg-gray-100 text-dark-gray">Pending</Badge>;
    case 'overdue':
      return <Badge variant="destructive">Overdue</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export const calculateUsagePercentage = (used: number, limit: number) => {
  if (limit === -1) return 0; // Unlimited
  return Math.min((used / limit) * 100, 100);
};

export const getUsageColor = (percentage: number) => {
  if (percentage >= 90) return 'text-red-600';
  if (percentage >= 75) return 'text-yellow-600';
  return 'text-success'; // Using accessible teal for success state
};