import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Index;
