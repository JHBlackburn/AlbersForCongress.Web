import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";

export default function Footer() {
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
    <footer className="bg-[#B2C9A3] text-gray-900 mt-auto border-t-4 border-[#FFCC33]">
      <div className="container mx-auto px-3 py-2">
        <div className="text-center">
          <p className="text-[11px] leading-snug sm:text-sm sm:leading-normal font-semibold">
            Paid for by Troy Albers, Democrat, for United States House of Representatives - Florida's 3rd District.
          </p>

          {/* Social Media Icons */}
          <div className="mt-2 mb-2 flex justify-center items-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="text-blue-900 hover:text-[#FFCC33] transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:ring-offset-2 focus:ring-offset-[#B2C9A3] rounded hover:[filter:drop-shadow(0_0_1px_rgb(30_58_138))_drop-shadow(0_0_1px_rgb(30_58_138))]"
                >
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
                </a>
              );
            })}
          </div>

          <div className="mt-1 flex flex-wrap justify-center items-center gap-x-3 gap-y-0.5 text-[10px] sm:text-xs text-gray-700">
            <Link
              to="/accessibility-statement"
              className="text-blue-900 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:ring-offset-2 focus:ring-offset-[#B2C9A3] rounded underline font-medium"
            >
              Accessibility
            </Link>

            <span aria-hidden="true">•</span>

            <span>
              &copy; {new Date().getFullYear()} Troy Albers for Congress
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}