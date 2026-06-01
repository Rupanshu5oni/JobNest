import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import NotFound from "./pages/NotFound.jsx";
import Hero from "./components/Hero.jsx";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      {location.pathname === "/" && <Hero />}

      <main className="max-w-6xl mx-auto px-8 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}