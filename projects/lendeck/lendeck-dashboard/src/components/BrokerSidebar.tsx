import { BarChart3, FileText, Send, CheckCircle, DollarSign, CreditCard, Home } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from './ui/utils';

interface BrokerSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'overview', label: 'Dashboard Overview', icon: Home },
  { id: 'deals', label: 'Deals', icon: FileText },
  { id: 'submissions', label: 'Submissions', icon: Send },
  { id: 'closing', label: 'Closing', icon: CheckCircle },
  { id: 'funded', label: 'Funded', icon: DollarSign },
  { id: 'ach', label: 'ACH Management', icon: CreditCard },
];

export function BrokerSidebar({ activeTab, onTabChange }: BrokerSidebarProps) {
  return (
    <nav className="p-4 space-y-2">
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.id}
            variant={activeTab === item.id ? "default" : "ghost"}
            className={cn(
              "w-full justify-start gap-3 h-11",
              activeTab === item.id 
                ? "bg-[#4E0F60] text-white hover:bg-[#4E0F60]/90" 
                : "text-[#747474] hover:text-foreground hover:bg-[#F9F8FD]"
            )}
            onClick={() => onTabChange(item.id)}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </Button>
        );
      })}
    </nav>
  );
}