import "./Home.css";
import { buttonData } from "../../components/common/Data";

import styled from "styled-components";

let DynamicBgColor = styled.div`
  width: 200px;
  background-color: ${(props) => props.bg};
  height: 200px;
  border-radius: 5px;
`;

export default function Home() {
  return (
    <>
      <div className="home-container animation">
        {buttonData.map((item, index) => {
          return (
            <div className="home-box" key={index}>
              <h2>{item.name}</h2>

              <DynamicBgColor bg={item.name} />

              <p>Tag: {item.tag}</p>

              <button className="home-box-button">Show Code</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
