import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#B2C9A3] text-gray-900 mt-auto border-t-4 border-[#FFCC33]">
      <div className="container mx-auto px-3 py-2">
        <div className="text-center">
          <p className="text-[11px] leading-snug sm:text-sm sm:leading-normal font-semibold">
            Paid for by Troy Albers, Democrat, for United States House of Representatives - Florida's 3rd District.
          </p>

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