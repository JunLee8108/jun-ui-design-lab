import "./Home.css";
import { buttonData } from "../../components/common/Data";

import { useState } from "react";

import styled from "styled-components";

let DynamicBgColor = styled.div`
  width: 200px;
  background-color: ${(props) => props.bg};
  height: 200px;
  border-radius: 5px;
`;

export default function Home() {
  const [isClicked, setClicked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleCodeButton = (index, item) => () => {
    setClicked(true);
    setActiveIndex(index);

    navigator.clipboard.writeText(item.toUpperCase());
  };

  return (
    <>
      <div className="home-container animation">
        {buttonData.map((item, index) => {
          return (
            <div className="home-box" key={index}>
              <h2>{item.name.toUpperCase()}</h2>

              <DynamicBgColor bg={item.name} />

              <p>Tag: {item.tag}</p>

              <button
                className={`home-box-button ${
                  activeIndex === index ? "home-box-button-active" : null
                }`}
                onClick={handleCodeButton(index, item.name)}
              >
                Copy Code
              </button>

              {isClicked && activeIndex === index ? (
                <>
                  <div className="home-code-box animation">
                    <p>Copied!</p>
                  </div>
                </>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}
