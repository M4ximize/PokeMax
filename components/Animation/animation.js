
import React from "react";

import animationData from './squartle.json'

export default function Anime() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
   
    </div>
  );
}
