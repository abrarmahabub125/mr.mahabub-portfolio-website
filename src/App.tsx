import { Outlet } from "react-router";
import AOSProvider from "./AosPrivider";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CanvasCursor from "./components/cursor/CanvasCursor";

function App() {
  return (
    <>
      <AOSProvider />

      <div className="hidden lg:block">
        <Navbar />
        <Sidebar />
      </div>
      <MobileNavbar />
      <CanvasCursor />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
