import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const Reset = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    color: #333;
  }

  input {
    border: 0;
    outline: none;
    display: inline-block;
    vertical-align: middle;
    background-color: transparent;
  }

  button {
    border: 0;
    outline: none;
    display: inline-block;
    vertical-align: middle;
    background-color: transparent;
    cursor: pointer;
  }
`

export default Reset;
