import { Building2, FileText, Users, TrendingUp, Settings, CreditCard } from 'lucide-react';
import { Button } from './ui/button';

interface LenderSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const sidebarItems = [
  {
    id: 'overview',
    label: 'Overview',
    icon: TrendingUp,
  },
  {
    id: 'applications',
    label: 'Applications',
    icon: FileText,
  },
  {
    id: 'underwriting',
    label: 'Underwriting',
    icon: Users,
  },
  {
    id: 'approved',
    label: 'Approved Deals',
    icon: Building2,
  },
  {
    id: 'funded',
    label: 'Funded',
    icon: CreditCard,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
  },
];

export function LenderSidebar({ activeTab, onTabChange }: LenderSidebarProps) {
  return (
    <div className="h-full p-4">
      <div className="space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              className={`w-full justify-start gap-3 ${
                isActive 
                  ? 'bg-[#4E0F60] text-white hover:bg-[#4E0F60]/90' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
              onClick={() => onTabChange(item.id)}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Button>
          );
        })}
      </div>
      
      {/* Lender Stats Summary */}
      <div className="mt-8 p-4 bg-muted/50 rounded-lg">
        <h3 className="font-medium mb-3 text-sm">Quick Stats</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Pending Review</span>
            <span className="font-medium">12</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">This Month</span>
            <span className="font-medium text-green-600">$2.4M</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Approval Rate</span>
            <span className="font-medium">78%</span>
          </div>
        </div>
      </div>
    </div>
  );
}