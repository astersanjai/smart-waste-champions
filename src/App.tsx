import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";
import Training from "./pages/Training";
import ReportWaste from "./pages/ReportWaste";
import CollectorApp from "./pages/CollectorApp";
import AdminDashboard from "./pages/AdminDashboard";
import GovernmentMonitoring from "./pages/GovernmentMonitoring";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pb-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/training" element={<Training />} />
                <Route path="/report" element={<ReportWaste />} />
                <Route path="/collector" element={<CollectorApp />} />
                <Route path="/government" element={<GovernmentMonitoring />} />
                <Route path="/admin" element={<AdminDashboard />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
