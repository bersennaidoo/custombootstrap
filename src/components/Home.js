import React from "react";
import SiteCarousel from "@/components/SiteCarousel";
import VehicleBrowser from "@/components/VehicleBrowser";

function Home() {
  return (
      <div className="container">
            <SiteCarousel />
            <VehicleBrowser />
      </div>
  );
}

export default Home;
