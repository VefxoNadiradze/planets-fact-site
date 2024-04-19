import { GlobalStyles } from "./Globals/GlobalStyles";
import Header from "./Components/Header";
import Planets from "./Components/Planets";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  return (
    <>
      <GlobalStyles />
      <Header />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to={"/Page/Earth"} />}></Route>
        <Route path="/Page/:Planet" element={<Planets />}></Route>
      </Routes>
    </>
  );
}

export default App;
