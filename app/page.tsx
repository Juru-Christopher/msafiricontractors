import ImageCarousel from "../components/ImageCarousel";
import ScrollIndicator from "../components/ScrollIndicator";
import StatsSection from "../components/StatsSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import TechnologyPartners from "../components/TechnologyPartners";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero Section with Carousel */}
      <section className="relative">
        <ImageCarousel />
        <ScrollIndicator />
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Technology Partners Section */}
      <TechnologyPartners />
    </>
  );
}