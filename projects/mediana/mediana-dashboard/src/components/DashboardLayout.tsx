import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarFooter,
} from "./ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  ChevronRight,
  BarChart3,
  Phone,
  PhoneCall,
  Settings,
  Mic,
  CreditCard,
  Users,
  FileText,
  UserCheck,
  Hash,
  LogOut,
  User as UserIcon,
  Mail,
  UserCog,
} from "lucide-react";
import { MedianaLogo } from "./MedianaLogo";

interface DashboardLayoutProps {
  children: React.ReactNode;
  headerActions?: React.ReactNode;
}

export function DashboardLayout({ children, headerActions }: DashboardLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSettingsOpen, setIsSettingsOpen] = useState(
    location.pathname.startsWith('/settings')
  );

  const userEmail = localStorage.getItem('userEmail') || 'user@mediana.com';
  const userName = localStorage.getItem('userName') || 'User';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/reports":
        return "Overview";
      case "/call-logs":
        return "Call Logs";
      case "/lines":
        return "Lines Management";
      case "/lines/add":
        return "Add Extension";
      case "/ivr-flows":
        return "IVR Flows";
      case "/ivr-flows/create":
        return "Create IVR Flow";
      case "/ivr-voices":
        return "IVR Voices";
      case "/billing":
        return "Billing";
      case "/users":
        return "Users";
      case "/design-system":
        return "Design System";
      case "/settings/registration":
        return "Registration Settings";
      case "/settings/view":
        return "View Settings";
      case "/settings/user":
        return "User Settings";
      default:
        if (location.pathname.startsWith('/settings')) {
          return "Settings";
        }
        return "Dashboard";
    }
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="p-4">
            <MedianaLogo />
          </SidebarHeader>

          <SidebarContent className="p-4">
            <SidebarMenu className="space-y-2.5 text-[14px]">
              <SidebarMenuItem className="text-[14px]">
                <SidebarMenuButton asChild isActive={isActiveRoute("/reports")}>
                  <Link to="/reports">
                    <BarChart3 className="h-4 w-4" />
                    Overview
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="text-[14px]">
                <SidebarMenuButton asChild isActive={isActiveRoute("/call-logs")}>
                  <Link to="/call-logs">
                    <PhoneCall className="h-4 w-4" />
                    Call Logs
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="text-[14px]">
                <SidebarMenuButton asChild isActive={isActiveRoute("/lines")}>
                  <Link to="/lines">
                    <Hash className="h-4 w-4" />
                    Lines
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="text-[14px]">
                <SidebarMenuButton asChild isActive={isActiveRoute("/ivr-flows")}>
                  <Link to="/ivr-flows">
                    <Settings className="h-4 w-4" />
                    IVR Flows
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="text-[14px]">
                <SidebarMenuButton asChild isActive={isActiveRoute("/ivr-voices")}>
                  <Link to="/ivr-voices">
                    <Mic className="h-4 w-4" />
                    IVR Voices
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="text-[14px]">
                <SidebarMenuButton asChild isActive={isActiveRoute("/billing")}>
                  <Link to="/billing">
                    <CreditCard className="h-4 w-4" />
                    Billing
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="text-[14px]">
                <SidebarMenuButton asChild isActive={isActiveRoute("/users")}>
                  <Link to="/users">
                    <Users className="h-4 w-4" />
                    Users
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="text-[14px]">
                <Collapsible
                  open={isSettingsOpen}
                  onOpenChange={setIsSettingsOpen}
                >
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="text-[14px]">
                      <Settings className="h-4 w-4" />
                      Settings
                      <ChevronRight
                        className={`h-4 w-4 ml-auto transition-transform ${
                          isSettingsOpen ? "rotate-90" : ""
                        }`}
                      />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="ml-6 mt-1 space-y-1">
                    <SidebarMenuButton
                      className="text-[14px]"
                      asChild
                      isActive={isActiveRoute("/settings/registration")}
                      size="sm"
                    >
                      <Link to="/settings/registration">
                        <FileText className="h-4 w-4"/>
                        Registration
                      </Link>
                    </SidebarMenuButton>
                    <SidebarMenuButton
                      className="text-[14px]"
                      asChild
                      isActive={isActiveRoute("/settings/view")}
                      size="sm"
                    >
                      <Link to="/settings/view">
                        <UserCheck className="h-4 w-4" />
                        View
                      </Link>
                    </SidebarMenuButton>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="p-4 border-t border-sidebar-border">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-sidebar-accent transition-colors text-left">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <UserIcon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm truncate text-sidebar-foreground">{userName}</p>
                    <p className="text-xs text-sidebar-foreground/60 truncate">{userEmail}</p>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/settings/user" className="cursor-pointer">
                    <UserCog className="h-4 w-4 mr-2" />
                    User Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Mail className="h-4 w-4 mr-2" />
                  {userEmail}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                  <LogOut className="h-4 w-4 mr-2" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="bg-card border-b px-6 py-3 sticky top-0 z-10">
            <div className="flex items-center">
              <div>
                <h1 className="text-lg font-bold">{getPageTitle()}</h1>
              </div>
              {headerActions && (
                <div className="ml-auto">
                  {headerActions}
                </div>
              )}
            </div>
          </header>

          <div className="flex-1 w-full">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}