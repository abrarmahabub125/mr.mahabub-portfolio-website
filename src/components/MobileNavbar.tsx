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

const MobileNavbar = (): JSX.Element => {
  const [isNavOpen, setNavOpen] = useState<boolean>(false);

  const handleCloseMenu = (): void => {
    setNavOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-999 w-full transition-all duration-300 ease-in-out lg:hidden ${isNavOpen ? "h-screen bg-black/70 backdrop-blur-2xl" : "h-auto"}`}
    >
      <div className="px-4">
        <div
          className={`transition-all duration-300 ${isNavOpen ? "" : "rounded-full"}`}
        >
          <nav
            className={`mt-6 border transition-all duration-300 ${
              isNavOpen
                ? "border-transparent"
                : "rounded-full border-gray-400 backdrop-blur-xl"
            }`}
          >
            <ul className="flex h-12 items-center justify-between px-4">
              <li className="px-1.5">
                <Link
                  onClick={handleCloseMenu}
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
                <button
                  onClick={() => setNavOpen(!isNavOpen)}
                  className="flex cursor-pointer items-center justify-center rounded-full p-1 transition-transform duration-300 hover:scale-110"
                >
                  {isNavOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
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
                  )}
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu with Smooth Transition */}
          <div
            className={`overflow-hidden transition-all duration-400 ease-out ${
              isNavOpen
                ? "max-h-screen translate-y-0 opacity-100"
                : "max-h-0 -translate-y-4 opacity-0"
            }`}
          >
            <div className="mt-12 flex flex-col items-center pb-12">
              <nav>
                <ul className="flex flex-col items-center justify-center gap-4">
                  {navItems.map((item, idx) => (
                    <li key={idx}>
                      <NavLink
                        onClick={handleCloseMenu}
                        className={({ isActive }: { isActive: boolean }) =>
                          `inline-block px-2 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:scale-110 ${
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

              <div className="mt-8">
                <Link
                  onClick={handleCloseMenu}
                  className="bg-brand-secondary hover:bg-brand text-primary inline-block w-fit rounded-full px-5 py-2.5 text-sm font-medium shadow-[0_0_15px_rgba(34,211,238,0.5)] backdrop-blur-xl transition-all duration-300 ease-in-out hover:scale-105"
                  to="/contact-me"
                >
                  Start a project
                </Link>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <div className="flex gap-x-8">
                  <Link
                    to="https://www.instagram.com/mr.abrar_mahabub/"
                    target="_blank"
                    onClick={handleCloseMenu}
                    rel="noopener noreferrer"
                    className="border-primary group hover:bg-primary inline-flex size-13 transform items-center justify-center rounded-full border text-white backdrop-blur-xl transition-all duration-300 hover:scale-115"
                  >
                    {/* Instagram SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="size-6 fill-white transition-all duration-300 group-hover:fill-black"
                    >
                      <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0" />
                    </svg>
                  </Link>

                  <Link
                    to="https://github.com/abrarmahabub125"
                    target="_blank"
                    onClick={handleCloseMenu}
                    rel="noopener noreferrer"
                    className="border-primary group hover:bg-primary inline-flex size-13 transform items-center justify-center rounded-full border text-white backdrop-blur-xl transition-all duration-300 hover:scale-115"
                  >
                    {/* GitHub SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="size-6 fill-white transition-all duration-300 group-hover:fill-black"
                    >
                      <path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z" />
                    </svg>
                  </Link>

                  <Link
                    to="https://www.linkedin.com/in/mahabub-alam125/"
                    target="_blank"
                    onClick={handleCloseMenu}
                    rel="noopener noreferrer"
                    className="border-primary group hover:bg-primary inline-flex size-13 transform items-center justify-center rounded-full border text-white backdrop-blur-xl transition-all duration-300 hover:scale-115"
                  >
                    {/* LinkedIn SVG */}
                    <svg
                      width="800px"
                      height="800px"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-6 fill-white transition-all duration-300 group-hover:fill-black"
                    >
                      <rect x="0" fill="none" width="20" height="20" />
                      <g>
                        <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z" />
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
