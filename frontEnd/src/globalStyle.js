import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        body {
            padding: 0.1rem 3rem;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        @media screen and (max-width: 930px) {
            body {
              padding: 0;
            }
          }  
`;
