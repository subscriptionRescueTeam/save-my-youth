import './assets/css/font.css';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import PALETTE from './constants/palette';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    outline: none;
    box-sizing: border-box;
  }
  body {
    font-family: 'Pretendard-Medium', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
    @media all and (min-width:768px) { 
      width: 412px;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); 
     }
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
  #root>main{
    min-height:65vh;
  }
`;

export default GlobalStyle;
