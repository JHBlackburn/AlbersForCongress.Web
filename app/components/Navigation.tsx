import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { FiExternalLink } from "react-icons/fi";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIssuesOpen, setIsIssuesOpen] = useState(false);
  const [isGetInvolvedOpen, setIsGetInvolvedOpen] = useState(false);
  const issuesRef = useRef<HTMLDivElement>(null);
  const getInvolvedRef = useRef<HTMLDivElement>(null);
  const mobileIssuesRef = useRef<HTMLDivElement>(null);
  const mobileGetInvolvedRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsIssuesOpen(false);
    setIsGetInvolvedOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isInsideIssues =
        (issuesRef.current && issuesRef.current.contains(event.target as Node)) ||
        (mobileIssuesRef.current && mobileIssuesRef.current.contains(event.target as Node));

      const isInsideGetInvolved =
        (getInvolvedRef.current && getInvolvedRef.current.contains(event.target as Node)) ||
        (mobileGetInvolvedRef.current && mobileGetInvolvedRef.current.contains(event.target as Node));

      if (!isInsideIssues && isIssuesOpen) {
        setIsIssuesOpen(false);
      }
      if (!isInsideGetInvolved && isGetInvolvedOpen) {
        setIsGetInvolvedOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isIssuesOpen, isGetInvolvedOpen]);

  // Handle keyboard navigation for Issues dropdown
  const handleIssuesKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsIssuesOpen(!isIssuesOpen);
    } else if (e.key === 'Escape') {
      setIsIssuesOpen(false);
    } else if (e.key === 'ArrowDown' && !isIssuesOpen) {
      e.preventDefault();
      setIsIssuesOpen(true);
    }
  };

  // Handle keyboard navigation for Get Involved dropdown
  const handleGetInvolvedKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsGetInvolvedOpen(!isGetInvolvedOpen);
    } else if (e.key === 'Escape') {
      setIsGetInvolvedOpen(false);
    } else if (e.key === 'ArrowDown' && !isGetInvolvedOpen) {
      e.preventDefault();
      setIsGetInvolvedOpen(true);
    }
  };


  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-900 rounded"
            aria-label="Troy Albers for Congress - Home"
          >
            Troy Albers for Congress
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className="hover:text-[#FFCC33] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:ring-offset-2 focus:ring-offset-blue-900 rounded px-2 py-1 border-b-2 border-transparent hover:border-[#FFCC33]"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#FFCC33] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:ring-offset-2 focus:ring-offset-blue-900 rounded px-2 py-1 border-b-2 border-transparent hover:border-[#FFCC33]"
            >
              About
            </Link>

            {/* Issues Dropdown */}
            <div
              ref={issuesRef}
              className="relative"
            >
              <button
                onClick={() => setIsIssuesOpen(!isIssuesOpen)}
                onKeyDown={handleIssuesKeyDown}
                className="hover:text-[#FFCC33] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:ring-offset-2 focus:ring-offset-blue-900 rounded px-2 py-1 flex items-center border-b-2 border-transparent hover:border-[#FFCC33]"
                aria-expanded={isIssuesOpen}
                aria-haspopup="true"
              >
                Issues
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isIssuesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isIssuesOpen && (
                <div
                  className="absolute top-full left-0 bg-blue-800 rounded shadow-lg py-2 min-w-[150px] z-50 border-t-2 border-[#FFCC33]"
                >
                  <Link
                    to="/issues/national"
                    className="block px-4 py-2 hover:bg-blue-700 hover:text-[#FFCC33] transition-colors focus:outline-none focus:bg-blue-700 focus:ring-2 focus:ring-inset focus:ring-[#FFCC33]"
                  >
                    National
                  </Link>
                  <Link
                    to="/issues/local"
                    className="block px-4 py-2 hover:bg-blue-700 hover:text-[#FFCC33] transition-colors focus:outline-none focus:bg-blue-700 focus:ring-2 focus:ring-inset focus:ring-[#FFCC33]"
                  >
                    Local
                  </Link>
                </div>
              )}
            </div>

            {/* Get Involved Dropdown */}
            <div
              ref={getInvolvedRef}
              className="relative"
            >
              <button
                onClick={() => setIsGetInvolvedOpen(!isGetInvolvedOpen)}
                onKeyDown={handleGetInvolvedKeyDown}
                className="hover:text-[#FFCC33] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:ring-offset-2 focus:ring-offset-blue-900 rounded px-2 py-1 flex items-center border-b-2 border-transparent hover:border-[#FFCC33]"
                aria-expanded={isGetInvolvedOpen}
                aria-haspopup="true"
              >
                Get Involved
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isGetInvolvedOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isGetInvolvedOpen && (
                <div
                  className="absolute top-full left-0 bg-blue-800 rounded shadow-lg py-2 min-w-[150px] z-50 border-t-2 border-[#FFCC33]"
                >
                  <Link
                    to="/events"
                    className="block px-4 py-2 hover:bg-blue-700 hover:text-[#FFCC33] transition-colors focus:outline-none focus:bg-blue-700 focus:ring-2 focus:ring-inset focus:ring-[#FFCC33]"
                  >
                    Events
                  </Link>
                  <a
                    href="https://secure.actblue.com/donate/troy-albers-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 hover:bg-blue-700 hover:text-[#FFCC33] transition-colors focus:outline-none focus:bg-blue-700 focus:ring-2 focus:ring-inset focus:ring-[#FFCC33]"
                  >
                    Donate
                    <FiExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <Link
                    to="/volunteer"
                    className="block px-4 py-2 hover:bg-blue-700 hover:text-[#FFCC33] transition-colors focus:outline-none focus:bg-blue-700 focus:ring-2 focus:ring-inset focus:ring-[#FFCC33]"
                  >
                    Volunteer
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="hover:text-[#FFCC33] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:ring-offset-2 focus:ring-offset-blue-900 rounded px-2 py-1 border-b-2 border-transparent hover:border-[#FFCC33]"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:ring-offset-2 focus:ring-offset-blue-900 rounded p-2 hover:text-[#FFCC33] transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            <Link
              to="/"
              onClick={closeMenu}
              className="block py-2 px-4 hover:bg-blue-800 hover:text-[#FFCC33] hover:border-l-4 hover:border-[#FFCC33] transition-all focus:outline-none focus:bg-blue-800 rounded"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="block py-2 px-4 hover:bg-blue-800 hover:text-[#FFCC33] hover:border-l-4 hover:border-[#FFCC33] transition-all focus:outline-none focus:bg-blue-800 rounded"
            >
              About
            </Link>

            {/* Issues Dropdown */}
            <div ref={mobileIssuesRef}>
              <button
                onClick={() => setIsIssuesOpen(!isIssuesOpen)}
                className="w-full text-left flex justify-between items-center hover:text-[#FFCC33] focus:outline-none focus:text-[#FFCC33] py-2 px-4"
                aria-expanded={isIssuesOpen}
              >
                Issues
                <svg
                  className={`w-4 h-4 transition-transform ${isIssuesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isIssuesOpen && (
                <div className="ml-4 space-y-2">
                  <Link
                    to="/issues/national"
                    className="block py-2 px-4 hover:bg-blue-800 hover:text-[#FFCC33] hover:border-l-4 hover:border-[#FFCC33] transition-all focus:outline-none focus:bg-blue-800 rounded"
                  >
                    National
                  </Link>
                  <Link
                    to="/issues/local"
                    className="block py-2 px-4 hover:bg-blue-800 hover:text-[#FFCC33] hover:border-l-4 hover:border-[#FFCC33] transition-all focus:outline-none focus:bg-blue-800 rounded"
                  >
                    Local
                  </Link>
                </div>
              )}
            </div>

            {/* Get Involved Dropdown */}
            <div ref={mobileGetInvolvedRef}>
              <button
                onClick={() => setIsGetInvolvedOpen(!isGetInvolvedOpen)}
                className="w-full text-left flex justify-between items-center hover:text-[#FFCC33] focus:outline-none focus:text-[#FFCC33] py-2 px-4"
                aria-expanded={isGetInvolvedOpen}
              >
                Get Involved
                <svg
                  className={`w-4 h-4 transition-transform ${isGetInvolvedOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isGetInvolvedOpen && (
                <div className="ml-4 space-y-2">
                  <Link
                    to="/events"
                    className="block py-2 px-4 hover:bg-blue-800 hover:text-[#FFCC33] hover:border-l-4 hover:border-[#FFCC33] transition-all focus:outline-none focus:bg-blue-800 rounded"
                  >
                    Events
                  </Link>
                  <a
                    href="https://secure.actblue.com/donate/troy-albers-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 py-2 px-4 hover:bg-blue-800 hover:text-[#FFCC33] hover:border-l-4 hover:border-[#FFCC33] transition-all focus:outline-none focus:bg-blue-800 rounded"
                  >
                    Donate
                    <FiExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <Link
                    to="/volunteer"
                    className="block py-2 px-4 hover:bg-blue-800 hover:text-[#FFCC33] hover:border-l-4 hover:border-[#FFCC33] transition-all focus:outline-none focus:bg-blue-800 rounded"
                  >
                    Volunteer
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="block py-2 px-4 hover:bg-blue-800 hover:text-[#FFCC33] hover:border-l-4 hover:border-[#FFCC33] transition-all focus:outline-none focus:bg-blue-800 rounded"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
