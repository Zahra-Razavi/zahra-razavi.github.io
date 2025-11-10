import { BarChart3, FileText, Send, CheckCircle, DollarSign, CreditCard, Home, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from './ui/utils';
import { useLocation, Link } from 'react-router-dom';

interface BrokerSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'overview', label: 'Dashboard Overview', icon: Home, href: '/broker/overview' },
  { id: 'deals', label: 'Deals', icon: FileText, href: '/broker/deals' },
  { id: 'submissions', label: 'Submissions', icon: Send, href: '/broker/submissions' },
  { id: 'closing', label: 'Closing', icon: CheckCircle, href: '/broker/closing' },
  { id: 'funded', label: 'Funded', icon: DollarSign, href: '/broker/funded' },
  { id: 'ach', label: 'ACH Management', icon: CreditCard, href: '/broker/ach-management' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/broker/settings' },
];

export function BrokerSidebar({ activeTab, onTabChange }: BrokerSidebarProps) {
  const location = useLocation();
  
  return (
    <nav className="p-4 space-y-2">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.href;
        
        return (
          <Button
            key={item.id}
            variant={isActive ? "default" : "ghost"}
            className={cn(
              "w-full justify-start gap-3 h-11",
              isActive 
                ? "bg-[#4E0F60] text-white hover:bg-[#4E0F60]/90" 
                : "text-[#747474] hover:text-foreground hover:bg-[#F9F8FD]"
            )}
            asChild
          >
            <Link to={item.href}>
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}