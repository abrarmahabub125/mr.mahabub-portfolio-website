import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import Brand from "../assets/images/brand.png";

const Navbar = () => {
  const location = useLocation();
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    setAnimateKey((prev) => prev + 1);
  }, [location.pathname]);

  return (
    <div className="fixed top-0 left-0 z-999 w-full">
      {/* Navbar wrapper */}
      <div
        key={animateKey}
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        className="mt-6 px-28"
      >
        {/* Container  */}
        <div className="flex items-center justify-between">
          <div className="w-48">
            <Link to="/">
              <img
                className="pointer-events-auto size-14 object-cover"
                src={Brand}
                alt="brand-logo"
              />
            </Link>
          </div>
          <div className="rounded-full border border-gray-400 backdrop-blur-xl">
            <nav>
              <ul className="flex h-12 items-center justify-center gap-6 px-11">
                <li className="flex-1 px-1.5">
                  <NavLink
                    className={({ isActive }) =>
                      `inline-block px-2 py-2 text-sm font-semibold transition-all duration-200 ease-in-out hover:scale-110 ${
                        isActive
                          ? "text-brand"
                          : "text-primary hover:text-brand"
                      }`
                    }
                    to="/projects"
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="flex-1 px-1.5">
                  <NavLink
                    className={({ isActive }) =>
                      `inline-block px-2 py-2 text-sm font-semibold transition-all duration-200 ease-in-out hover:scale-110 ${
                        isActive
                          ? "text-brand"
                          : "text-primary hover:text-brand"
                      }`
                    }
                    to="/services"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="flex-1 px-1.5">
                  <NavLink
                    className={({ isActive }) =>
                      `inline-block px-2 py-2 text-sm font-semibold transition-all duration-200 ease-in-out hover:scale-110 ${
                        isActive
                          ? "text-brand"
                          : "text-primary hover:text-brand"
                      }`
                    }
                    to="/about-me"
                  >
                    About
                  </NavLink>
                </li>
                <li className="flex-1 px-1.5">
                  <NavLink
                    className={({ isActive }) =>
                      `inline-block px-2 py-2 text-sm font-semibold transition-all duration-200 ease-in-out hover:scale-110 ${
                        isActive
                          ? "text-brand"
                          : "text-primary hover:text-brand"
                      }`
                    }
                    to="/contact-me"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex w-48 justify-end">
            <Link
              className="bg-brand-secondary hover:bg-brand hover:text-primary-black inline-flex h-11 items-center justify-center rounded-full px-6.5 text-sm backdrop-blur-xl transition-all duration-300 hover:scale-105"
              to="/"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
