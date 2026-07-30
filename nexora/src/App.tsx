import { useLenis } from "./hooks/useLenis";
import { Capabilities } from "./sections/Capabilities";
import { Faq } from "./sections/Faq";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Integrations } from "./sections/Integrations";
import { Pricing } from "./sections/Pricing";
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
      </main>
    </>
  );
}
