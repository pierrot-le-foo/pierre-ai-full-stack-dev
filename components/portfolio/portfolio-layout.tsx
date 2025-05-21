import PortfolioCall from "./call";
import ScrollProgressBar from "../animations/scroll-progress-bar";
import PortfolioHero from "./portfolio-hero";
import PortfolioCustomers from "./portfolio-customers";
import PortfolioSkills from "./portfolio-skills";
import PortfolioTestimonials from "./portfolio-testimonials";
import PortfolioLinks from "./protfolio-links";

export default function PortfolioLayout() {
  return (
    <div className="w-full overflow-x-hidden">
      <PortfolioHero />
      <PortfolioCustomers />
      <PortfolioSkills />
      <PortfolioTestimonials />
      <PortfolioLinks />
      <PortfolioCall />
      <ScrollProgressBar />
    </div>
  );
}
