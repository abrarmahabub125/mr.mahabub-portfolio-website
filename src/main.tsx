import "aos/dist/aos.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "./router";
import SmoothScrollProvider from "./SmoothScrollProvider";

createRoot(document.getElementById("root")!).render(
  <SmoothScrollProvider>
    <RouterProvider router={router} />
  </SmoothScrollProvider>,
);
