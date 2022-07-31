import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    border-color:${(props) => props.theme.purple_dark};
  }

  body{
    font-family: 'inter';
    background: #1A1A1A;
  }
`
