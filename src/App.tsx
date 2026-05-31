import { Toaster } from "react-hot-toast";
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
    </>
  );
}

export default App;
