import { createGlobalStyle } from "styled-components";
import backgroundImage from "/assets/background-stars.svg";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=League+Spartan:wght@100..900&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        min-height: 100vh;
        font-family: "League Spartan", sans-serif;
        background: rgb(7, 7, 36);
        background-image: url(${backgroundImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin-bottom: 50px;
    }
`;

export { GlobalStyles };
