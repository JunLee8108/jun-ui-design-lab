import "./ButtonPage.css";
import { buttonData } from "../../components/common/Data";

import styled from "styled-components";

let Buttons = styled.button`
  padding: 20px;
  transition: 0.4s all ease;
  cursor: pointer;

  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    border-radius: ${(props) => props.hoverBorderRadius};
    background-color: ${(props) => props.hoverBackground};
    transform: ${(props) => props.hoverTransform || "none"};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  }
`;

export default function ButtonPage() {
  return (
    <>
      <div className="button-page-container animation">
        {buttonData.map((item, index) => {
          return (
            <div className="button-page-box">
              <div className="button-page-box-container">
                <Buttons
                  border={item.border}
                  borderRadius={item.borderRadius}
                  background={item.background}
                  color={item.color}
                  fontWeight={item.fontWeight}
                  hoverBorderRadius={item.hoverBorderRadius}
                  hoverBackground={item.hoverBackground}
                  hoverTransform={item.hoverTransform}
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
