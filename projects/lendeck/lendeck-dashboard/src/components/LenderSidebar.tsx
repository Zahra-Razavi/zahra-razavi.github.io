import { Building2, FileText, Users, TrendingUp, AlertTriangle, BarChart3, UserCheck, ChevronDown, ChevronRight, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';

interface LenderSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function LenderSidebar({ activeTab, onTabChange }: LenderSidebarProps) {
  const location = useLocation();
  const [isosOpen, setIsosOpen] = useState(true);
  const [merchantsOpen, setMerchantsOpen] = useState(true);
  
  const isActive = (href: string) => location.pathname === href;
  const isInGroup = (groupPaths: string[]) => groupPaths.some(path => location.pathname.startsWith(path));
  
  return (
    <div className="h-full p-4">
      <div className="space-y-2">
        {/* Dashboard Overview */}
        <Button
          variant={isActive('/lender/dashboard') ? "default" : "ghost"}
          className={`w-full justify-start gap-3 ${
            isActive('/lender/dashboard') 
              ? 'bg-[#4E0F60] text-white hover:bg-[#4E0F60]/90' 
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
          asChild
        >
          <Link to="/lender/dashboard">
            <TrendingUp className="h-4 w-4" />
            Dashboard Overview
          </Link>
        </Button>

        {/* Deals */}
        <Button
          variant={isActive('/lender/deals') ? "default" : "ghost"}
          className={`w-full justify-start gap-3 ${
            isActive('/lender/deals') 
              ? 'bg-[#4E0F60] text-white hover:bg-[#4E0F60]/90' 
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
          asChild
        >
          <Link to="/lender/deals">
            <FileText className="h-4 w-4" />
            Deals
          </Link>
        </Button>

        {/* Underwriting */}
        <Button
          variant={isActive('/lender/underwriting') ? "default" : "ghost"}
          className={`w-full justify-start gap-3 ${
            isActive('/lender/underwriting') 
              ? 'bg-[#4E0F60] text-white hover:bg-[#4E0F60]/90' 
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
          asChild
        >
          <Link to="/lender/underwriting">
            <Users className="h-4 w-4" />
            Underwriting
          </Link>
        </Button>

        {/* ISOs & Syndicators Collapsible */}
        <div>
          <Button
            variant="ghost"
            className={`w-full justify-between text-muted-foreground hover:text-foreground hover:bg-muted ${
              isInGroup(['/lender/isos', '/lender/syndicators']) ? 'bg-muted text-foreground' : ''
            }`}
            onClick={() => setIsosOpen(!isosOpen)}
          >
            <div className="flex items-center gap-3">
              <UserCheck className="h-4 w-4" />
              ISOs & Syndicators
            </div>
            {isosOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
          {isosOpen && (
            <div className="space-y-1 ml-6 mt-1">
              <Button
                variant={isActive('/lender/isos') ? "default" : "ghost"}
                size="sm"
                className={`w-full justify-start ${
                  isActive('/lender/isos') 
                    ? 'bg-[#4E0F60] text-white hover:bg-[#4E0F60]/90' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                asChild
              >
                <Link to="/lender/isos">ISOs</Link>
              </Button>
              <Button
                variant={isActive('/lender/syndicators') ? "default" : "ghost"}
                size="sm"
                className={`w-full justify-start ${
                  isActive('/lender/syndicators') 
                    ? 'bg-[#4E0F60] text-white hover:bg-[#4E0F60]/90' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                asChild
              >
                <Link to="/lender/syndicators">Syndicators</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Merchants and Advances Collapsible */}
        <div>
          <Button
            variant="ghost"
            className={`w-full justify-between text-muted-foreground hover:text-foreground hover:bg-muted ${
              isInGroup(['/lender/merchants', '/lender/cashadvances']) ? 'bg-muted text-foreground' : ''
            }`}
            onClick={() => setMerchantsOpen(!merchantsOpen)}
          >
            <div className="flex items-center gap-3">
              <Building2 className="h-4 w-4" />
              Merchants & Advances
            </div>
            {merchantsOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
          {merchantsOpen && (
            <div className="space-y-1 ml-6 mt-1">
              <Button
                variant={isActive('/lender/merchants') ? "default" : "ghost"}
                size="sm"
                className={`w-full justify-start ${
                  isActive('/lender/merchants') 
                    ? 'bg-[#4E0F60] text-white hover:bg-[#4E0F60]/90' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                asChild
              >
                <Link to="/lender/merchants">Merchants</Link>
              </Button>
              <Button
                variant={isActive('/lender/cashadvances') ? "default" : "ghost"}
                size="sm"
                className={`w-full justify-start ${
                  isActive('/lender/cashadvances') 
                    ? 'bg-[#4E0F60] text-white hover:bg-[#4E0F60]/90' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                asChild
              >
                <Link to="/lender/cashadvances">Advances</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Alerts */}
        <Button
          variant={isActive('/lender/alerts') ? "default" : "ghost"}
          className={`w-full justify-start gap-3 ${
            isActive('/lender/alerts') 
              ? 'bg-[#4E0F60] text-white hover:bg-[#4E0F60]/90' 
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
          asChild
        >
          <Link to="/lender/alerts">
            <AlertTriangle className="h-4 w-4" />
            Alerts
          </Link>
        </Button>

        {/* Reports */}
        <Button
          variant={isActive('/lender/reports') ? "default" : "ghost"}
          className={`w-full justify-start gap-3 ${
            isActive('/lender/reports') 
              ? 'bg-[#4E0F60] text-white hover:bg-[#4E0F60]/90' 
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
          asChild
        >
          <Link to="/lender/reports">
            <BarChart3 className="h-4 w-4" />
            Reports
          </Link>
        </Button>

        {/* Settings */}
        <Button
          variant={isActive('/lender/settings') ? "default" : "ghost"}
          className={`w-full justify-start gap-3 ${
            isActive('/lender/settings') 
              ? 'bg-[#4E0F60] text-white hover:bg-[#4E0F60]/90' 
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
          asChild
        >
          <Link to="/lender/settings">
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </Button>
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