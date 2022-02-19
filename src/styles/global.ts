import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";
import PretendardVariable from "assets/PretendardVariable.woff2";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: "Pretendard Variable";
    font-weight: 45 920;
    font-style: normal;
    font-display: swap;
    src: local("Pretendard Variable"),
      url(${PretendardVariable}) format("woff2-variations");
  }

  * {
    box-sizing: border-box;
    font-family: "Pretendard Variable", -apple-system, BlinkMacSystemFont,
      system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic", sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: -0.02rem;
  }
`;

export default GlobalStyle;
