import LandingNavbar from "../components/landingNavbar";
import LandingHeroSection from "../components/landingheroSection";
import LandingFAQSection from "../components/landingFAQsection";
import LandingFooter from "../components/landingFooter";

export default function Landing() {
  return (
    <div className="bg-black min-h-screen">
      <LandingNavbar />
      <LandingHeroSection />
      <LandingFAQSection />
      <LandingFooter />
    </div>
  );
}