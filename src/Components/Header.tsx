import styled from "styled-components";
import Datas from "../data.json";
import { Link } from "react-router-dom";
import burgerImage from "/assets/icon-hamburger.svg";
import { useState } from "react";

export default function Header() {
  let [headerActive, setheaderActive] = useState<boolean>(false);
  return (
    <HeaderComponent headerActive={headerActive}>
      <div className="logo-burger">
        <Link to={"/Page/Earth"} className="Logo">
          THE PLANETS
        </Link>

        <button
          className="burger"
          onClick={() => setheaderActive(!headerActive)}
        >
          <img src={burgerImage} alt="burger image" />
        </button>
      </div>

      <ul>
        {Datas.map((dataItem, index) => {
          return (
            <li key={index}>
              <Link
                to={`/Page/${dataItem.name}`}
                className="navItems"
                onClick={() => setheaderActive(false)}
              >
                {dataItem.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.header<{ headerActive: boolean }>`
  padding: 22px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #393850;

  @media screen and (max-width: 970px) {
    row-gap: 39px;
    flex-direction: column;
  }

  @media screen and (max-width: 660px) {
    align-items: flex-start;
    position: fixed;
    z-index: 10;
    padding: 0;
    width: 100%;
    gap: 0;
    background: rgb(7, 7, 36);
  }

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

  .burger {
    display: none;
    background-color: transparent;
    border: none;
    outline: none;
    width: 24px;
    height: 17px;
  }

  @media screen and (max-width: 660px) {
    .logo-burger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 24px;
      width: 100%;
    }

    .burger {
      display: block;
    }
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    column-gap: 32px;
    transition: 1s ease-in-out;

    @media screen and (max-width: 660px) {
      position: fixed;
      transform: ${(props) =>
        props.headerActive ? "translateX(0%)" : "translateX(-300%)"};
      top: 68px;
      flex-direction: column;
      align-items: flex-start;
      min-height: 100vh;
      width: 100%;
      background: rgb(7, 7, 36);

      li {
        width: 100%;
        padding: 22px 32px 22px 24px;
        border-bottom: 1px solid #393850;
      }
    }

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
