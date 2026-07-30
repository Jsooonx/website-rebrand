import { useLenis } from "./hooks/useLenis";
import { Capabilities } from "./sections/Capabilities";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
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
      </main>
    </>
  );
}
