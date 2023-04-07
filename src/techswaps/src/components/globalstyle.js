import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');

  body {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
  }
`;

export default GlobalStyle;
