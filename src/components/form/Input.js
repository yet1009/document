import {styled} from "styled-components";
import {forwardRef} from "react";
import { FiDelete } from "react-icons/fi";

const InputWrap = styled.div`
  position: relative;
  .ipt_box {
    label {
      display: inline-block;
      vertical-align: middle;
    }
  }
  
  .btn_del {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    
    .icon-del {
      width: 100%;
      height: 100%;
    }
  }
`


const Input = (props) => {
    return (
        <InputWrap>
            {props.label && <label htmlFor={props.name}>{props.label}</label>}
            <input {...props} />
            {props.value.length > 0 && (
                <button
                    className='btn_del'
                    onClick={() => props.handleReset()}
                >
                    <FiDelete className='icon-del'/>
                </button>
            )}
        </InputWrap>
    )
};

export default Input;