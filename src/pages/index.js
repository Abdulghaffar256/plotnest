import NavBar from "../components/Head/Navbar";
import HeroSection from "../components/HomeComponent/HeroSection"; 
import BrowseProperties from "@/components/HomeComponent/BrowseProperties"; 
import ZameenOverview from "@/components/HomeComponent/ZameenOverview"; // <-- import it 
import PopularLocations from "@/components/HomeComponent/PopularLocations"; 
import CityPropertyOverview from "@/components/HomeComponent/CityPropertyOverview";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <BrowseProperties />
      <ZameenOverview />
      <PopularLocations />
      <CityPropertyOverview />
      <Footer /> {/* ✅ Add this */}
    </>
  );
}
