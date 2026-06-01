import { useState, type JSX } from "react";
import { Link, NavLink } from "react-router";
import Brand from "../assets/images/brand.png";

type NavItem = {
  path: string;
  label: string;
};

const navItems: NavItem[] = [
  { path: "/projects", label: "Projects" },
  { path: "/services", label: "Services" },
  { path: "/about-me", label: "About" },
  { path: "/contact-me", label: "Contact" },
];

const Navbar = (): JSX.Element => {
  const [animateKey, setAnimateKey] = useState<number>(0);

  const handleReloadAOS = (): void => setAnimateKey((prev) => prev + 1);

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
          <div className="lg:w-40 xl:w-48">
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
                {navItems.map((item, idx) => (
                  <li key={idx} className="flex-1 px-1.5">
                    <NavLink
                      onClick={handleReloadAOS}
                      className={({ isActive }: { isActive: boolean }) =>
                        `inline-block px-2 py-2 text-sm font-semibold transition-all duration-200 ease-in-out hover:scale-110 ${
                          isActive
                            ? "text-brand"
                            : "text-primary hover:text-brand"
                        }`
                      }
                      to={item.path}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex justify-end lg:w-40 xl:w-48">
            <Link
              className="bg-brand-secondary hover:bg-brand hover:text-primary-black inline-flex h-11 items-center justify-center rounded-full px-6.5 text-sm backdrop-blur-xl transition-all duration-300 hover:scale-105"
              to="/contact-me"
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
