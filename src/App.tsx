import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import BlogPost from "./pages/BlogPost";
import PaymentSuccess from "./pages/PaymentSuccess";
import AccountabilityService from "./pages/AccountabilityService";
import NotFound from "./pages/NotFound";
import BackgroundMusic from "./components/BackgroundMusic";
import { SeasonProvider } from "./contexts/SeasonContext";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <SeasonProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BackgroundMusic />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog/why-human-accountability-works-for-adhd" element={<BlogPost />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/in-moment" element={<AccountabilityService />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </SeasonProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
