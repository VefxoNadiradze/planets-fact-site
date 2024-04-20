import styled from "styled-components";
import Datas from "../data.json";
import { Link } from "react-router-dom";
import burgerImage from "/assets/icon-hamburger.svg";

interface HeaderInterface {
  headerActive: boolean;
  setheaderActive: React.Dispatch<React.SetStateAction<boolean>>;
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  activeColor: string | object;
}

export default function Header({
  headerActive,
  setheaderActive,
  activeLink,
  setActiveLink,
  activeColor,
}: HeaderInterface) {
  return (
    <HeaderComponent headerActive={headerActive} activeColors={activeColor}>
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
                className={
                  activeLink == `/Page/${dataItem.name}`
                    ? "navItems activeNavitem"
                    : "navItems "
                }
                onClick={() => {
                  setheaderActive(false);
                  setActiveLink(`/Page/${dataItem.name}`);
                }}
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

const HeaderComponent = styled.header<{
  headerActive: boolean;
  activeColors: string | {};
}>`
  position: relative;
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
    z-index: 10;
    padding: 0;
    width: 100%;
    gap: 0;
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
    transition: 0.5s ease-in-out;

    @media screen and (max-width: 660px) {
      position: absolute;
      transform: ${(props) =>
        props.headerActive ? "translateX(0%)" : "translateX(-300%)"};
      top: 70px;
      flex-direction: column;
      align-items: flex-start;
      height: 100vh;
      width: 100%;
      background: rgb(7, 7, 36);
      z-index: 10;
      padding: 10px 0 67px 0;
      overflow: auto;

      li {
        width: 100%;
        padding: 22px 32px 22px 24px;
        border-bottom: 1px solid #393850;
      }
    }

    li {
      position: relative;
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
      @media screen and (min-width: 971px) {
        .activeNavitem::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -100%);
          width: 100%;
          height: 5px;
          background-color: ${(props) => props.activeColors};
        }
      }
    }
  }
`;
