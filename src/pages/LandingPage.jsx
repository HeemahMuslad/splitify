import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LandpageHeader from "../components/LandpageHeader";
import Split from "../components/Split";
import Track from "../components/Track";
import Settle from "../components/Settle";
import Transform from "../components/Transform";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

function LandingPage() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${isDarkMode ? "bg-gray-900 " : "bg-cool-white-100 "}`}>
      <div className="flex flex-col min-h-screen">
        <LandpageHeader />
        <main className="flex-1">
          <Split />
          <Track />
          <Settle />
          <Transform />
          <Partners />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
