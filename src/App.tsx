import type { JSX } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CanvasCursor from "./components/cursor/CanvasCursor";
import AOSProvider from "./provider/AosPrivider";
import { FilterProvider } from "./provider/filterProvider";

function App(): JSX.Element {
  return (
    <FilterProvider>
      <AOSProvider />
      <Toaster position="bottom-right" reverseOrder={true} />

      <div className="hidden lg:block">
        <Navbar />
        <Sidebar />
      </div>
      <MobileNavbar />
      <CanvasCursor />
      <main>
        <Outlet />
      </main>
    </FilterProvider>
  );
}

export default App;
