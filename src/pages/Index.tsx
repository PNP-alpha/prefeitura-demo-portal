import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import NewsSection from "@/components/NewsSection";
import EventsSection from "@/components/EventsSection";
import TransparencySection from "@/components/TransparencySection";
import QuickAccess from "@/components/QuickAccess";
import BreakingNews from "@/components/BreakingNews";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Breaking News Bar */}
      <BreakingNews />
      
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Banner */}
        <HeroSection />
        
        {/* Quick Access */}
        <QuickAccess />
        
        {/* News Section - Featured First (G1 Style) */}
        <NewsSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Events Section */}
        <EventsSection />
        
        {/* Transparency Section */}
        <TransparencySection />
        
        {/* Newsletter Section */}
        <NewsletterSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;