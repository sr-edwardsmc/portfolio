import { lazy } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

function App() {
  return (
    <>
      <a
        href="#main"
        className="skip-link sr-only focus:not-sr-only absolute z-50 bg-primary text-white px-4 py-2 rounded"
      >
        Skip to main content
      </a>
      <BrowserRouter>
        <main id="main">
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            {/* <Feedbacks /> */}
            <footer className="relative z-0">
              <Contact />
              <StarsCanvas />
            </footer>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
