import { createBrowserRouter } from "react-router";
import App from "./App";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "projects",
        Component: ProjectsPage,
      },
      {
        path: "services",
        Component: ServicesPage,
      },
      {
        path: "about-me",
        Component: AboutPage,
      },
      {
        path: "contact-me",
        Component: ContactPage,
      },
    ],
  },
]);

export { router };
