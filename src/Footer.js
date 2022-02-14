import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://github.com/sandrambsp/react-weather-project"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      by{" "}
      <a href="https://www.sandrapereira.me/" target="_blank" rel="noreferrer">
        Sandra Pereira
      </a>
    </div>
  );
}
