import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Documents from "./pages/services/Documents";
import Licenses from "./pages/services/Licenses";
import IPTU from "./pages/services/IPTU";
import Ombudsman from "./pages/services/Ombudsman";
import Traffic from "./pages/services/Traffic";
import SocialAssistance from "./pages/services/SocialAssistance";
import Health from "./pages/services/Health";
import Education from "./pages/services/Education";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/documents" element={<Documents />} />
          <Route path="/services/licenses" element={<Licenses />} />
          <Route path="/services/iptu" element={<IPTU />} />
          <Route path="/services/ombudsman" element={<Ombudsman />} />
          <Route path="/services/traffic" element={<Traffic />} />
          <Route path="/services/social" element={<SocialAssistance />} />
          <Route path="/services/health" element={<Health />} />
          <Route path="/services/education" element={<Education />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
