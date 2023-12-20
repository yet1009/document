import {styled} from "styled-components";
import {useReducer, useState} from "react";
import {Formik} from "formik";
import {useNavigate} from "react-router-dom";

const LoginWrap = styled.form`
  h2 {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
  }

  .ipt_box {
    min-width: 450px;

    & + .ipt_box {
      margin-top: 16px;
    }

  }

  .btn_box {
    margin-top: 40px;
    min-width: 450px;
  }

  .create {
    padding: 32px 0 80px;
    font-size: 16px;
    text-align: center;
    line-height: 24px;

    button {
      font-weight: 600;

      &:hover,
      &:focus {
        color: #5473E2;
        font-weight: 600;
      }
    }
  }


`

const initialState = {
    id: '',
    pw: ''
}

function reducer(state, action) {
    switch (action.type) {
        case 'id':
        case 'pw':
            for (let key in state) {
                if (key === action.type) {
                    state[key] = action.payload
                    return {...state}
                }
            }
            break;

        case 'del':
            let initOBJ = {
                id: '',
                pw: ''
            }
            return {...state, ...initOBJ}

        default:
            return {...state}
    }
}


const Login = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [lists, setList] = useState([])

    const navigate = useNavigate()

    function sendData() {
        const empty = Object.values(state).includes('')
        if (empty) return

        setList(prev => ([
            ...prev,
            state
        ]))

        dispatch({type: 'del'})
    }


    return (
        <div className='login_wrapper'>
            <Formik
                initialValues={state}
                validate={values => {
                    console.log(values)
                }}
                onSubmit={() => {
                }}>
                {
                    ({
                         values,
                         errors,
                         handleChange,
                         handleSubmit,
                     }) => (
                        <LoginWrap className='login__inner'>
                            <h2>Sign in</h2>
                            <div className='create'>
                                If you don't have an account register <br/>
                                You can <button
                                    type='button'
                                    onClick={() => {
                                        navigate('/signup', { replace: true })
                                    }}
                            >Create an account</button>
                            </div>
                            <div className='ipt_box'>
                                <input
                                    type='text'
                                    value={state['id']}
                                    placeholder='ID'
                                    className='ipt'
                                    onChange={(e) => dispatch({type: 'id', payload: e.target.value})}/>
                            </div>
                            <div className='ipt_box'>
                                <input
                                    type='password'
                                    value={state['pw']}
                                    placeholder='Password'
                                    className='ipt'
                                    onChange={(e) => dispatch({type: 'pw', payload: e.target.value})}/>
                            </div>
                            <div className='btn_box'>
                                <button
                                    className='btn ty_black'
                                    type='button'
                                    onClick={sendData}
                                >확인</button>
                            </div>
                        </LoginWrap>

                    )
                }
            </Formik>

        </div>
    )
}

export default Login;