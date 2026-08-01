import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Sectors from "./pages/Sectors";
import About from "./pages/About";
import WhyUs from "./pages/WhyUs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Partnerships from "./pages/Partnerships";
import ServiceDetail from "./pages/ServiceDetail";
import GeneralTrade from "./pages/GeneralTrade";
import Supplies from "./pages/Supplies";
import ITPage from "./pages/ITPage";
import SolarPage from "./pages/SolarPage";
import MedicalPage from "./pages/MedicalPage";
import ServicesPage from "./pages/ServicesPage";
import ConstructionPage from "./pages/ConstructionPage";
import Contact from "./pages/Contact";
import RealEstateRentalLanding from "./pages/landing/RealEstateRental";
import CarRentalLanding from "./pages/landing/CarRental";
import HeavyEquipmentRentalLanding from "./pages/landing/HeavyEquipmentRental";
import TransportCameroonChadLanding from "./pages/landing/TransportCameroonChad";
import SecuritySystemsLanding from "./pages/landing/SecuritySystems";
import ConstructionContractingLanding from "./pages/landing/ConstructionContracting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/general-trade" element={<GeneralTrade />} />
            <Route path="/supplies" element={<Supplies />} />
            <Route path="/it" element={<ITPage />} />
            <Route path="/solar" element={<SolarPage />} />
            <Route path="/medical" element={<MedicalPage />} />
            <Route path="/trade-supply" element={<Navigate to="/supplies" replace />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/construction" element={<ConstructionPage />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/real-estate-rental" element={<RealEstateRentalLanding />} />
            <Route path="/car-rental" element={<CarRentalLanding />} />
            <Route path="/heavy-equipment-rental" element={<HeavyEquipmentRentalLanding />} />
            <Route path="/transport-cameroon-chad" element={<TransportCameroonChadLanding />} />
            <Route path="/security-systems" element={<SecuritySystemsLanding />} />
            <Route path="/construction-contracting" element={<ConstructionContractingLanding />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/links" element={<LinksPage />} />
            <Route path="/global-business" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
