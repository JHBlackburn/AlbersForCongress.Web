import { Link, useLocation } from "react-router";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const year = new Date().getFullYear();
  const socialLinks = [
    {
      name: "Facebook",
      url: "http://www.facebook.com/AlbersforCongress/",
      icon: FaFacebook,
      ariaLabel: "Visit Troy Albers on Facebook",
    },
    {
      name: "Instagram",
      url: "http://www.instagram.com/albersforcongress/",
      icon: FaInstagram,
      ariaLabel: "Visit Troy Albers on Instagram",
    },
    {
      name: "YouTube",
      url: "http://www.youtube.com/@albersforcongress",
      icon: FaYoutube,
      ariaLabel: "Visit Troy Albers on YouTube",
    },
    {
      name: "TikTok",
      url: "http://www.tiktok.com/@albersforcongress",
      icon: FaTiktok,
      ariaLabel: "Visit Troy Albers on TikTok",
    },
  ];

  if (isHome) {
    return (
      <footer className="mt-auto border-t-2 border-[#FFCC33] bg-[#031936] text-white">
        <div className="mx-auto flex min-h-[3.25rem] w-full max-w-7xl items-center justify-between gap-3 px-[clamp(0.75rem,2.8vw,2rem)] py-1.5">
          <div className="min-w-0 leading-tight">
            <p className="text-[clamp(0.68rem,2.6vw,0.9rem)] font-black uppercase tracking-normal">
              PAID FOR BY ALBERS FOR CONGRESS
            </p>
            <p className="hidden text-[clamp(0.62rem,0.8vw,0.76rem)] text-white/78 sm:block">
              Troy Albers, Democrat, for United States House of Representatives - Florida's 3rd District.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="rounded text-white/86 transition-colors hover:text-[#FFCC33] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFCC33] focus-visible:ring-offset-2 focus-visible:ring-offset-[#031936]"
                >
                  <IconComponent className="h-4 w-4 xl:h-5 xl:w-5" aria-hidden="true" />
                </a>
              );
            })}

            <Link
              to="/accessibility-statement"
              className="rounded text-xs font-semibold text-white/86 underline transition-colors hover:text-[#FFCC33] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFCC33] focus-visible:ring-offset-2 focus-visible:ring-offset-[#031936]"
            >
              Accessibility
            </Link>

            <span className="text-xs text-white/66">
              &copy; {year} Troy Albers for Congress
            </span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="mt-auto border-t-2 border-[#FFCC33] bg-[#031936] text-white">
      <div className="container mx-auto px-3 py-2">
        <div className="text-center">
          <p className="text-[11px] leading-snug font-semibold uppercase sm:text-sm sm:leading-normal">
            PAID FOR BY ALBERS FOR CONGRESS
          </p>
          <p className="text-[10px] leading-snug text-white/78 sm:text-xs sm:leading-normal">
            Troy Albers, Democrat, for United States House of Representatives - Florida's 3rd District.
          </p>

          <div className="mb-2 mt-2 flex items-center justify-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="rounded text-white transition-all duration-200 hover:scale-110 hover:text-[#FFCC33] focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:ring-offset-2 focus:ring-offset-[#031936]"
                >
                  <IconComponent className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                </a>
              );
            })}
          </div>

          <div className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-[10px] text-white/76 sm:text-xs">
            <Link
              to="/accessibility-statement"
              className="rounded font-medium text-white underline transition-colors hover:text-[#FFCC33] focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:ring-offset-2 focus:ring-offset-[#031936]"
            >
              Accessibility
            </Link>

            <span aria-hidden="true">|</span>

            <span>&copy; {year} Troy Albers for Congress</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
