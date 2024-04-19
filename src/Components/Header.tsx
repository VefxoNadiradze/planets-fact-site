import styled from "styled-components";
import Datas from "../data.json";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderComponent>
      <Link to={"/Page/Earth"} className="Logo">
        THE PLANETS
      </Link>

      <ul>
        {Datas.map((dataItem, index) => {
          return (
            <li key={index}>
              <Link to={`/Page/${dataItem.name}`} className="navItems">
                {dataItem.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.header`
  padding: 22px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #393850;

  .Logo {
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-family: "Antonio", sans-serif;
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: -1.05px;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    column-gap: 32px;

    li {
      .navItems {
        color: #c1c1c7;
        text-decoration: none;
        font-size: 11px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;

        &:hover {
          color: rgb(255, 255, 255);
        }
      }
    }
  }
`;
