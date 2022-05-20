import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import PALETTE from './constants/palette';
import './assets/css/font.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    outline: none;
    box-sizing: border-box;
  }
  body {
    font-family: 'Pretendard-Medium', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    padding:0;
  }
  a{
    text-decoration: none;
    color:${PALETTE.BLACK}
  }
`;

export default GlobalStyle;
