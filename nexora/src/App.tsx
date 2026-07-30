import { useLenis } from "./hooks/useLenis";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";

export default function App() {
  useLenis();

  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
