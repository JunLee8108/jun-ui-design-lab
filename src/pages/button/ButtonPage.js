import "./ButtonPage.css";
import { buttonData } from "../../components/common/Data";

import { useState } from "react";

import styled from "styled-components";
import { Editor } from "@monaco-editor/react";

let Buttons = styled.button`
  padding: 20px;
  transition: 0.4s all ease;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderradius};
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};

  &:hover {
    border-radius: ${(props) => props.hoverborderradius || "none"};
    background-color: ${(props) => props.hoverbackground};
    transform: ${(props) => props.hovertransform || "none"};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  }
`;

export default function ButtonPage() {
  const [isClicked, setClicked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleCodeButton = (index) => () => {
    setClicked(true);
    setActiveIndex(index);
  };

  const handleCloseBtn = () => {
    setClicked(false);
    setActiveIndex(-1);
  };

  return (
    <>
      <div className="button-page-container animation">
        {buttonData.map((item, index) => {
          return (
            <div className="button-page-box" key={index}>
              <div className="button-page-box-container">
                <Buttons
                  border={item.border}
                  borderradius={item.borderradius}
                  background={item.background}
                  color={item.color}
                  fontWeight={item.fontWeight}
                  hoverborderradius={item.hoverborderradius}
                  hoverbackground={item.hoverbackground}
                  hovertransform={item.hovertransform}
                >
                  Buttons
                </Buttons>
              </div>

              <button
                className={`button-page-box-show-button ${
                  activeIndex === index
                    ? "button-page-box-show-button-active"
                    : null
                }`}
                onClick={handleCodeButton(index)}
              >
                Show Code
              </button>

              {isClicked && activeIndex === index ? (
                <>
                  <br />

                  <Editor
                    height="100px"
                    language="html"
                    theme="vs-dark"
                    value={`<!--HTML-->  \n<button>Buttons</button>`}
                    options={{
                      fontSize: "13px",
                      minimap: { enabled: false },
                    }}
                    className="animation-slow"
                  />

                  <br />

                  <Editor
                    height="350px"
                    language="css"
                    theme="vs-dark"
                    value={`/* CSS */ \nbutton {\n padding: 20px; \n transition: 0.4s all ease; \n cursor: pointer; \n border: none; \n box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); \n border-radius: ${
                      item.borderradius
                    }; \n background-color: ${item.background}; \n color: ${
                      item.color
                    }; \n font-weight: ${
                      item.fontWeight
                    };\n} \n\nbutton:hover {\n box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4); \n background-color: ${
                      item.hoverbackground
                    }; \n ${
                      item.hoverborderradius
                        ? `border-radius: ${item.hoverborderradius};`
                        : ""
                    }${
                      item.hovertransform
                        ? `transform: ${item.hovertransform};`
                        : ""
                    }\n}`}
                    options={{ fontSize: "13px", minimap: { enabled: false } }}
                    className="animation-slow"
                  />

                  <button
                    className="button-page-code-editor-close"
                    onClick={handleCloseBtn}
                  >
                    CLOSE
                  </button>
                </>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}
