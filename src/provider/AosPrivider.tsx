import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLocation } from "react-router";

const AOSProvider = (): null => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Refresh animations on route change
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

export default AOSProvider;
