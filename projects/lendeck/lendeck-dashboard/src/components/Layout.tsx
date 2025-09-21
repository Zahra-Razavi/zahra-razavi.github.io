import { ReactNode, useState } from 'react';
import { Bell, User, Settings, Menu, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface LayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  title?: string;
  currentDashboard: string;
  onDashboardChange: (dashboard: string) => void;
}

export function Layout({ children, sidebar, title, currentDashboard, onDashboardChange }: LayoutProps) {
  // Mock user data - in real app this would come from auth/user context
  const user = {
    name: 'Sara Smith',
    initials: 'SS',
    dashboards: ['broker', 'lender'], // User has access to both dashboards
    avatar: ''
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6 sticky top-0 z-50">
        {/* Left: Lendeck Logo and Name */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#4E0F60] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-bold text-xl text-[#4E0F60]">Lendeck</span>
          </div>
        </div>
        
        {/* Middle: Dashboard Type Selector */}
        <div className="flex items-center">
          {user.dashboards.length > 1 ? (
            <Select value={currentDashboard} onValueChange={onDashboardChange}>
              <SelectTrigger className="w-auto border-0 bg-transparent gap-2 hover:bg-muted/50 focus:ring-0 focus:ring-offset-0">
                <SelectValue>
                  <span className="font-medium text-[#4E0F60] capitalize">
                    {currentDashboard} Dashboard
                  </span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {user.dashboards.includes('broker') && (
                  <SelectItem value="broker">Broker Dashboard</SelectItem>
                )}
                {user.dashboards.includes('lender') && (
                  <SelectItem value="lender">Lender Dashboard</SelectItem>
                )}
              </SelectContent>
            </Select>
          ) : (
            <span className="font-medium text-[#4E0F60] capitalize">
              {user.dashboards[0]} Dashboard
            </span>
          )}
        </div>
        
        {/* Right: Notifications and User */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-[#FF5F0C] rounded-full text-xs text-white flex items-center justify-center">3</span>
          </Button>
          
          {/* User Account */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-3 hover:bg-muted/50">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-[#4E0F60] text-white text-sm">
                    {user.initials}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden md:block font-medium text-foreground">{user.name}</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground hidden md:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-border min-h-[calc(100vh-4rem)] fixed left-0 top-16 z-40 hidden md:block">
          {sidebar}
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-6">
          {title && (
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-foreground">{title}</h1>
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}