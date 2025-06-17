import React from "react";
import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { Benefits } from "@/components/Benefits";
import { Footer } from "@/components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroBanner />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
