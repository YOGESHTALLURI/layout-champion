import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CloudPage from "@/pages/Cloud";
import Index from "@/pages/Index";
import MigrationPage from "@/pages/Migration";
import NotFound from "@/pages/NotFound";
import AnalyticsPage from "@/pages/Analytics";
import ServicesPage from "@/pages/Services";
import PowerBuilderMigration from "@/pages/PowerBuilderMigration";
import AdvantagePage from "@/pages/corporate/Advantage";
import ReachUsPage from "@/pages/corporate/ReachUs";
import PrivacyPolicyPage from "@/pages/corporate/PrivacyPolicy";
import Careers from "@/pages/Careers";




import Corporate from "@/pages/Corporate"


// ...



const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* header will show on all pages */}
        <Header />

        <main className="min-h-[60vh]">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/migration" element={<MigrationPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cloud" element={<CloudPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          
           <Route path="/services/powerbuilder" element={<PowerBuilderMigration />} />
         <Route path="/corporate" element={<Corporate />} />
    
  {/* ...other routes */}
             <Route path="/corporate/advantage" element={<AdvantagePage />} />
            <Route path="/corporate/reach-us" element={<ReachUsPage />} />
            <Route path="/corporate/privacy-policy" element={<PrivacyPolicyPage />} />
   
<Route path="/careers" element={<Careers />} />

          </Routes>
        </main>

        {/* footer always present */}
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
