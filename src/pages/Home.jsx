import HeroSection from "@/components/sections/HomeHeroSection/Hero";
import AboutSection from "@/components/sections/HomeAboutSection/About";
import Principles from "@/components/sections/HomePrinceplesSection/Principles";
import Portfolio from "@/components/sections/HomePortfolioSection/Portfolio";
import Contacts from "@/components/sections/HomeContactsSection/Contacts";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Principles />
      <Portfolio />
      <Contacts></Contacts>
    </>
  );
}

export default Home;
