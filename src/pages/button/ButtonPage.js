import "./ButtonPage.css";
import { buttonData } from "../../components/common/Data";

import styled from "styled-components";

let Buttons = styled.button`
  padding: 20px;
  transition: 0.4s all ease;
  cursor: pointer;

  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderradius};
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    border-radius: ${(props) => props.hoverborderradius};
    background-color: ${(props) => props.hoverbackground};
    transform: ${(props) => props.hovertransform || "none"};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  }
`;

export default function ButtonPage() {
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
                className="button-page-box-show-button"
                // className={`home-box-button ${
                //   activeIndex === index ? "home-box-button-active" : null
                // }`}
                // onClick={handleCodeButton(index, item.name)}
              >
                Show Code
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
