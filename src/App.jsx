import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";

// GA4 Measurement ID from .env
const GA_ID = import.meta.env.VITE_GA_ID;

// ---- Google Analytics Tracking Hook ----
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Load GA script only once
    if (!window.gtag) {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { send_page_view: false });
      `;
      document.head.appendChild(script2);
    }

    // Send page_view event on every route change
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.hash,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location]);
}

// Component to trigger the hook
function PageTracker() {
  usePageTracking();
  return null;
}

export default function App() {
  // Scroll-based title & hash update
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
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <BrowserRouter>
      <PageTracker />
      <Header />
      <Routes>
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
