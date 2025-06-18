import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Accordions from "./components/Bootstreap/Accordion";
import "tailwindcss";
import HeroSection from "./components/telwindCss/herosection";
import Demo from "./components/chakrUI/chakrui";
import { Provider } from "./components/ui/provider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Accordions />
      <HeroSection />
      <Provider>
        <Demo />
      </Provider>
    </>
  );
}

export default App;
