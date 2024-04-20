import { GlobalStyles } from "./Globals/GlobalStyles";
import Header from "./Components/Header";
import Planets from "./Components/Planets";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Datas from "./data.json";

function App() {
  let location = useLocation();
  const [headerActive, setheaderActive] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const activeColor =
    Datas.find((item) => `/Page/${item.name}` === activeLink)?.Colors?.color ||
    {};
  return (
    <>
      <GlobalStyles headerActive={headerActive} />
      <Header
        setheaderActive={setheaderActive}
        headerActive={headerActive}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        activeColor={activeColor}
      />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to={"/Page/Earth"} />}></Route>
        <Route
          path="/Page/:Planet"
          element={
            <Planets setActiveLink={setActiveLink} activeColor={activeColor} />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
