import { useLenis } from "./hooks/useLenis";
import { AdoptionPaths } from "./sections/AdoptionPaths";
import { ClosingCta } from "./sections/ClosingCta";
import { Faq } from "./sections/Faq";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { ScenarioMosaic } from "./sections/ScenarioMosaic";
import { ScenarioStories } from "./sections/ScenarioStories";
import { SystemsIndex } from "./sections/SystemsIndex";
import { WorkflowChapters } from "./sections/WorkflowChapters";

export default function App() {
  useLenis();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkflowChapters />
        <ScenarioMosaic />
        <SystemsIndex />
        <AdoptionPaths />
        <Faq />
        <ScenarioStories />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
