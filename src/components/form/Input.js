import {styled} from "styled-components";
import {forwardRef} from "react";

const InputWrap = styled.div`
  .ipt_box {
    
    label {
      display: inline-block;
      vertical-align: middle;
    }
    
  }
`


const Input = (props) => {

    return (
        <InputWrap>
            {props.label && <label htmlFor={props.name}>{props.label}</label>}
            <input {...props} />
        </InputWrap>
    )
};

export default Input;