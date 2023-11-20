import {styled} from "styled-components";
import {forwardRef} from "react";

const InputWrap = styled.div`
  .ipt_wrap {
    _display: inline-block;
    width: 100%;
    
    label {
      display: inline-block;
      vertical-align: middle;
    }
    
    input {
      display: inline-block;
      vertical-align: middle;
      min-height: 38px;
    }
    
  }
`


const Input = (props) => {

    // let { text, ...rest} = props
    console.log(props)


    return (
        <InputWrap>
            {/*{text.length > 0 && <label>{text}</label>}*/}
            <input {...props?.['props']} />
        </InputWrap>
    )
};

export default forwardRef((props,ref) => <Input props={props} />);