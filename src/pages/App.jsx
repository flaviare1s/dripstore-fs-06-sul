import { Footer } from "../components/Footer";
import "./App.css";
import { Header } from "../components/Header/Header";
import { BurgerMenu } from "../components/BurgerMenu/BurgerMenu";

export function App() {
  return (
    <div className="h-full min-h-screen w-full flex flex-col">
      <div className="z-40 h-[72px] lg:h-[140px]">
        <Header />
        <BurgerMenu />
      </div>
      <Footer />
    </div>
  );
}
