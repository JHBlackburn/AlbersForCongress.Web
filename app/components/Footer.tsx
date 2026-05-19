import { Link, useLocation } from "react-router";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
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

  return (
    <footer
      className={`relative mt-auto bg-[#031936] text-white before:absolute before:inset-x-0 before:h-0.5 before:bg-[#FFCC33] ${
        isHome ? "before:-top-0.5" : "before:top-0"
      }`}
    >
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
