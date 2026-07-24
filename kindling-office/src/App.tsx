import { KindlingOfficeHero } from "./components/KindlingOfficeHero";
import { AboutUsAdapter } from "./components/framer/das-studio/AboutUsAdapter";
import { FAQAdapter } from "./components/framer/das-studio/FAQAdapter";
import { FooterAdapter } from "./components/framer/das-studio/FooterAdapter";
import { FooterCTAAdapter } from "./components/framer/das-studio/FooterCTAAdapter";
import { PricingAdapter } from "./components/framer/das-studio/PricingAdapter";
import { ProcessAdapter } from "./components/framer/das-studio/ProcessAdapter";
import { ProjectsAdapter } from "./components/framer/das-studio/ProjectsAdapter";
import { ServicesAdapter } from "./components/framer/das-studio/ServicesAdapter";
import { TestimonialsAdapter } from "./components/framer/das-studio/TestimonialsAdapter";
import { WhoWeAreAdapter } from "./components/framer/das-studio/WhoWeAreAdapter";

export default function App() {
  return (
    <main className="kindling-page">
      <KindlingOfficeHero />
      <WhoWeAreAdapter />
      <ProjectsAdapter />
      <ServicesAdapter />
      <ProcessAdapter />
      <AboutUsAdapter />
      <TestimonialsAdapter />
      <PricingAdapter />
      <FAQAdapter />
      <FooterCTAAdapter />
      <FooterAdapter />
    </main>
  );
}
