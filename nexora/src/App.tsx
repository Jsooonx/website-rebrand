import { useLenis } from "./hooks/useLenis";
import { Capabilities } from "./sections/Capabilities";
import { ClosingCta } from "./sections/ClosingCta";
import { Faq } from "./sections/Faq";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Integrations } from "./sections/Integrations";
import { Pricing } from "./sections/Pricing";
import { Testimonials } from "./sections/Testimonials";
import { WhyNexora } from "./sections/WhyNexora";

export default function App() {
  useLenis();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <WhyNexora />
        <Integrations />
        <Pricing />
        <Faq />
        <Testimonials />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
