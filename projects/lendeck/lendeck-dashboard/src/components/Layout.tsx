import { ReactNode, useState, useEffect } from 'react';
import { Bell, User, Menu, ChevronDown, X, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from './ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { LendeckLogo, LendeckIcon } from './ui/lendeck-logo';
import { useAuth } from './auth/AuthContext';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  title?: string;
  currentDashboard: string;
  onDashboardChange: (dashboard: string) => void;
  onProfileClick: () => void;
}

export function Layout({ children, sidebar, title, currentDashboard, onDashboardChange, onProfileClick }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user: authUser, logout, setUserRole } = useAuth();
  const navigate = useNavigate();
  
  // Use auth user data or fallback to mock
  const user = {
    name: authUser?.name || 'Sara Smith',
    initials: authUser?.name ? authUser.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'SS',
    dashboards: ['broker', 'lender'], // User has access to both dashboards
    avatar: ''
  };

  // Handle dashboard change
  const handleDashboardChange = (newDashboard: string) => {
    // Update the user role in context
    setUserRole(newDashboard as 'broker' | 'lender');
    // Call the parent handler to navigate
    onDashboardChange(newDashboard);
  };

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const sidebar = document.getElementById('mobile-sidebar');
      const menuButton = document.getElementById('mobile-menu-button');
      
      if (isMobileMenuOpen && sidebar && !sidebar.contains(target) && !menuButton?.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background w-full max-w-full overflow-x-hidden">
      {/* Top Navigation Bar - Fixed position for mobile, sticky for desktop */}
      <header className="h-14 sm:h-16 bg-white border-b border-border flex items-center justify-between px-3 sm:px-4 lg:px-6 fixed top-0 left-0 right-0 z-50 w-full max-w-full">
        {/* Left: Mobile Menu + Logo */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink-0">
          <Button 
            id="mobile-menu-button"
            variant="ghost" 
            size="icon" 
            className="md:hidden h-8 w-8 sm:h-9 sm:w-9"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
          </Button>
          
          {/* Show different logo versions based on screen size */}
          <div className="flex items-center">
            {/* Mobile: Icon only */}
            <div className="sm:hidden">
              <LendeckIcon size="sm" />
            </div>
            {/* Tablet: Icon + Text but smaller */}
            <div className="hidden sm:block lg:hidden">
              <LendeckLogo size="sm" />
            </div>
            {/* Desktop: Full logo */}
            <div className="hidden lg:block">
              <LendeckLogo size="md" />
            </div>
          </div>
        </div>
        
        {/* Middle: Dashboard Type Selector */}
        <div className="flex items-center justify-center flex-1 px-2 min-w-0">
          {user.dashboards.length > 1 ? (
            <Select value={currentDashboard} onValueChange={handleDashboardChange}>
              <SelectTrigger className="w-auto min-w-[120px] max-w-[200px] border-0 bg-transparent gap-1 sm:gap-2 hover:bg-muted/50 focus:ring-0 focus:ring-offset-0 h-8 sm:h-10">
                <SelectValue>
                  <span className="font-medium text-[#4E0F60] capitalize text-sm sm:text-base truncate">
                    <span className="hidden sm:inline">{currentDashboard} Dashboard</span>
                    <span className="sm:hidden">{currentDashboard}</span>
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
            <span className="font-medium text-[#4E0F60] capitalize text-sm sm:text-base text-center truncate">
              <span className="hidden sm:inline">{currentDashboard} Dashboard</span>
              <span className="sm:hidden">{currentDashboard}</span>
            </span>
          )}
        </div>
        
        {/* Right: Notifications and User */}
        <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 flex-shrink-0">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative h-8 w-8 sm:h-9 sm:w-9">
            <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 h-3 w-3 sm:h-4 sm:w-4 bg-[#FF5F0C] rounded-full text-[10px] sm:text-xs text-white flex items-center justify-center">3</span>
          </Button>
          
          {/* User Account */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 sm:gap-2 lg:gap-3 hover:bg-muted/50 h-8 sm:h-10 px-2 sm:px-3">
                <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-[#4E0F60] text-white text-xs sm:text-sm">
                    {user.initials}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden lg:block font-medium text-foreground text-sm truncate max-w-[100px]">{user.name}</span>
                <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground hidden lg:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 sm:w-56">
              <DropdownMenuItem className="flex items-center gap-2" onClick={onProfileClick}>
                <User className="h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="flex">
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" />
        )}

        {/* Desktop Sidebar */}
        <aside className="w-64 bg-white border-r border-border min-h-[calc(100vh-4rem)] fixed left-0 top-16 z-40 hidden md:block">
          {sidebar}
        </aside>

        {/* Mobile Sidebar */}
        <aside 
          id="mobile-sidebar"
          className={`w-64 bg-white border-r border-border min-h-[calc(100vh-3.5rem)] fixed left-0 top-14 z-50 transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div onClick={() => setIsMobileMenuOpen(false)}>
            {sidebar}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-3 sm:p-4 lg:p-6 w-full max-w-full overflow-x-hidden pt-16 sm:pt-20 md:pt-6">
          {title && (
            <div className="mb-4 sm:mb-6">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground break-words">{title}</h1>
            </div>
          )}
          <div className="w-full max-w-full overflow-x-hidden">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}