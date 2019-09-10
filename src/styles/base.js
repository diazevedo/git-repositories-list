import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,body, #root  {
    width: 100%;
  }

  html{
    font-size: 10px;
  }

  body {
    background: #7159c1;
    -webkit-font-smoothing: antialiased !important;
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;

  }

  button {
    cursor: pointer;
  }
`;
