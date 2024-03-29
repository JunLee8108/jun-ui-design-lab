import "./Navbar.css";

import { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

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

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveButton(0);
    } else if (location.pathname === "/button") {
      setActiveButton(1);
    } else if (location.pathname === "/animation") {
      setActiveButton(2);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="navbar-container animation">
        <h1 className="navbar-title">Jun's UI Design Lab</h1>

        <div className="navbar-pacman-container">
          <PacmanLoader color="orange" /> <p>Growing up..</p>
        </div>

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
