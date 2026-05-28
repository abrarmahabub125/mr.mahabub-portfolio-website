import { Link } from "react-router";
import Brand from "../assets/images/brand.png";

const MobileNavbar = () => {
  return (
    <div className="fixed top-0 left-0 z-999 mt-8 w-full px-4 lg:hidden">
      <div className="rounded-full border border-gray-400 backdrop-blur-xl">
        <nav>
          <ul className="flex h-12 items-center justify-between px-4">
            <li className="px-1.5">
              <Link
                className="text-primary hover:text-brand inline-flex items-center justify-center px-2 py-2 text-sm font-semibold transition-all duration-200 ease-in-out hover:scale-110"
                to="/"
              >
                <img
                  className="pointer-events-auto size-8 object-cover"
                  src={Brand}
                  alt="brand-logo"
                />
              </Link>
            </li>
            <li className="px-1.5">
              <button className="flex cursor-pointer items-center justify-center rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
