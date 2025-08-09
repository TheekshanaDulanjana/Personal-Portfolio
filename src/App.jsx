import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";

export default function App() {
  useEffect(() => {
    const sections = ["home", "about", "projects", "skills", "contact"];

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const { offsetTop, offsetHeight } = section;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (window.location.hash !== `#${sections[i]}`) {
              window.history.replaceState(
                null,
                "",
                window.location.pathname + `#${sections[i]}`
              );
            }

            const capitalizedSection =
              sections[i].charAt(0).toUpperCase() + sections[i].slice(1);
            document.title =
              sections[i] === "home"
                ? "Theekshana Dulanjana"
                : `Theekshana Dulanjana | ${capitalizedSection}`;

            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Run on mount to update title and hash if needed
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Main single-page route with all sections */}
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Home />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </>
          }
        />

        {/* Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
