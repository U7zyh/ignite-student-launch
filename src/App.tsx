import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { StudentSidebar } from "@/components/StudentSidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Assignments from "./pages/Assignments";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-background">
            <StudentSidebar />
            <div className="flex-1 flex flex-col">
              {/* Header */}
              <header className="h-16 flex items-center justify-between px-6 border-b bg-card/50 backdrop-blur-sm">
                <SidebarTrigger />
                <div className="flex items-center gap-4">
                  <div className="text-sm text-muted-foreground">
                    Spring 2024 Semester
                  </div>
                </div>
              </header>
              
              {/* Main Content */}
              <main className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/assignments" element={<Assignments />} />
                  {/* Placeholder routes for other pages */}
                  <Route path="/schedule" element={<div className="p-6"><h1 className="text-2xl font-bold">Schedule - Coming Soon</h1></div>} />
                  <Route path="/grades" element={<div className="p-6"><h1 className="text-2xl font-bold">Grades - Coming Soon</h1></div>} />
                  <Route path="/notifications" element={<div className="p-6"><h1 className="text-2xl font-bold">Notifications - Coming Soon</h1></div>} />
                  <Route path="/profile" element={<div className="p-6"><h1 className="text-2xl font-bold">Profile - Coming Soon</h1></div>} />
                  <Route path="/settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings - Coming Soon</h1></div>} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
