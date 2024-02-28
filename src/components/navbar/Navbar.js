import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

import { useState, useEffect } from "react";

const topButtons = ["Color", "Button", "Animation"];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(0);

  const handleTopButton = (index, item) => () => {
    setActiveButton(index);

    if (item === "Color") navigate("/");
    else navigate(item.toLowerCase());
  };

  return (
    <>
      <div className="navbar-container animation">
        <h1 className="navbar-title">Jun's UI Design Lab</h1>

        <div className="navbar-top-button-container">
          {topButtons.map((item, index) => {
            return (
              <button
                key={index}
                className={`navbar-top-button ${
                  activeButton === index ? "navbar-top-button-active" : null
                }`}
                onClick={handleTopButton(index, item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
