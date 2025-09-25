import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import NewsSection from "@/components/NewsSection";
import EventsSection from "@/components/EventsSection";
import TransparencySection from "@/components/TransparencySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Banner */}
        <HeroSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* News Section */}
        <NewsSection />
        
        {/* Events Section */}
        <EventsSection />
        
        {/* Transparency Section */}
        <TransparencySection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;