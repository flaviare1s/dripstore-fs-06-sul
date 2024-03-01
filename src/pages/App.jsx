import "./App.css";

import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header/Header";
import { BurgerMenu } from "../components/BurgerMenu/BurgerMenu";

export function App() {
  return (
    <div className="h-full min-h-screen w-full flex flex-col">
      <div className="z-40 h-[72px] lg:h-[140px]">
        <Header />
        <BurgerMenu />
      </div>
      <div className="bg-[#F5F5F5]">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}
