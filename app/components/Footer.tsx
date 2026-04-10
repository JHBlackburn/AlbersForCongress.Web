import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#B2C9A3] text-gray-900 py-3 mt-auto border-t-4 border-[#FFCC33]">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-sm md:text-base font-medium">
            Paid for by Troy Albers, Democrat, for United States House of Representatives - Florida's 3rd District.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Link
              to="/accessibility-statement"
              className="text-blue-900 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:ring-offset-2 focus:ring-offset-[#B2C9A3] rounded underline font-medium"
            >
              Accessibility Statement
            </Link>
          </div>
          <p className="text-xs text-gray-700">
            &copy; {new Date().getFullYear()} Troy Albers for Congress. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
