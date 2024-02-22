import "./App.css";
import { Header } from "../components/header/header";
import { BurgerMenu } from "../components/BurgerMenu/BurgerMenu";

function App() {
  return (
    <div className="h-full min-h-screen bg-slate-600 w-full flex flex-col">
      <Header />
      <BurgerMenu />
    </div>
  );
}

export default App;
