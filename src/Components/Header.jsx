import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const NAV_ITEMS = [
  { path: '/', label: 'Home', sectionId: 'home' },
  { path: '/', label: 'About', sectionId: 'about' },
  { path: '/', label: 'Projects', sectionId: 'projects' },
  { path: '/', label: 'Skills', sectionId: 'skills' },
  { path: '/', label: 'Contact', sectionId: 'contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= 50 || currentScrollY < prevScrollY.current);
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[94%] sm:w-[90%] md:w-3/4 z-50 transition-all duration-300 
      ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      <div className="px-4 py-3 rounded-2xl bg-black/40 backdrop-blur-md shadow-lg border border-white/10">
        <div className="flex justify-between items-center">
          {/* Logo / Branding */}
          <div
            className="text-white font-bold hover:text-[#59ff89] text-lg tracking-wide cursor-pointer select-none"
            onClick={() => scrollToSection('home')}
          >
            <img src={logo} alt="Logo" className="w-8 h-8" />
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center gap-4`}>
            {NAV_ITEMS.map(({ label, sectionId }) => (
              <NavButton
                key={sectionId}
                label={label}
                onClick={() => scrollToSection(sectionId)}
              />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Mobile/Tablet Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="flex flex-col mt-4 gap-2 lg:hidden">
            {NAV_ITEMS.map(({ label, sectionId }) => (
              <NavButton
                key={sectionId}
                label={label}
                onClick={() => scrollToSection(sectionId)}
                mobile
              />
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

const NavButton = ({ label, onClick, mobile }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-medium font-poppins transition-all duration-200 rounded-lg cursor-pointer
      ${mobile ? 'w-full text-left text-white hover:bg-white/10' : 'text-white hover:text-[#59ff89] hover:scale-110'}
    `}
  >
    {label}
  </button>
);


const MobileMenuButton = ({ isOpen, onClick }) => (
  <button
    className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
    onClick={onClick}
    aria-label="Toggle menu"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isOpen ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      )}
    </svg>
  </button>
);
