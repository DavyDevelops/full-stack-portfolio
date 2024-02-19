// MainComponent.js
import React from "react";
import { ThreeDCardDemo } from "./cardtd";
import { SpotlightPreview } from "./Spotlight";

export function MainComponent() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
      <SpotlightPreview />
      </div>
      <div className="md:w-1/2">
        <ThreeDCardDemo />
      </div>
    </div>
  );
}
export  default MainComponent